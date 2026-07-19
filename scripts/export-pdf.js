const fs = require('fs');
const http = require('http');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

const projectRoot = path.resolve(__dirname, '..');
const buildDirectory = path.join(projectRoot, 'build');
const outputDirectory = path.join(projectRoot, 'output', 'pdf');
const outputFile = path.join(outputDirectory, 'CV_Alexandre_Armand.pdf');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const runBuild = () => {
  const reactScripts = require.resolve('react-scripts/bin/react-scripts.js');

  return new Promise((resolve, reject) => {
    const build = spawn(process.execPath, [reactScripts, 'build'], {
      cwd: projectRoot,
      env: { ...process.env, CI: 'true' },
      stdio: 'inherit',
    });

    build.on('error', reject);
    build.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`La construction a échoué avec le code ${code}.`));
      }
    });
  });
};

const createServer = () => http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
  let filePath = path.resolve(buildDirectory, relativePath);

  if (!filePath.startsWith(`${buildDirectory}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(buildDirectory, 'index.html');
  }

  response.writeHead(200, {
    'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
  });
  fs.createReadStream(filePath).pipe(response);
});

const listen = (server) => new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', () => resolve(server.address().port));
});

const closeServer = (server) => new Promise((resolve) => server.close(resolve));

const exportPdf = async () => {
  await runBuild();
  fs.mkdirSync(outputDirectory, { recursive: true });

  const server = createServer();
  const port = await listen(server);
  let browser;

  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 1 });
    await page.emulateMediaType('print');
    await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outputFile,
      format: 'A4',
      printBackground: true,
      scale: 0.57,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  } finally {
    if (browser) {
      await browser.close();
    }
    await closeServer(server);
  }

  console.log(`PDF créé : ${outputFile}`);
};

exportPdf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import React from 'react';
import { User, Briefcase, GraduationCap, Mail, Globe, MapPin, Languages, Heart, Cpu, Brain, Phone, Award, Rocket } from 'lucide-react';

const TimelineItem = ({ icon: Icon, title, date, organization, location, children }) => (
  <div className="mb-8 flex">
    <div className="flex flex-col items-center mr-4">
      <div className="bg-blue-500 rounded-full p-2 text-white">
        <Icon size={24} />
      </div>
      <div className="flex-1 w-px bg-blue-300 my-2"></div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-700">{organization}</p>
      {location && <p className="text-gray-600">{location}</p>}
      {children}
    </div>
  </div>
);

const BIRTH_DATE = { year: 1994, month: 7, day: 29 };

const calculateAge = (today = new Date()) => {
  let age = today.getFullYear() - BIRTH_DATE.year;
  const birthdayHasPassed =
    today.getMonth() + 1 > BIRTH_DATE.month ||
    (today.getMonth() + 1 === BIRTH_DATE.month && today.getDate() >= BIRTH_DATE.day);

  return birthdayHasPassed ? age : age - 1;
};

const CV = () => {
  const age = calculateAge();

  return (
    <div className="cv-page bg-gray-100 min-h-screen p-4 lg:p-8">
      <div className="cv-document max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="cv-header bg-blue-100 p-6 flex flex-col md:flex-row md:items-center">
          <div className="cv-header-identity md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <img
              src="./photo_profil.png"
              alt="Profile"
              className="rounded-full mb-4 w-40 h-40 object-cover"
            />
            <h1 className="text-2xl font-bold text-center">Alexandre Armand</h1>
            <p className="text-center text-lg text-gray-600">Data Scientist</p>
          </div>
          <div className="cv-header-about md:w-2/3 md:pl-6 flex items-center justify-center">
            <div className="max-w-md">
              <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
                <User className="mr-2" size={20} /> À PROPOS DE MOI
              </h2>
              <p className="text-gray-700 text-center">
                Alex, {age} ans, passionné par l'IA et la nouvelle révolution des modèles de langage (LLM), veille technologique constante dans le domaine.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="cv-main grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Sidebar */}
          <div className="bg-blue-50 p-6 text-gray-800">
            <div className="mb-6 pb-6 border-b border-gray-300">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <User className="mr-2" size={20} /> INFORMATIONS
              </h2>
              <p className="flex items-center"><Mail className="mr-2" size={16} /> alex_armand@live.fr</p>
              <p className="flex items-center"><MapPin className="mr-2" size={16} /> Toulouse, Occitanie, France</p>
              <p className="flex items-center">
                <Globe className="mr-2" size={16} />
                <a href="https://www.linkedin.com/in/alexandre-armand-98321714a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </p>
              <p className="flex items-center"><Phone className="mr-2" size={16} /> 06 49 71 17 87</p>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-300">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Cpu className="mr-2" size={20} /> TECHNOLOGIES
              </h2>
              <ul className="list-disc list-inside">
                <li>Python, Powershell, Bash, Web</li>
                <li>SQL, Flux, Cypher</li>
                <li>Grafana, PBI, Kibana</li>
              </ul>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-300">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Brain className="mr-2" size={20} /> COMPÉTENCES
              </h2>
              <ul className="list-disc list-inside">
                <li>Analyse de données</li>
                <li>Traitement du langage naturel</li>
                <li>Visualisation de données</li>
                <li>Gestion de projets</li>
                <li>Machine Learning</li>
              </ul>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-300">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Award className="mr-2" size={20} /> CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <a href="https://graphacademy.neo4j.com/c/0f6b302c-4584-4b06-9673-33a2fc4c5dea/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Neo4j Graph Data Science Certification
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-300">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Languages className="mr-2" size={20} /> LANGUES
              </h2>
              <ul className="list-disc list-inside">
                <li>Français</li>
                <li>Anglais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Heart className="mr-2" size={20} /> INTÉRÊTS
              </h2>
              <ul className="list-disc list-inside">
                <li>Programmation</li>
                <li>AI</li>
                <li>Aérospatial</li>
                <li>Mécanique</li>
                <li>Science-fiction</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="cv-content lg:col-span-2 p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2" size={24} /> EXPÉRIENCES PROFESSIONNELLES
            </h2>
            <TimelineItem
              icon={Briefcase}
              title="Data Scientist - CDI"
              date="Déc. 2024 - Présent"
              organization="Harmonie Mutuelle"
              location="Toulouse, Occitanie, France - Hybride"
            />
            <TimelineItem
              icon={Briefcase}
              title="Chargé d'études - Synergie Mutuelles"
              date="Nov. 2023 - Nov. 2024"
              organization="Harmonie Mutuelle"
              location="Toulouse, Occitanie, France"
            />
            <TimelineItem
              icon={Briefcase}
              title="Alternant - Chargé d'études"
              date="Oct. 2021 - Oct. 2023"
              organization="Harmonie Mutuelle"
            />
            <TimelineItem
              icon={Briefcase}
              title="Alternant - Capgemini - Airbus"
              date="Nov. 2018 - Nov. 2020"
              organization="Capgemini"
            />

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center">
              <GraduationCap className="mr-2" size={24} /> FORMATIONS
            </h2>
            <TimelineItem
              icon={GraduationCap}
              title="Master 2 (M2), Data Engineer & Data Scientist"
              date="2022 - 2023"
              organization="Toulouse YNOV Campus"
            />
            <TimelineItem
              icon={GraduationCap}
              title="Mastère 1 (M1) Data Engineer & Data Scientist"
              date="2021 - 2022"
              organization="Toulouse YNOV Campus"
            />
            <TimelineItem
              icon={GraduationCap}
              title="Responsable en Ingénierie Logiciel"
              date="2020 - 2021"
              organization="CESI École Supérieure de l'Alternance"
            />
            <TimelineItem
              icon={GraduationCap}
              title="Gestionnaire de maintenance en informatique"
              date="2018 - 2020"
              organization="CESI École Supérieure de l'Alternance"
            />
            <TimelineItem
              icon={GraduationCap}
              title="Sciences physiques"
              date="2014 - 2016"
              organization="Université Paul Sabatier Toulouse III"
            />
            <TimelineItem
              icon={GraduationCap}
              title="Baccalauréat, sciences"
              date="2013"
              organization="Saint Sernin"
            />
          </div>
        </div>

        {/* Footer with Projects */}
        <div className="bg-blue-50 p-6 border-t border-gray-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Rocket className="mr-2" size={24} /> PROJETS
          </h2>
          <div className="cv-project-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Projects */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Personnels</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="https://github.com/americium-241/DMSAI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    DMSAI
                  </a>
                  <p className="ml-5 text-sm">Plateforme Document AI self-hosted : OCR vision LLM, extraction structurée, classification, entités</p>
                </li>
                <li>
                  <a href="https://github.com/americium-241/DecentralFlow" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    DecentralFlow
                  </a>
                  <p className="ml-5 text-sm">Framework Python de microservices sans broker : files SQLite, retries, routage et monitoring</p>
                </li>
                <li>
                  <a href="https://github.com/americium-241/YNOV_PFE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Application de recommandation de chemin multimodaux
                  </a>
                  <p className="ml-5 text-sm">Neo4j, Streamlit, chatbot intégré (projet de fin d'étude M2)</p>
                </li>
                <li>
                  <a href="https://github.com/americium-241/LLM_Omnitool_UI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Application LLM avec fonctions outils
                  </a>
                  <p className="ml-5 text-sm">RAG system, modèles LLM locaux</p>
                </li>
                <li>
                  <a href="https://github.com/americium-241/PromptFlow" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Framework minimaliste de création de workflow LLM
                  </a>
                  <p className="ml-5 text-sm">Plugin oriented</p>
                </li>
              </ul>
            </div>
            {/* Professional Projects */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Professionnels</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Plateforme Document AI en production
                  <p className="ml-5 text-sm">Architecture et pipeline de bout en bout : OCR DocTR/LLM, extraction, entités et classification Qwen, TF-IDF et SVM (~2 M de documents/an)</p>
                </li>
                <li>
                  Monitoring de la plateforme IA
                  <p className="ml-5 text-sm">InfluxDB, Grafana : performances, indicateurs opérationnels et détection d'anomalies</p>
                </li>
                <li>
                  Saisie automatique de données médicales
                  <p className="ml-5 text-sm">Estimation de confiance par ensembles, model agreement et vérification multi-modèles</p>
                </li>
                <li>
                  Intégration de modules pour lier deux logiciels métiers
                  <p className="ml-5 text-sm">Scripts de vérification qualité automatisés, tests de non-régression</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;

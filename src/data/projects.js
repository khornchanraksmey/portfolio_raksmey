export const projectsData = [
  {
    id: "sala-chatbot",
    title: "Sala Chatbot",
    tagline: "AI Document Assistant for Teachers & Administrators",
    description: "An AI chatbot using a Retrieval-Augmented Generation (RAG) pipeline to help teachers and school administrators instantly query and extract accurate answers from institutional documents, policies, and curriculum guides.",
    longDescription: "Built an intelligent document question-answering assistant deployed on Telegram. The system digests PDF guidelines and official school circulars into semantic vector embeddings, retrieves the most relevant excerpts based on natural language queries, and generates factual responses with citation references using LLMs.",
    category: "AI & NLP",
    badge: "Featured AI Project",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "LLM",
      "Telegram Bot",
      "PostgreSQL"
    ],
    highlights: [
      "Dual routing architecture: Connects seamlessly to backend with fast AI service fallback",
      "Session continuity with context retention across multi-turn conversations",
      "Telegram UI with real-time typing indicators and smart message chunking",
      "PostgreSQL storage for conversation logs, feedback, and auditability"
    ],
    githubUrl: "https://github.com/reaksmey/chatbot-telegram-bot",
    demoUrl: "https://t.me/MyChatbotV2_bot",
    accentColor: "emerald",
    imageType: "rag-bot",
    imageUrl: "/images/projects/sala-chatbot.png",
  },
  {
    id: "soil-quality-assessment",
    title: "Cambodian Soil Quality Assessment",
    tagline: "IoT Telemetry & Spatial Geospatial Interpolation",
    description: "An IoT-based system for collecting, indexing, and analyzing soil quality data (pH, moisture, NPK) across Cambodian agricultural plots with spatial Kriging visualization.",
    longDescription: "Developed an end-to-end IoT and data analysis architecture. Field sensors connected to ESP32 microcontrollers transmit real-time soil metrics to a FastAPI ingest endpoint. Data is stored with geospatial coordinates in PostgreSQL/PostGIS, followed by Ordinary Kriging spatial interpolation (PyKrige) to produce high-resolution soil fertility heatmaps on Streamlit.",
    category: "IoT & Data Science",
    badge: "Geospatial & IoT",
    technologies: [
      "ESP32",
      "Soil Sensor",
      "FastAPI",
      "PostgreSQL/PostGIS",
      "Python",
      "Streamlit",
      "PyKrige",
      "Telegram Bot"
    ],
    highlights: [
      "Hardware telemetry: ESP32 sensor integration measuring pH, moisture, and conductivity",
      "PostGIS spatial queries for localized field boundary and coordinate analysis",
      "PyKrige geostatistical modeling for predicting soil nutrient distribution",
      "Interactive Streamlit web dashboard + Telegram alerts for out-of-spec soil conditions"
    ],
    githubUrl: "https://github.com/reaksmey",
    demoUrl: "https://streamlit.io",
    accentColor: "teal",
    imageType: "geospatial",
    imageUrl: "/images/projects/soil-quality.png",
  },
  {
    id: "school-management-dashboard",
    title: "School Management Dashboard",
    tagline: "Executive Analytics for Academic Institutions",
    description: "Data dashboards for analyzing school information, students, teachers, attendance, performance, and institutional education metrics.",
    longDescription: "Designed and implemented interactive multi-tenant reporting dashboards. Cleaned and structured relational educational data in PostgreSQL, authored performant analytical SQL queries and window functions, and created comprehensive Metabase visualization dashboards to help educators track student drop-out risks, teacher workload, and academic grades.",
    category: "Data Analytics",
    badge: "Analytics & BI",
    technologies: [
      "Metabase",
      "SQL",
      "PostgreSQL",
      "Data Analysis"
    ],
    highlights: [
      "Key KPI tracking: Student attendance rates, class averages, and grading percentiles",
      "Advanced SQL queries optimizing multi-table joins, aggregations, and CTEs",
      "Cohort analysis revealing longitudinal academic progress across semesters",
      "Role-based dashboard permissions tailored for principals, teachers, and staff"
    ],
    githubUrl: "https://github.com/reaksmey",
    demoUrl: null,
    accentColor: "indigo",
    imageType: "dashboard",
    imageUrl: "/images/projects/school-dashboard.png",
  },
  {
    id: "machine-learning-projects",
    title: "Machine Learning Projects",
    tagline: "Algorithms from Scratch & Practical Modeling",
    description: "A comprehensive collection of machine learning projects demonstrating mathematical foundations, algorithm implementations from scratch, and practical data analysis.",
    longDescription: "Explores foundational machine learning algorithms implemented with pure Python/NumPy as well as production modeling using Scikit-Learn. Covers Linear Regression (gradient descent & analytical normal equation), KNN, Support Vector Machines, Random Forests, Convolutional Neural Networks, and PCA dimensionality reduction.",
    category: "Machine Learning",
    badge: "Core ML",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Plotly"
    ],
    highlights: [
      "From-scratch implementations: Vectorized gradient descent, loss functions, and backprop",
      "Comprehensive model evaluation: ROC-AUC curves, confusion matrices, and cross-validation",
      "Interactive Plotly visualizations for decision boundaries and feature clusters",
      "Thorough documentation and reproducible Jupyter notebooks"
    ],
    githubUrl: "https://github.com/reaksmey/machine_learning_from_scratch",
    demoUrl: null,
    accentColor: "cyan",
    imageType: "ml-models",
    imageUrl: "/images/projects/machine-learning.png", // Real regression results plot!
  },
];

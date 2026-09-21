# 📊 Chanraksmey — Personal Data Science Portfolio

A clean, modern, professional personal portfolio website designed for **Chanraksmey**, a 3rd-year Data Science student at the **Institute of Technology of Cambodia (ITC)** focusing on AI, Machine Learning, and Data Systems.

---

## 🌟 Features & Highlights

- 🌓 **Dark & Light Mode**: Seamless theme toggle with automatic system preference detection and `localStorage` persistence.
- 🎯 **No "About Me" Section**: Introduces Chanraksmey directly in the Hero section with clear focus areas and quick connection links.
- ⚡️ **Clean Modern Developer Aesthetic**: Minimalist layout, monospace code accents, subtle borders, and smooth scrolling without distracting animations or excessive gradients.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile with a collapsible navigation drawer.
- 🛠️ **Categorized Skills**: 8 dedicated technical categories (Programming, Data Science, Machine Learning, AI, Backend, Database, Dashboard, Tools) with interactive filter tabs.
- 🚀 **Featured Projects**:
  1. **Sala Chatbot**: AI assistant with a RAG pipeline for school documents (FastAPI, Python, Telegram Bot, PostgreSQL).
  2. **Cambodian Soil Quality Assessment**: IoT telemetry with ESP32 and Ordinary Kriging geospatial interpolation (PyKrige, PostGIS, Streamlit).
  3. **School Management Dashboard**: Multi-tenant reporting and educational analytics in Metabase with advanced SQL.
  4. **Machine Learning Projects**: From-scratch implementations (Linear Regression, gradient descent, etc.) and practical Scikit-Learn pipelines.
- 💼 **Industry Experience**: AI & Dashboard Intern at **Sala Tech Pte Ltd** (3 Months).
- 🎓 **Education at ITC**: Bachelor's Degree in Data Science (3rd Year Student) with core coursework pills.
- 📜 **Certificates**: Interactive credential verification cards with details modal.
- 📬 **Interactive Contact Section**: Direct channels (Email with 1-click copy, GitHub, LinkedIn, Telegram) and functional contact form.
- 📄 **CV Preview & Download**: Built-in resume viewer modal with one-click CV download and print view.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                    # Vite entry point
├── preview.html                  # Standalone zero-dependency browser preview
├── server.js                     # Built-in lightweight Node preview server
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite build config
├── tailwind.config.js            # Tailwind CSS styling tokens & dark mode
├── postcss.config.js             # PostCSS plugins
├── src/
│   ├── App.jsx                   # Main application orchestrator
│   ├── main.jsx                  # React DOM mount point
│   ├── index.css                 # Tailwind layers & custom scrollbar
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation, theme toggle, mobile drawer
│   │   ├── Hero.jsx              # Intro, status pill, CTAs, connect buttons
│   │   ├── Skills.jsx            # 8 categorized skill groups + filter tabs
│   │   ├── Projects.jsx          # Featured project cards with visual mockups
│   │   ├── ProjectModal.jsx      # Architecture & system design modal
│   │   ├── Experience.jsx        # Sala Tech internship timeline
│   │   ├── Education.jsx         # ITC degree & coursework
│   │   ├── Certificates.jsx      # Credential cards & verification
│   │   ├── CertificateModal.jsx  # Credential details modal
│   │   ├── ResumeModal.jsx       # Interactive CV preview & download
│   │   ├── Contact.jsx           # Direct channels & interactive form
│   │   └── Footer.jsx            # Copyright & quick links
│   └── data/
│       ├── profile.js            # Bio, contact, and social links
│       ├── skills.js             # Categorized skill taxonomy
│       ├── projects.js           # 4 featured projects with architecture specs
│       ├── experience.js         # Sala Tech internship history
│       ├── education.js          # ITC academic details
│       └── certificates.js       # Credential data
```

---

## 🚀 How to Run & View

### Option 1: Instant Local Preview (Zero Dependencies)
A lightweight Node preview server is already built-in. Run:
```bash
node server.js
```
Then open your browser to **[http://localhost:5173](http://localhost:5173)**.

You can also simply double-click or open `preview.html` directly in your browser:
```bash
open preview.html
```

### Option 2: Standard Vite + React Development
When outbound npm registry access is available:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```
The compiled output will be generated in `dist/`.

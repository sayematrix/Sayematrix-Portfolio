# SAYEMATRIX

> **Digital Operating System, Personal Brand & Research Lab**

SAYEMATRIX is a high-performance, modern web application and personal portfolio operating system built to showcase software engineering systems, artificial intelligence research, quantitative finance notes, digital ventures, and ecosystem sub-brands under a unified high-contrast dark aesthetic interface.

---

## 🌟 Overview

SAYEMATRIX serves as a comprehensive digital nexus designed to organize and present professional work, research papers, ecosystem sub-domains, and career milestones. Built with React 19, TypeScript, Vite, and Tailwind CSS v4, the system delivers an ultra-fast, responsive experience with seamless keyboard navigation, modal inspections, and dynamic view routing.

---

## 🚀 Key Features

* **Interactive Command Palette (`⌘K` / `Ctrl+K`)**: Rapid global search across projects, research publications, and ecosystem domains.
* **Selected Work & Modal Inspection**: Interactive engineering portfolio with filterable categories (AI/ML, Web Architecture, Systems) and deep-dive technical modals.
* **Research Lab**: Structured research repository highlighting neuroscience, AI systems, market dynamics, and digital frameworks.
* **Unified Ecosystem Hub**: Dedicated showcase for multi-domain sub-brands including:
  * **GUID2FAITH** — Faith & Islamic Wisdom
  * **NEUROMATRIX** — Neuroscience, Mind & Mental Frameworks
  * **TOP10.INSIGHTS** — Structured Learning & Research Synthesis
  * **WEALTRIXO** — Quantitative Finance & Wealth Systems
  * **ARTENIXO** — Design, UI/UX Systems & Creative Media
* **Interactive CV / Resume**: Full career resume breakdown with technical stack badges, work history, and education highlights.
* **Journey Milestones**: Historical timeline highlighting key evolutionary phases.
* **Responsive Dark Aesthetics**: Styled with Tailwind CSS v4 featuring emerald accents, custom scrollbars, glassmorphism overlays, and smooth transitions.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev/)
* **Type Safety**: [TypeScript 5.8](https://www.typescriptlang.org/)
* **Build System & Dev Server**: [Vite 6](https://vitejs.dev/)
* **Styling & Design System**: [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animation Engine**: [Motion](https://motion.dev/)
* **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini SDK)

---

## 📁 Project Structure

```text
├── .env.example            # Environment variable declarations
├── index.html              # HTML entry point
├── metadata.json           # Application title, description, & capabilities
├── package.json            # Node dependencies and build scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build and plugin setup
└── src/
    ├── main.tsx            # Main application entry point
    ├── App.tsx             # Root component & page router
    ├── index.css           # Global Tailwind CSS imports and theme overrides
    ├── types.ts            # TypeScript interfaces & domain types
    ├── pages/              # Standalone page views
    │   ├── AboutPage.tsx   # Detailed profile page
    │   ├── CvPage.tsx      # Interactive CV & career resume
    │   └── EcosystemPage.tsx # Deep-dive Ecosystem sub-brand page
    ├── data/
    │   └── content.ts      # Structured data for projects, research, timeline, & ecosystem
    └── components/         # Reusable UI sections & modals
        ├── Navbar.tsx             # Sticky header with navigation links
        ├── HeroSection.tsx        # Main display title & introduction
        ├── CoreFocusStrip.tsx     # Technical focus ticker strip
        ├── IntroductionSection.tsx# High-level bio & mission
        ├── AboutSection.tsx       # Bio highlights with profile CTA
        ├── CurrentFocusSection.tsx# Active technical domains grid
        ├── ExpertiseSection.tsx   # Technical skill matrices
        ├── SelectedWorkSection.tsx# Engineering projects grid
        ├── ProjectDetailModal.tsx # Full project inspection modal
        ├── ResearchLabSection.tsx # Research notes & publications
        ├── ResearchDetailModal.tsx# Full research paper modal
        ├── KnowledgeWorkflow.tsx  # Synthesis & research workflow diagram
        ├── VenturesSection.tsx    # Commercial ventures & corporate entities
        ├── EcosystemSection.tsx   # Sub-brand matrix with direct social links
        ├── PhilosophySection.tsx  # Operating principles & values
        ├── PersonalDimensionSection.tsx # Interests, reading list & setup
        ├── TimelineSection.tsx    # Chronological milestones
        ├── ContactSection.tsx     # Direct inquiry & email links
        ├── CommandPalette.tsx     # Global search modal overlay
        └── Footer.tsx             # Ecosystem links & legal notices
```

---

## ⚙️ Installation & Setup Instructions

### Prerequisites

* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/sayematrix.git
   cd sayematrix
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

---

## 🔑 Environment Variables & Configuration

The application uses the following optional environment variables declared in `.env.example`:

| Environment Variable | Description |
| :--- | :--- |
| `GEMINI_API_KEY` | Optional key for Google Gemini API integrations. |
| `APP_URL` | Application base host URL. |

---

## 🏃 Local Development

Start the local Vite development server on port `3000`:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

To run code quality validation (TypeScript type checking):

```bash
npm run lint
```

---

## 🏗️ Building for Production

To compile static production assets into the `dist/` folder:

```bash
npm run build
```

To preview the compiled production build locally:

```bash
npm run preview
```

---

## 💻 Usage Instructions

* **Navigation**: Use the sticky header menu to jump between key sections (*About, Work, Research, Ventures, Ecosystem, CV*).
* **Search (`⌘K`)**: Press `Cmd + K` (Mac) or `Ctrl + K` (Windows) to trigger the global search palette to jump directly to any project, research note, or domain.
* **Modal Viewing**: Click on any project card under **Selected Work** or paper under **Research Lab** to open deep-dive technical modals.
* **Ecosystem Links**: Explore the **Ecosystem** section to view and open direct Instagram handles for each sub-domain.

---

## 📋 Important Notes

* **HMR Configuration**: Hot Module Replacement (HMR) is configured in `vite.config.ts` to respect environment flags when running inside containerized environments.
* **Type Checking**: Run `npm run lint` before committing to ensure zero TypeScript errors.

---

## 🚀 Future Roadmap

* [ ] Add dynamic blog post / markdown article loader for research publications.
* [ ] Integrate server-side Gemini API endpoints for interactive AI Q&A assistant.
* [ ] Add live RSS/Activity feed for ongoing research notes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue on GitHub.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# FIXRAL Industrial Engineering Studio

> **Limitless Precision in Industrial Engineering, 3D Scanning & Prototyping.**  
> Official web platform for Fixral Engineering Studio, converting physical parts into high-precision digital models and rapid manufacturing solutions. Built with **Vite + React (TypeScript)**.

🔗 **Live Website:** [https://fixral-engineering.vercel.app/](https://fixral-engineering.vercel.app/)

---

## 📁 Project Architecture & Directory Organization

The project is structured according to modern standards for high-performance Vite + React applications:

```text
fixral-engineering/
│
├── public/                       # Static public assets (served at root)
│   └── assets/
│       └── images/               # Optimized production images & vectors
│           ├── logo.svg          # Desktop brand vector logo
│           ├── logo-mobile.svg   # Mobile brand vector logo
│           ├── hero-right.png    # 3D Optical jet engine scanning visual
│           ├── frame-1.png       # Featured project: Classic Porsche restoration
│           ├── frame-2.png       # Featured project: Aerospace turbine blade
│           ├── frame-3.png       # Featured project: Robotic arm joint
│           ├── rectangle.png     # Technology insight: Metal sintering
│           ├── rectangle-1.png   # Technology insight: Classic car parts
│           ├── rectangle-2.png   # Technology insight: AI dimensional analysis
│           ├── cta-section.png   # CTA background graphic
│           └── portfolio/        # High-resolution portfolio case study assets
│
├── src/                          # Application source code
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx            # Header navigation with mobile drawer & active routing
│   │   ├── Footer.tsx            # Comprehensive engineering footer
│   │   ├── QuoteModal.tsx        # Interactive RFQ quote request modal dialog
│   │   └── LiveScannerHUD.tsx    # Real-time jittering coordinate telemetry simulator
│   │
│   ├── pages/                    # Route page views
│   │   ├── HomePage.tsx          # Main landing page (Hero, Services, Workflow, Stats, News, CTA)
│   │   └── PortfolioPage.tsx     # Portfolio page (Dynamic filter chips, HUD counter, 7 projects)
│   │
│   ├── App.tsx                   # Main React Router configuration with ScrollToTop
│   ├── main.tsx                  # ReactDOM application mount entrypoint
│   └── index.css                 # Comprehensive design system & responsive stylesheet
│
├── design/                       # Raw design sources & design handoff assets
│   ├── desktop/                  # Desktop layout specifications (Figma frames & SVG layers)
│   ├── tablet/                   # Tablet responsive design specs (768px layout)
│   ├── phone/                    # Mobile responsive design specs (390px layout)
│   └── main-file-fig/            # Master Figma project file (.fig)
│
├── tools/                        # Engineering & workflow utilities
│   ├── pdf_converter.py          # PyMuPDF-based PDF to 300 DPI image converter
│   ├── requirements.txt          # Python dependencies for utilities
│   └── README.md                 # Documentation for developer tools
│
├── index.html                    # Vite HTML entrypoint with metadata & fonts
├── package.json                  # Dependencies, scripts, and project metadata
├── tsconfig.json                 # TypeScript compiler configuration
├── tsconfig.node.json            # TypeScript bundler configuration
├── vite.config.ts                # Vite build and React plugin configuration
├── vercel.json                   # Vercel SPA rewrite routing configuration
└── README.md                     # Project overview and technical documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shariar-Ahamed/fixral-engineering.git
   cd fixral-engineering
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:5173`**

### Production Build

Type-check and build the optimized production bundle:
```bash
npm run build
```
The output will be generated inside the `dist/` directory.

### Preview Production Build

Preview the production build locally before deployment:
```bash
npm run preview
```

---

## 🎨 Tech Stack & Design System

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Deployment:** [Vercel](https://vercel.com/) with SPA rewrites
- **Color Palette:**
  - Background Deep Dark: `#0B0C0D`
  - Surface Card Dark: `#131618` / Hover `#171A1D`
  - Accent Industrial Orange: `#FF5200`
  - Cyan Tech Glow: `#00E5FF`
  - Text Primary: `#F5F6F7`
  - Text Dim / Muted: `#8E9498`
- **Typography:**
  - Editorial Headings: `Cinzel`
  - UI / Body: `Plus Jakarta Sans` / `Inter`
  - Monospace HUD / Code: `JetBrains Mono`

---

## 🌐 Key Features & Functionality

1. **Interactive Scanner Telemetry (Live HUD):**
   Real-time micro-jittering coordinate simulator (`COORD_X`, `COORD_Y`, `COORD_Z`) replicating precision optical triangulation hardware.
2. **Infinite Technical Marquee:**
   Hardware-accelerated ticker tape showcasing Fixral's core engineering solutions with precision crosshair delimiters.
3. **6 Industrial Engineering Services:**
   High-tech interactive cards for 3D Scanning, CAD Modeling, Additive Manufacturing, CMM Quality Control, Part Restoration, and AI Solutions.
4. **4-Step Workflow Pipeline:**
   Numbered industrial timeline (`01 Scanning` → `02 Modeling` → `03 Manufacturing` → `04 Verification`).
5. **Interactive Portfolio with Dynamic Filtering:**
   Dedicated `/portfolio` page with 7 case studies, active category filter chips (`All`, `3D Scanning`, `Reverse Engineering`, `CAD Design`, `3D Printing`, `Restoration`, `Digital Solutions`, `Automotive`), dynamic HUD counter, and pagination.
6. **Request Quote Modal:**
   Interactive modal dialog for engineering RFQs with specification input and instant submission confirmation.
7. **Pixel-Perfect Responsive Architecture:**
   Multi-tier responsive layouts specifically crafted for Desktop (1440px), Tablet (768px), and Mobile (390px) matching official Figma design frames.
8. **Mobile Drawer Navigation:**
   Animated hamburger-to-cross toggle with smooth slide-down navigation drawer.

---

## 📄 License & Intellectual Property

Copyright © 2026 FIXRAL Industrial Engineering Studio. All rights reserved.
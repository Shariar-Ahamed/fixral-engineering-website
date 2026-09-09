# FIXRAL Industrial Engineering Studio

> **Limitless Precision in Industrial Engineering, 3D Scanning & Prototyping.**  
> Official web platform for Fixral Engineering Studio, converting physical parts into high-precision digital models and rapid manufacturing solutions.

🔗 **Live Website:** [https://shariar-ahamed.github.io/fixral-engineering-website/](https://shariar-ahamed.github.io/fixral-engineering-website/)

---

## 📁 Project Architecture & Directory Organization

The project is structured according to industry standards for high-performance, maintainable web applications:

```text
fixral-engineering-website/
│
├── assets/                       # Production web assets
│   └── images/                   # Optimized images, vectors, and brand logo
│       ├── logo.svg              # Primary brand vector mark
│       ├── hero-right.png        # 3D Jet engine scanning render
│       ├── frame-1.png           # Featured project: Classic Porsche restoration
│       ├── frame-2.png           # Featured project: Aerospace turbine blade
│       ├── frame-3.png           # Featured project: Robotic arm joint
│       ├── rectangle.png         # News: SLS Metal Sintering
│       ├── rectangle-1.png       # News: Classic automobile parts
│       ├── rectangle-2.png       # News: High-precision CMM
│       └── cta-section.png       # Call-to-action background banner
│
├── css/                          # Stylesheet architecture
│   └── style.css                 # Comprehensive design system (tokens, components, responsive layout)
│
├── js/                           # Client-side JavaScript
│   └── main.js                   # Interactive logic: HUD coordinate simulation, EN/TR i18n, modals
│
├── design/                       # Raw design sources & design handoff assets
│   ├── desktop/                  # Desktop layout specifications
│   │   └── home-page/
│   │       ├── export-10-layers/ # SVG layer exports for each section
│   │       └── single-components/# Master reference render (page_01.png)
│   ├── main-file-fig/            # Master Figma project file (.fig)
│   ├── tablet/                   # Tablet responsive design specs
│   └── phone/                    # Mobile responsive design specs
│
├── tools/                        # Engineering & workflow utilities
│   ├── pdf_converter.py          # PyMuPDF-based PDF to 300 DPI image converter
│   ├── requirements.txt          # Python dependencies for utilities
│   └── README.md                 # Documentation for developer tools
│
├── convert_pdf.bat               # Windows drag-and-drop batch script for PDF conversion
├── index.html                    # Main production entrypoint (Semantic HTML5, clean SVG icons)
├── .gitignore                    # Standard Git exclusions for OS, IDEs, and caches
└── README.md                     # Project overview and technical documentation
```

---

## 🚀 Getting Started

### Local Development Server

To view and test the website locally, launch any static HTTP server from the root directory:

**Using Python:**
```bash
python -m http.server 8080
```
Then open your browser and navigate to: `http://localhost:8080`

**Using Node.js (npx):**
```bash
npx serve .
```

---

## 🎨 Design System & Aesthetics

- **Color Palette:**
  - Background Deep Dark: `#0B0C0D`
  - Surface Card Dark: `#131618` / Hover `#181B1E`
  - Accent Industrial Orange: `#FF5200`
  - Text Primary: `#EDEDED`
  - Text Dim / Muted: `#8E9498`
- **Typography:**
  - Body & UI: `Inter` / `Outfit`
  - Monospace HUD: `JetBrains Mono` / `SF Mono` / `Courier New`
- **Iconography:**
  - Lightweight, semantic, hand-crafted 24×24 SVG vectors (Lucide/Feather icon standard) ensuring ultra-fast load times and clean code inspection.

---

## 🌐 Features & Functionality

1. **Interactive Scanner HUD:**
   Real-time micro-jittering coordinate simulator (`COORD_X`, `COORD_Y`, `COORD_Z`) replicating laser calibration hardware.
2. **Infinite Technical Marquee:**
   Smooth hardware-accelerated ticker tape featuring Fixral's core engineering capabilities with crosshair delimiters.
3. **8 Core Engineering Services:**
   High-tech interactive cards covering 3D Scanning, CAD Modeling, 3D Printing, CMM Quality Control, Restoration, AI Solutions, Software Dev, and Automotive ECU.
4. **4-Step Workflow Pipeline:**
   Numbered industrial timeline (`01 Scanning` → `02 Modeling` → `03 Manufacturing` → `04 Verification`) with orange dashed signal connectors.
5. **Internationalization (i18n):**
   Seamless bilingual switching between English (EN - default) and Turkish (TR).
6. **Request Quote Modal:**
   Accessible modal dialog for client RFQ inquiries.

---

## 🛠️ Tooling & Utilities

The project includes an automated desktop utility to convert multi-page PDF design files into crisp, 300 DPI high-resolution PNG images.

### Quick Setup:
Before using the converter tool on any PC or laptop, ensure Python is installed, then install the required libraries:

```bash
pip install pymupdf pillow
# or
pip install -r tools/requirements.txt
```

### Usage:
- **Windows Drag & Drop:** Drag and drop any `.pdf` file directly onto `convert_pdf.bat` located in the root directory.
- **CLI Commands & Advanced Options:** For custom DPI, formats (PNG/JPEG/WEBP), or CLI usage, refer to the [Tools Documentation](tools/README.md).

---

## 📄 License & Intellectual Property

Copyright © 2024 FIXRAL Industrial Engineering Studio. All rights reserved.
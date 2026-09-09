# Fixral Engineering - Development & Asset Tools

This folder contains helper scripts and asset conversion utilities used during the engineering design-to-code workflow.

---

## 1. PDF to High-Resolution Image Converter (`pdf_converter.py`)

A high-performance Python script powered by `PyMuPDF` to convert multi-page PDF documents (such as Figma vector exports or CAD drawings) into crisp 300 DPI PNG images.

### Installation

```bash
pip install -r requirements.txt
```

### Usage

**Command Line:**
```bash
# Convert with default 300 DPI PNG
python pdf_converter.py "path/to/design.pdf"

# Custom DPI and output directory
python pdf_converter.py "path/to/design.pdf" --dpi 400 --format png --output "output_folder"
```

**Windows Drag & Drop:**
You can also use the `convert_pdf.bat` file in the root directory by simply dragging and dropping any PDF file directly onto it.

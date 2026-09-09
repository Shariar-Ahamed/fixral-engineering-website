"""
Fixral Engineering - PDF to High-Resolution Image Converter
Converts PDF files to crisp, high-resolution PNG (or JPEG/WEBP) images.
Ideal for Figma exported PDFs, design specs, and documentation.
"""

import os
import sys
import argparse
import pymupdf  # PyMuPDF

def convert_pdf_to_images(
    pdf_path: str,
    output_dir: str = None,
    dpi: int = 300,
    img_format: str = "png",
    prefix: str = ""
):
    """
    Convert all pages of a PDF to high-resolution images.
    
    :param pdf_path: Path to the input PDF file.
    :param output_dir: Directory where images will be saved. Default is <pdf_name>_images/.
    :param dpi: Resolution in DPI (default 300 for crisp text and graphics).
    :param img_format: Output format ('png', 'jpeg', 'webp'). Default 'png'.
    :param prefix: Optional prefix for output image filenames.
    """
    if not os.path.exists(pdf_path):
        print(f"[Error] File not found: {pdf_path}")
        return False

    pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
    
    if not output_dir:
        output_dir = os.path.join(os.path.dirname(pdf_path) or ".", f"{pdf_name}_{img_format}")
    
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"\n==========================================")
    print(f" Converting: {os.path.basename(pdf_path)}")
    print(f" Resolution: {dpi} DPI")
    print(f" Format:     {img_format.upper()}")
    print(f" Output Dir: {output_dir}")
    print(f"==========================================\n")

    try:
        doc = pymupdf.open(pdf_path)
        total_pages = len(doc)
        print(f"Total pages detected: {total_pages}\n")

        for page_num in range(total_pages):
            page = doc.load_page(page_num)
            
            # Render page to pixmap with desired DPI
            pix = page.get_pixmap(dpi=dpi)
            
            p_prefix = f"{prefix}_" if prefix else ""
            out_filename = f"{p_prefix}page_{page_num + 1:02d}.{img_format.lower()}"
            out_path = os.path.join(output_dir, out_filename)
            
            pix.save(out_path)
            print(f" [OK] Page {page_num + 1}/{total_pages} saved -> {out_filename} ({pix.width}x{pix.height}px)")

        doc.close()
        print(f"\n Success! All {total_pages} pages converted successfully to '{output_dir}'\n")
        return True

    except Exception as e:
        print(f"[Error] Conversion failed: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Fixral Engineering - PDF to Image Converter (PNG/JPG/WEBP)")
    parser.add_argument("pdf_path", nargs="?", help="Path to the PDF file to convert")
    parser.add_argument("-o", "--output", help="Output directory path (optional)")
    parser.add_argument("--dpi", type=int, default=300, help="Image resolution in DPI (default: 300)")
    parser.add_argument("--format", default="png", choices=["png", "jpeg", "jpg", "webp"], help="Image format (default: png)")
    parser.add_argument("--prefix", default="", help="Custom prefix for output filenames")

    args = parser.parse_args()

    pdf_file = args.pdf_path

    # If no argument passed, look for PDF files in the workspace or prompt user
    if not pdf_file:
        # Search for .pdf files in current directory or design folder
        pdf_candidates = []
        for root, _, files in os.walk("."):
            if ".git" in root or "node_modules" in root:
                continue
            for f in files:
                if f.lower().endswith(".pdf"):
                    pdf_candidates.append(os.path.join(root, f))

        if pdf_candidates:
            print("Found PDF files:")
            for idx, candidate in enumerate(pdf_candidates, 1):
                print(f"  [{idx}] {candidate}")
            choice = input(f"\nSelect PDF number (1-{len(pdf_candidates)}) or enter custom path: ").strip()
            if choice.isdigit() and 1 <= int(choice) <= len(pdf_candidates):
                pdf_file = pdf_candidates[int(choice) - 1]
            else:
                pdf_file = choice
        else:
            pdf_file = input("Enter the path to your PDF file: ").strip()

    if pdf_file:
        # Clean any quotes from path (common when copying path in Windows)
        pdf_file = pdf_file.strip('"').strip("'")
        convert_pdf_to_images(
            pdf_path=pdf_file,
            output_dir=args.output,
            dpi=args.dpi,
            img_format=args.format,
            prefix=args.prefix
        )
    else:
        print("No PDF path provided. Exiting.")

if __name__ == "__main__":
    main()

"""
Fixral Engineering - PDF to High-Resolution Image Converter
Converts PDF files to crisp, high-resolution PNG (or JPEG/WEBP) images.
Features real-time animated percentage, ticking timer, and progress bar.
"""

import os
import sys
import time
import multiprocessing
import argparse
import pymupdf  # PyMuPDF

# Ensure UTF-8 output and ANSI support on Windows CMD / PowerShell
try:
    if sys.platform == "win32":
        os.system("")  # Enable ANSI terminal mode
        if hasattr(sys.stdout, "reconfigure"):
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

def format_size(num_bytes: int) -> str:
    """Format bytes into human-readable string (KB, MB, GB)."""
    for unit in ["B", "KB", "MB", "GB"]:
        if abs(num_bytes) < 1024.0:
            return f"{num_bytes:3.1f} {unit}"
        num_bytes /= 1024.0
    return f"{num_bytes:.1f} TB"

def render_bar(current_pct: int, length: int = 24) -> str:
    """Generate ASCII progress bar string like [############------------]."""
    filled = int(round(length * (current_pct / 100.0)))
    filled = min(max(filled, 0), length)
    return "#" * filled + "-" * (length - filled)

def _bg_ticker_worker(stop_event, status_val, page_idx, total_pages, dpi):
    """
    Independent OS background process to display real-time live spinner,
    ticking elapsed seconds, animated percentage, and progress bar.
    Runs smoothly even during heavy C-level rendering!
    """
    try:
        if hasattr(sys.stdout, "reconfigure"):
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    start_time = time.time()
    spinner = ["|", "/", "-", "\\"]
    idx = 0
    bar_len = 24

    # Half-life for smooth percentage growth (reaches ~50% at 12s, ~75% at 24s)
    half_life = 12.0

    while not stop_event.is_set():
        elapsed = time.time() - start_time
        spin_char = spinner[idx % len(spinner)]

        # Check current status (0 = Rendering, 1 = Saving to disk)
        is_saving = (status_val.value == 1)

        if is_saving:
            status_text = "Saving image to disk"
            simulated_page_pct = 99
        else:
            status_text = f"Rendering vector at {dpi} DPI"
            # Smoothly increasing percentage from 1% up to 98%
            simulated_page_pct = min(98, max(1, int(100 * (1.0 - (0.5 ** (elapsed / half_life))))))

        # Overall percentage calculation
        base_pct = int(((page_idx - 1) / total_pages) * 100)
        overall_pct = min(99, base_pct + int(simulated_page_pct / total_pages))

        bar = render_bar(overall_pct, bar_len)

        line = (
            f"\r  [{spin_char}] Page {page_idx}/{total_pages} "
            f"[{bar}] {overall_pct:>3}% | "
            f"Elapsed: {elapsed:4.1f}s | {status_text}..."
        )

        try:
            sys.stdout.write(line.ljust(95))
            sys.stdout.flush()
        except Exception:
            pass

        idx += 1
        time.sleep(0.08)

def convert_pdf_to_images(
    pdf_path: str,
    output_dir: str = None,
    dpi: int = 300,
    img_format: str = "png",
    prefix: str = ""
):
    """
    Convert all pages of a PDF to high-resolution images with live real-time progress.
    """
    if not os.path.exists(pdf_path):
        print(f"\n [Error] File not found: {pdf_path}")
        return False

    pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
    
    if not output_dir:
        output_dir = os.path.join(os.path.dirname(pdf_path) or ".", f"{pdf_name}_{img_format}")
    
    os.makedirs(output_dir, exist_ok=True)
    file_size_mb = os.path.getsize(pdf_path) / (1024 * 1024)

    print(f"\n==========================================================================")
    print(f"  Fixral Engineering - High-Precision PDF Converter")
    print(f"==========================================================================")
    print(f"  File:       {os.path.basename(pdf_path)} ({file_size_mb:.2f} MB)")
    print(f"  Target DPI: {dpi} DPI")
    print(f"  Format:     {img_format.upper()}")
    print(f"  Output Dir: {output_dir}")
    print(f"==========================================================================\n")

    overall_start_time = time.time()

    try:
        doc = pymupdf.open(pdf_path)
        total_pages = len(doc)
        print(f"  Total pages detected: {total_pages}\n")
        sys.stdout.flush()

        total_output_bytes = 0

        for page_idx in range(1, total_pages + 1):
            page = doc.load_page(page_idx - 1)

            # Setup inter-process communication for real-time ticker
            stop_event = multiprocessing.Event()
            status_val = multiprocessing.Value('i', 0)  # 0 = Rendering, 1 = Saving

            ticker = multiprocessing.Process(
                target=_bg_ticker_worker,
                args=(stop_event, status_val, page_idx, total_pages, dpi)
            )
            ticker.start()

            page_start_time = time.time()

            # Heavy C-level vector rasterization (DPI rendering)
            pix = page.get_pixmap(dpi=dpi)

            # Signal ticker process that rendering finished and saving is starting
            status_val.value = 1

            p_prefix = f"{prefix}_" if prefix else ""
            out_filename = f"{p_prefix}page_{page_idx:02d}.{img_format.lower()}"
            out_path = os.path.join(output_dir, out_filename)

            pix.save(out_path)

            # Stop live ticker process
            stop_event.set()
            ticker.join(timeout=1.0)
            if ticker.is_alive():
                ticker.terminate()

            # Clear line for final completion message
            sys.stdout.write("\r" + " " * 95 + "\r")
            sys.stdout.flush()

            page_elapsed = time.time() - page_start_time
            saved_size = os.path.getsize(out_path)
            total_output_bytes += saved_size

            # Overall percentage for finished page
            percent_done = int((page_idx / total_pages) * 100)
            completed_bar = render_bar(percent_done, length=24)

            print(
                f"  [OK] Page {page_idx}/{total_pages} [{completed_bar}] {percent_done:>3}% | "
                f"Saved -> {out_filename} ({pix.width}x{pix.height}px, {format_size(saved_size)}) "
                f"in {page_elapsed:.2f}s"
            )

        doc.close()
        total_elapsed = time.time() - overall_start_time
        avg_time = total_elapsed / total_pages if total_pages > 0 else 0

        print(f"\n==========================================================================")
        print(f"  Conversion Completed Successfully!")
        print(f"  • Total Pages:    {total_pages}")
        print(f"  • Total Time:     {total_elapsed:.2f} seconds (Avg: {avg_time:.2f}s/page)")
        print(f"  • Total Output:   {format_size(total_output_bytes)}")
        print(f"  • Output Folder:  {os.path.abspath(output_dir)}")
        print(f"==========================================================================\n")
        return True

    except Exception as e:
        print(f"\n [Error] Conversion failed: {e}\n")
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

    # If no argument passed, search for .pdf files in workspace or prompt user
    if not pdf_file:
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

@echo off
setlocal

echo ========================================================
echo   Fixral Engineering - PDF to PNG/Image Converter
echo ========================================================
echo.

python -c "import pymupdf" >nul 2>nul
if errorlevel 1 (
    echo [Setup] Required library PyMuPDF not found.
    echo Installing dependencies: pymupdf and pillow...
    pip install pymupdf pillow
    echo.
)

if "%~1"=="" (
    echo Drag and drop a PDF file onto this .bat file,
    echo or enter the PDF file path below:
    echo.
    python "%~dp0tools\pdf_converter.py"
) else (
    echo Processing: %~1
    python "%~dp0tools\pdf_converter.py" "%~1" --dpi 300 --format png
)

echo.
pause

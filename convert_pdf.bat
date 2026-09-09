@echo off
setlocal

echo ========================================================
echo   Fixral Engineering - PDF to PNG/Image Converter
echo ========================================================
echo.

if "%~1"=="" (
    echo Drag and drop a PDF file onto this .bat file,
    echo or enter the path below:
    echo.
    python "%~dp0tools\pdf_converter.py"
) else (
    echo Processing: %~1
    python "%~dp0tools\pdf_converter.py" "%~1" --dpi 300 --format png
)

echo.
pause

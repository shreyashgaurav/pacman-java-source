@echo off
cd /d C:\Users\shrey\IdeaProjects\pacman-teavm
echo Building project...
call mvn clean package
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)
cd target\generated\js
copy ..\..\..\index.html .
echo Starting server...
echo Open http://localhost:8000 in your browser
python -m http.server 8000
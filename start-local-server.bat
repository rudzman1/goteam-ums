@echo off
REM ==========================================================
REM  GoTeam Dashboard — local web server
REM
REM  Double-click this file to start a local web server on
REM  http://localhost:8000. Required because Microsoft Graph
REM  refuses to work over file:// URLs.
REM
REM  Then open http://localhost:8000/dashboard.html in browser.
REM  Press Ctrl+C in this window to stop the server.
REM ==========================================================

cd /d "%~dp0"
echo Starting local web server in: %CD%
echo.
echo  Open this URL in your browser:
echo    http://localhost:8000/dashboard.html
echo.
echo  Press Ctrl+C to stop the server.
echo ==========================================================
echo.
python -m http.server 8000

pause

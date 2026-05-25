@echo off
REM ==========================================================
REM  GoTeam Dashboard — push changes to GitHub
REM
REM  Double-click this file to commit and push any modified
REM  files (dashboard.html, README.md, etc.) to GitHub.
REM  GitHub Pages will auto-deploy the new version in ~30s.
REM
REM  dashboard-seed.js and other PII files are gitignored
REM  and will NEVER be pushed by this script.
REM ==========================================================

cd /d "%~dp0"
echo Project folder: %CD%
echo.
echo ==========================================================
echo  Checking what will be pushed...
echo ==========================================================
git status

echo.
echo ==========================================================
set /p MSG="Enter a commit message (or press Enter for default): "
if "%MSG%"=="" set MSG=Update dashboard

echo.
echo Staging all non-ignored files...
git add .
echo.
echo Committing with message: "%MSG%"
git commit -m "%MSG%"

echo.
echo Pushing to GitHub...
git push

echo.
echo ==========================================================
echo  Done. GitHub Pages will redeploy in ~30 seconds.
echo  Hard-refresh your dashboard URL with Ctrl+F5.
echo ==========================================================
pause

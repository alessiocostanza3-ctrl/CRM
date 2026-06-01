@echo off
setlocal
cd /d "%~dp0"

set "PORT=3007"

start "CRM Server" /min "%ProgramFiles%\nodejs\node.exe" server.js
echo CRM avviato su http://localhost:%PORT%

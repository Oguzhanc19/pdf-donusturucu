@echo off
chcp 65001 >nul 2>&1
title PDF Donusturucu - Mobil Sunucu
cd /d "%~dp0"
echo.
echo  Mobil sunucu baslatiliyor...
echo  Telefon ve bilgisayar ayni WiFi aginda olmali!
echo.
python sunucu.py
pause

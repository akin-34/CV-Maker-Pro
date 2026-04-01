@echo off
title GitHub - Guncelleme Yukle
cd /d "%~dp0"

echo.
echo  ====================================================
echo    CV Maker Pro - GitHub Guncelleme
echo  ====================================================
echo.

echo  Dosyalar ekleniyor...
git add .

echo  Commit yapiliyor...
git commit -m "update: README screenshot ve guncellemeler"

echo  GitHub'a yukleniyor...
git push

echo.
echo  ====================================================
echo    Basariyla guncellendi!
echo    https://github.com/akin-34/CV-Maker-Pro
echo  ====================================================
echo.
pause

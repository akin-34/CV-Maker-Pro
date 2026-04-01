@echo off
title GitHub - CV Maker Pro Yukle
cd /d "%~dp0"

echo.
echo  ====================================================
echo    CV Maker Pro - GitHub'a Yukle
echo  ====================================================
echo.

:: Git kurulu mu kontrol et
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo  [HATA] Git kurulu degil!
    echo  Lutfen https://git-scm.com adresinden Git'i indirin.
    pause
    exit /b
)

echo  [1/4] Git deposu baslatiliyor...
git init

echo  [2/4] Remote tanimlaniyor...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/akin-34/CV-Maker-Pro.git

echo  [3/4] Dosyalar ekleniyor...
git add .

echo  [4/4] Commit ve push yapiliyor...
git commit -m "feat: CV Maker Pro - initial release"
git branch -M main
git push -u origin main

echo.
echo  ====================================================
echo    Basariyla yuklendi!
echo    https://github.com/akin-34/CV-Maker-Pro
echo  ====================================================
echo.
pause

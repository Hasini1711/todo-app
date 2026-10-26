@echo off
set "PATH=C:\Users\anjan\AppData\Local\Programs\Git\cmd;%PATH%"
cd /d "e:\17"
echo ========================================================
echo   Uploading Todo App to GitHub (Hasini1711/todo-app)
echo ========================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   SUCCESS! Your project has been uploaded to GitHub:
    echo   https://github.com/Hasini1711/todo-app
    echo ========================================================
) else (
    echo ========================================================
    echo   If a browser window opened, please complete sign-in.
    echo   Once logged in, run this file again to finish.
    echo ========================================================
)
echo.
pause

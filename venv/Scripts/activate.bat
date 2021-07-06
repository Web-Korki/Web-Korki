@echo off

set VIRTUAL_ENV="C:\Users\Hawkesky\PycharmProjects\Web-Korki\venv"
set SECRET_KEY="8r(*c04uescu!6uulah$=o348y=f^xj0xtr1!h0v0)z%tdfc52"
set DATABASE_URL=postgres://kpfginquiotdrl:ca608177bdbd0e05f015772cd20fdbef332e9c1300d1a21eca9058cd868bcb34@ec2-34-254-69-72.eu-west-1.compute.amazonaws.com:5432/dedrlum7ggs3b
set DEVELOP_DEBUG=TRUE

rem This file is UTF-8 encoded, so we need to update the current code page while executing it
for /f "tokens=2 delims=:." %%a in ('"%SystemRoot%\System32\chcp.com"') do (
    set _OLD_CODEPAGE=%%a
)
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" 65001 > nul
)

if not defined PROMPT set PROMPT=$P$G

if defined _OLD_VIRTUAL_PROMPT set PROMPT=%_OLD_VIRTUAL_PROMPT%
if defined _OLD_VIRTUAL_PYTHONHOME set PYTHONHOME=%_OLD_VIRTUAL_PYTHONHOME%

set _OLD_VIRTUAL_PROMPT=%PROMPT%
set PROMPT=(venv) %PROMPT%

if defined PYTHONHOME set _OLD_VIRTUAL_PYTHONHOME=%PYTHONHOME%
set PYTHONHOME=

if defined _OLD_VIRTUAL_PATH set PATH=%_OLD_VIRTUAL_PATH%
if not defined _OLD_VIRTUAL_PATH set _OLD_VIRTUAL_PATH=%PATH%

set PATH=%VIRTUAL_ENV%\Scripts;%PATH%

:END
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" %_OLD_CODEPAGE% > nul
    set _OLD_CODEPAGE=
)

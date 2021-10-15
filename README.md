##README, MISIACZKI (nie dziękujcie, że ogarnąłem)

[![codecov](https://codecov.io/gh/Web-Korki/Web-Korki/branch/master/graph/badge.svg?token=OEHMSAP5T3)](https://codecov.io/gh/Web-Korki/Web-Korki)

### GIT FLOW:
1. Create Issue from GitHub perspective
2. `git pull`
3. `npm i`
4. `git checkout -b '#10_mockUps'`
5. `git add .` 
6. `git commit -m 'fjadlkjfkldsj'`
7. `git push`
8. pull request
9. assign reviewer
10. after cr merge either on github or locally (and push the changes afterwards).

### PO KAŻDYM PULLU

`npm install` (virgin fronty)

oraz
 
`pip install requirements.txt` (chad backendy)

**NIE INSTALUJEMY ŻADNYCH PACZEK NA PAŁE.**

 PRZED ZAINSTALOWANIEM PACZKI UPEWNIJ SIĘ, CZY KTOŚ JUŻ NIE UŻYWA JAKIEJŚ WERSJI PACZKI, KTÓRA CIĘ INTERESUJE - VIDE: 
 JEŚLI ZOSTAŁ ZAINTALOWANY BOOTSTRAP W WERSJI 4.6, TO NIE INSTALUJ 5 PRZED ZAPYTANIEM, CZY KTOŚ KORZYSTA Z TEJ 4.6 (NAZWY KLAS SĄ INNE W 4.6 I 5);
 
 > Spoko, Bartuś, whatever - odparł Jaszczomb.

### Do zrobienia (front):
* Foldery odpowiadające poszczególnym widokom, pagom, częściom projektu - np. paneladmin jako osobny widok, zawierający kontenery i komponenty
* Foldery components - zawierają pojedyncze komponenty będące samodzielnymi funkcjonalnymi elementami - jak form, button itd itp
* Foldery containers - kontenery zawierające komponenty

### Do zainstalowania (front):
-react dev tools
-redux dev tools
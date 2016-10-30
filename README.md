# retail
School Assignment of Devine Howest in collaboration with Hogeschool Rotterdam.

Tijd: 3 weken waarvan 1 week concept

## 1. Project ophalen
Open je terminal.

Typ cd en navigeer naar een bepaalde map waarin je het project wilt plaatsen. bv.

```
cd /Users/katiasmet/Desktop
```

Je kunt vanuit de finder een map slepen naar de terminal om zo makkelijk het pad te krijgen.
Als je entered zul je in de map zitten. Hierna kun je het project van github clonen.

```
git clone https://github.com/katiasmet/retail.git
```

BELANGRIJK:
Hierna moet je zorgen dat je zeker in de juiste branch zit, namelijk develop en niet de master!

```
git checkout develop
git branch
```

Als je git branch doet zou develop op groen moeten staan. Zoniet doe je nog een keer git checkout develop.

## 2. Aanpassingen doorvoeren
Alle teksten worden automatisch ingeladen en worden opgeladen in een json-file in de map assets/data/stores.json
Hierin kunnen tekstuele aanpasssingen worden gedaan.

Gelieve de json te testen en valideren: http://jsonlint.com/

## 3. Aanpassingen online plaatsen
Als je de aanpassingen niet online plaatst, staat het enkel op jouw computer.

```
git add .
git status  (checkt of je effectief iets hebt toegevoegd)
git commit -m 'typ hier een tekst bv. text updated'
git push -u origin develop
```

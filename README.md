# Titel
Funda Opgeslagen Huizen - Pleasurable UI

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De opgeslagen huizen pagina van Funda. Gebruikt Node, EJS en Directus om een database van opgeslagen huizen aan een gebruiker te kunnen tonen.
Heeft een ratingsysteem waarbij de gebruiker ratings kan geven aan opgeslagen huizen.

![image](https://github.com/Robin1224/pleasurable-ui/assets/81151231/4c766f84-0d43-4812-80e2-7222d310f0b0)

De website is gehost via Render:
https://pleasurable-ui-qxxg.onrender.com/

## Gebruik
De gebruiker kan zijn opgeslagen huizen overichtelijk op deze pagina zien. Ook kan de gebruiker ratings geven aan opgeslagen huizen, die vervolgens opgeslagen worden in de Directus database.

## Kenmerken

Gebruikte technologieën:
* Node
* EJS
* Directus
* Cyclic

De server logica staat in `server.js`. Dit rendert een pagina uit de `/views` directory, en deze gebruiken components uit `/view/partials`

## Installatie

1. Clone de repo naar je eigen werkomgeving
2. Run `npm install` om alle dependencies te installeren
3. Start een lokale dev server met `npm start`

## Bronnen
* MDN
* StackOverflow
* Directus docs
* EJS docs

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

﻿Werkstuk
=======================================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

|Info|  |
|----|---|
|Werktitel|Open the gates for Data!|
|Subtitel|The World Bank Data Catalog|
|Milestone 1|**Week 6** Presentatie tussentijds productiedossier (Docent Pottie)|
|Milestone 2|**Week 8** Presentatie visual designs (Docent Pottie)|
|Milestone 3|**Week 11** Presentatie alpha versie app (Docent De Pauw - Waterschoot)|
|Deadline|**23-12-2015** Opleveren opdracht (Bitbucket)|
|Examen|Afgedrukt dossier, Poster, Bitbucket, Online werkende applicatie|

Milestones
----------

###Milestone 1: Presentatie tussentijds productiedossier

Week 6 - 5 min per groep. Klassikale feedback door de docent.
Docent: Jonas Pottie

###Milestone 2: Presentatie visual designs

Week 8 - 5 min per groep. Klassikale feedback door de docent.
Docent: Jonas Pottie

###Milestone 3: Presentatie alpha versie app

Week 11 - 8 min per groep. Klassikale feedback door de docent.
Docent: Philippe De Pauw - Waterschoot

Omschrijving
------------

Maak een **responsive mobile-first webapplicatie** waarin minimaal 3 datasets (1x groep) - 6 datasets (2x groep) - 9 datasets (3x groep), afkomstig uit de dataset-pool van de **Worldbank**, verwerkt zijn. Conceptueel denken is heel belangrijk in deze applicatie. Dit betekent dat jullie verbanden moeten leggen tussen deze datasets. Het is louter niet alleen het oplijsten en visualiseren van deze datasets, er moet een **concept** rond gebouwd worden.

Deze applicatie is bestemd voor **+18 jarigen** waarbij de gebruiksvriendelijkheid, interactiviteit, uitbreidbaarheid en schaalbaarheid van belang zijn.

> Resources:
> 
> 
* [Worldbank Data Catalog](http://datacatalog.worldbank.org/)
* [Worldbank Data Catalog API](http://data.worldbank.org/developers/data-catalog-api)
* [Worldbank Idicatoren](http://data.worldbank.org/indicator)
* Voorbeeld aanvraag: `http://api.worldbank.org/countries?per_page=10&incomeLevel=LIC&format=jsonP&prefix=Getdata` (jsonP aanvraag), meer info [Worldbank aanvraagstructuur](http://data.worldbank.org/developers/api-overview/basic-call-structure)
* Buiten deze verplicht aantal datasets uit de Wereldbank (waarrond het concept gebouwd moet worden) kan men ook extra databanken raadplegen ter ondersteuning van dit concept:
    * UN Data
    * YouTube, Vimeo
    * Soundcloud
    * Yahoo Query Language (YQL)
    * Wikipedia
    * TV Maze, themoviedb, Subtitleseeker, Open Movie Database
    * Flickr, Foursquare, Google Places
    * ... (vraag toelating aan de docenten om eventueel andere API's extra aan te spreken)

Briefing & Analyse
------------------

Het hoofdstuk briefing omdat de eigenlijke briefing uit het hoofdstuk omschrijving. De analyse van deze briefing is heel belangrijk om de inhoud, functionaliteit en uiterlijke te bepalen. Hanteer de kennis uit WDAD1 en WDAD2 om dit hoofdstuk en volgend goed te voltooien.


Functionele specificaties
------------------------

* One Page Webapplication 
    * Bookmark routes
    * of een webapplicatie bestaande uit verschillende pagina's
* Preloaders/Loaders
    * Om de app in te laden
    * Tijdens het inladen van JSON(P)
    * Lokale data bestanden
* De meeste inhoud wordt beheerd in data bastanden en dynamisch ingeladen
* Adaptive images, video's en sounds
* Google Maps integratie of gelijkaardig
    * Custom look-and-feel
* GEO-location
    * Toon de locatie van de gebruiker op een Map
    * Hou rekening met deze locatie in andere onderdelen van deze app
* Social Media Bookmarking (Open Graph)
* Animaties via SVG en/of Canvas
* Lokaal caching van data en bronbestanden (cache manifest)
* Gebruiker ervaart een interactief webapplicatie
* Gebruiker kan favoriete data lokaal bewaren
* Gebruiker kan de webapplicatie bookmarken in browser, bureaublad en als native app in het overzicht
* Automation verplicht!
    * Componenten worden via Bower toegevoegd in de components folder van de app folder
    * SASS bestanden worden automatisch omgezet in corresponderende CSS-bestanden
    * CSS-bestanden worden met elkaar verbonden in één bestand en geminified
    * De JS code wordt automatisch nagekeken op syntax fouten
    JS-bestanden worden met elkaar verbonden in één bestand en geminified
    * De dist-folder wordt automatisch aangevuld met bestanden en folders via Grunt of Gulp
    * Screenshots van de verschillende breekpunten worden automatisch uitgevoerd via Phantom, Casper of andere bibliotheken


Technische specificaties
------------------------

###Frontend

- Core technologies: HTML5, CSS3 en JavaScript
- Template engines: Jade, Haml, Swig of Handlebars
- Storage: JSON bestanden, localstorage en/of IndexedDB
- Bibliotheken: jQuery, underscore.js, lodash.js, crossroads.js, js-signals, Hasher.js, ...
- Andere bibliotheken worden hierin aangevuld tijdens het semester!
- Uitzonderingen mogelijk betreffende JavaScript bibliotheken mogelijk mits toelating!

> Webapplicatie moet responsive zijn! Het responsive framework alsook alle andere bestanden moeten zelf geïmplementeerd worden.

###Backend

> Er is geen backend aanwezig in deze webapplicatie.

Dossier
-------
>  - Moet geschreven worden in Markdown
>  - Ook Websafe PDF versie door export via In-Design (net voor de deadline toevoegen aan BitBucket Repository)

- Briefing & Analyse
- Functionele specificaties
- Technische specificaties
- Persona's (+ scenario): Gebruiker (User) (3x)
- Indeëenborden + keuze uit ideëenborden resulterend in een Moodboard
    * 3x groep van 3 studenten + finaal 1 resulterende Moodboard
    * 2x groep van 2 studenten + finaal 1 resulterende Moodboard
    * 1x groep van 1 studenten
- Sitemap
- Wireframes
    * minimaal 9x groep van 3 studenten
    * minimaal 6x groep van 2 studenten
    * minimaal 3x groep van 1 studenten
- Style Tiles
    * 3x groep van 3 studenten + finaal 1 resulterende style tile
    * 2x groep van 2 studenten + finaal 1 resulterende style tile
    * 1x groep van 1 studenten
- Visual designs
    * 3x groep van 3 studenten + finaal 1 resulterende visual design
    * 2x groep van 2 studenten + finaal 1 resulterende visual design
    * 1x groep van 1 studenten
- Screenshots eindresultaat
    * minimaal 9x groep van 3 studenten
    * minimaal 6x groep van 2 studenten
    * minimaal 3x groep van 1 studenten
- Screenshots snippets HTML (1x), CSS (1x) en JavaScript (3x)
    * 9x groep van 3 studenten
    * 6x groep van 2 studenten
    * 3x groep van 1 studenten
- Tijdsbesteding per student

   
Source Code Management
----------------------

> Het werkstuk wordt op een Bitbucket-repository gepubliceerd dat toegankelijk is voor [Olivier Parent][https://bitbucket.org/olivierparent] en [Philippe De Pauw - Waterschoot][https://bitbucket.org/drdynscript].

- Maak een team aan in bitbucket:
    - gdm-1516-2MMPA-01 
    - 2MMPA staat voor de klas (en is dus variabel), mogelijke waarden: 2MMPA, 2MMPB of 2MMPC.
    - 01 = groepsnummer en is dus variabel
- Maak hierin de volgende repositories aan:
    - **open_the_gates_for_data_app**. Bevat de applicatie volgens de opgelegde mappenstructuur.
    - **open_the_gates_for_data_docs**. Bevat productiedossier, screenshots, ... volgens de opgelegde structuur.

### Mappen en bestanden

- **open_the_gates_for_data_app** (folder) 
- **open_the_gates_for_data_docs** (folder)
    - images (folder, bevat afbeeldingen die relatief gelinkt zijn in dossier.md)
    - dossier.md
    - dossier.pdf (pas toevoegen net voor de deadline)
    - poster.pdf (pas toevoegen net voor de deadline)
    - presentatie.pdf (pas toevoegen net voor de deadline)
    - README.md (Bevat een synopsis van de applicatie + relatieve links naar de andere bestanden binnen deze folder)
    - screencast.mpeg (pas toevoegen net voor de deadline)
    - screenshot_320.png
    - screenshot_480.png
    - screenshot_640.png
    - screenshot_800.png
    - screenshot_960.png
    - screenshot_1024.png
    - screenshot_1280.png  
    - timesheet.xslx  
    
### App structuur

- **open_the_gates_for_data_app** (folder)
    - app (folder)
        - data (folder)
            - kan JSON bestanden bevatten
        - docs (folder)
            - install.md
        - images (folder)
            - icons (folder)
                - favicon.ico
                - verschillende touch iconen
        - scripts (folder)
        - styles (folder)        
            - images (folder)
            - fonts (folder)
            - scss (folder)
        - 404.html
        - humans.txt
        - index.html
        - manifest.webapp
        - robots.txt
        - sitemap.xml   
    - bower_components (folder - niet op Git)
    - dist (folder)
        - .gitkeep
    - node_modules (folder - niet op Git)
    - test (folder)
        - .gitkeep
    - .bowerrc
    - .gitattributes
    - .gitignore
    - .jscsrc
    - .jshintrc
    - bower.json
    - gulpfile.js
    - LICENSE
    - package.json
    - README.md    

### Branches

Gebruik git met de [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Nieuwe branch per functionaliteit, nadat de functionaliteit klaar is voor productie (nadat alle testen succesvol verlopen zijn), dan wordt de branch in de master branch gemerged.

#### Commit Prefixes

|Prefix|Verklaring|
|:-----|:---------|
|[FEATURE]|Deelfunctionaliteit|
|[FIX]|Bugfix|
|[TASK]|Bijv. refactoring (structuur, naamgeving aanpassen), updates van derden toepassen.|
|[WIP]|*Work in Progress,* voor tussentijdse commits van iets wat nog niet af is.|

### Voorbeeld

Branch `account-feature`:

 - [FEATURE] Add user registration form and save data to db
 - [TASK] Rename field `lastname` to `familyname`   
 
Timesheet
----------

> Klanten/werkgevers weten graag hoe lang je aan iets zal werken en hoe lang je er effectief aan gewerkt hebt. Een realistische inschatting maken van hoelang iets zal duren kan enkel op basis van (lange) werkervaring. Daarom is het belangrijk dat je nu al bijhoudt hoe lang iets duurt, zodat je deze skill leert. Dit is geen plezante bezigheid, maar maak er een gewoonte van om dit fequent bij te houden. Achteraf nog weten hoelang je aan iets gewerkt hebt is vaak nog lastiger.

Houd dagelijks een timesheet bij in Excel en post naar je Bitbucket-repository. Vermeld **per dag** de (deel)functionaliteit(en) waaraan je gewerkt hebt en hoe lang (de kleinste opdeling is een kwartier: 0,25 uur). 

### Prestatieuren

Iedere student moet minimaal 102 uur besteden aan deze opdracht buiten de lesuren. Dat komt ongeveer 102 uur presteren neer op 8 uur per week, indien spreiding voorzien. Alle studenten binnen een groep moeten een gelijkaardig aandeel hebben in het **dev** en **design** gedeelte. Bij ondermaatse prestatie (kwaliteit, uren, dev/design gedeelte) wordt dit afgerekend! 

### Voorbeeld

|Datum|Student|Domein|Taak|Tijd|
|----:|:------|:-----|:--|----:|
|2015-09-22|Philippe De Pauw|DEV|Doctrinemigration voor user|0,25 uur|
|2015-09-22|Jonas Pottie|DES|Registratieformulier|3,75 uur|
|â€¦|Student x|â€¦DEV|x|â€¦|
|2015-12-21|Alle studenten|-|**Totaal**|**306 uur**|  

Academische Poster
------------------

> **Afgedrukt op A2**, in te dienen op het mondeling examen.
> **Controleer extra goed op spellingsfouten!**

Een afgedrukte A2-poster die de presentatie moet ondersteunen. De academische poster moet een leek duidelijk maken wat het project was:

 - Synopsis
 - Doel van de opdracht
 - Resultaat (ondersteund met schermafbeeldingen)
 - Gebruikte technologieën (gebuik officiële logo's indien mogelijk, maar vermijd specifieke versienummers zodat het niet te snel verouderd overkomt)

> Niet vergeten te vermelden: groepsnummer + leden uit deze groep (voornaam, naam), naam van het opleidingsonderdeel, academiejaar, Bachelor in de grafische en digitale media, Multimediaproductie, klas, Arteveldehogeschool.
>  
> Bijvoorbeeld: 
> Groep 2MMPA-01: Philippe De Pauw - Waterschoot, Jonas Pottie
> New Media Design & Development I, Academiejaar 2015-16
> Bachelor in de grafische en digitale media, Multimediaproductie (2MMPA)
> Arteveldehogeschool

Presentatie
-----------

Tijdens de presentie toon je aan:

- dat de frontend correct werkt;
- dat het project een geautomatiseerde workflow bevat;
- dat alle items op de checklist aanwezig zijn;
- of er eventuele extra's toegevoegd zijn.

Zorg voor een grafisch verzorgde presentatie en verzorgd taalgebruik. Gebruik PowerPoint (of alternatieven), screencasts en live demonstraties

> **Controleer extra goed op spellingsfouten!**
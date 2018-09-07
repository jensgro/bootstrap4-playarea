# Bootstrap4 Playarea

Ein paar kleine Bestandteile, um mit Bootstrap zu spielen und das System kennenzulernen.

Als Basis für die weitere Arbeit benötigen Sie **node.js** und **Grunt**. Beides sollte vorher installiert sein.

Falls beides nicht existiert:

1. Node.js kann auf der [eigenen Webseite](https://nodejs.org/en/) heruntergeladen und installiert werden.
2. [Grunt](https://gruntjs.com/) muss im ersten Schritt über die Kommandozeile unter Node global installiert werden. Dafür in der Kommandozeile Folgendes eingeben:

        npm install -g grunt-cli


Danach dieses Projekt über git oder als ZIP-File herunterladen. Dann in der Kommandozeile im Projektverzeichnis Folgendes eingeben:

    npm install

Sodann werden alle Bestandteile dieses kleinen Projektes installiert. Das sind nicht viele. Im Wesentlichen neben Grunt natürlich [Bootstrap](http://getbootstrap.com) selber, sowie [jQuery](https://jquery.com/) und die JS-Bibliothek [popper.js](https://popper.js.org/).

Die einzelnen Bestandteile sollten immer mal wieder aktualisiert werden. Dafür einfach im Projektverzeichnis folgende Befehle über die Kommandozeile eingeben:

    npm update bootstrap
    npm update jquery
    npm update popper.js

Oder auch alles zusammen:

    npm update bootstrap && npm update jquery && npm update popper.js

Die JS-Dateien werden allesamt in diesem Testprojekt über die **node_modules** eingebunden. Dadurch werden alle Skripte genutzt. Das Ergebnis ist nicht für den Produktivbetrieb zu empfehlen. Es ist für Testdateien, für Rapid Prototyping gedacht.

Für die Arbeit mit Sass sind im Unterordner `dev/sass` alle Sass-Einzeldateien in unterschiedlichen Kombinationen in SCSS-Dateien importiert. Auch hier wird auf die Originaldateien in  **node_modules** verlinkt. So kann der CSS-Code immer aktualisiert werden. Die eigene Arbeit findet parallel zum Originalcode statt.
Das Projekt ist dazu gedacht, diese Form der Arbeit zu üben.

Aktuell existiert nur ein einziger Grunt-Task der mit

    grunt

gestartet wird. Es ist ein Watch-Task, der alle Sass-Änderungen überwacht und dann neue CSS-Dateien erzeugt. Das erzeugte CSS wird mittels PostCSS behandelt, damit alle noch relevanten Prefixes und browserspezischen Schreibweisen am Ende herauskommen.

## Interessante Links

- [Dokumentation von Bootstrap 4.1.x](http://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Bootstrap-Cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/)
- [Bootstrap 4 Buffet](https://hackerthemes.com/bootstrap-buffet/)
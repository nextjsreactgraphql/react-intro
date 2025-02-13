# Workshop: React Grundlagen

> Um sicherzustellen, dass während des Workshops alles funktioniert, möchte ich dich bitten, die Packages zu installieren und das (noch leere) Frontend einmal zu starten.

## IDE

- Für den Workshop ist egal, welche IDE du verwendest, aber ich würde empfehlen, keine neue IDE auszuprobieren, sondern die IDE zu verwenden, die du ohnehin schon verwendest.
- Wenn du noch keine IDE (für die JavaScript-Entwicklung) verwendest, würde ich Webstorm, IntelliJ oder PHPStorm empfehlen (je nachdem, welche Programmiersprache du sonst noch verwendest). Diese IDEs gibt es jeweils in einer Eveluationsversion, die du für den Workshop verwenden kannst. Sie bringen von Haus aus alles mit, was du für den Workshop benötigst. Du brauchst also keine Plug-ins etc. zu installieren.
  - Du kannst das geklonte Repository-Verzeichnis (s.u.) einfach mit `File -> Open` öffnen.

### TypeScript in Webstorm / IntelliJ

- Seit Ende 2023 gibt es eine neue ["TypeScript Engine"](https://blog.jetbrains.com/webstorm/2023/12/try-the-future-typescript-engine-with-the-webstorm-next-program/) in IntelliJ und Webstorm, die per default aber _ausgeschaltet_ ist
- Meiner Erfahrung nach funktioniert der TS Support aber besser, wenn sie _eingeschaltet_ ist. Das Verhalten damit wird wohl auch näher an dem Verhalten von VS Code sein, da IntelliJ nun den "offiziellen" Language Server verwendet und nicht die eigene Implementierung.
- Daher würde ich dir raten, die neue Engine einzuschalten.
  - Dazu musst du in den IntelliJ Settings unter `Languages & Frameworks` -> `TypeScript` die Option `Use types from server` _aktivieren_
    - Mehr dazu: https://www.jetbrains.com/help/idea/typescript-support.html#ws_verify_typescript_across_project

## Node.JS + Package Manager

- Der Workspace ist mit Node.js in Version 22.14 (TLS-Version) getestet. Ich gehe davon aus, dass neuere Node.JS-Versionen auch funktionieren sollten.
- Die Packages werden mit [pnpm](https://pnpm.io/) installiert
- Wenn du kein pnpm hast, kannst du entweder:
  - pnpm mit "corepack" installieren. Corepack ist in Node.js integriert: https://pnpm.io/installation#using-corepack
  - die Pakete mit npm installieren. Das sollte in der Regel auch genauso funktionieren.

## Klonen des Repositories

- Bitte klone das Repository von Github:
- ```bash
  git clone https://github.com/nextjsreactgraphql/react-intro.git
  ```

## Installation der Packages

- Installiere im Root-Verzeichnis des Repositories die Packages:
- ```bash
  pnpm install
  ```

## Starten des Frontends

- Im Root-Verzeichnis bitte das Frontend starten.
- Achtung: das Frontend läuft auf Port **3000**. Dieser Port muss also frei sein.
- ```bash
  pnpm dev
  ```
- Wenn das Frontend gestartet ist, kannst du im Browser http://localhost:3000 öffnen
- Es sollte ein "Hello World"-Message angezeigt werden

## Starten von Storybook

- Zur Präsentation und Dokumentation unserer Komponenten verwenden wir [Storybook](https://storybook.js.org/).
- Bitte starte Storybook. Achtung: dazu muss **Port 6006** frei sein.
- ```bash
  pnpm storybook
  ```
- Öffne im Browser http://localhost:6006. Hier sollte die Einstiegsseite von Storybook mit einer "Hello World"-Komponente erscheinen.

## Geschafft! 😊

Wenn bis hierher alles geklappt hast, bist du startklar. Bis zum Beginn des Workshops kannst du das Frontend und Storybook wieder beenden (Ctrl+C).

## Arbeitsweise während des Workshops

- Während des Workshops werden wir Schritt-für-Schritt einige React-Komponenten zusammenbauen
- Ich zeige euch bei jedem Schritt zunächst ein React-Feature im Editor
- Anschliessend macht ihr dazu eine Übung (die sehen immer so aus, dass ihr das programmiert, was ich auch programmiert habe)
- Dazu werde ich nach jedem Schritt (und vor der Übung) meinen Code sowie die Aufgabenbeschreibung in dieses Repository einchecken.
  - Das mache ich auf einem eigenen Branch, so dass ihr auf dem `main`-Branch euren Code committen könntet (wenn ihr wollt, müsst ihr natürlich nicht).
  - Ich kopiere euch dann auf das Miro-Board den Link zu dem Commit im GitHub, so dass ihr dort die Aufgabenbeschreibung und (m)eine Lösung ansehen könnt.
- Für den Next.js-Teil verwenden wir ein anderes Repository, mit dem beginnen wir dann wieder bei "null". 
  - Ihr könnt also hier in dem Workspace auch eigene Experimente machen, wenn was kaputt geht, ist das nicht schlimm.

# Präsentiere deine Komponente im Storybook

# Vorbereitung: Storybook starten

* Bitte starte zunächst storyboot mit dem `storybook` script
  * Im Root-Verzeichnis `pnpm storybook` oder `npm run storybook` ausführen
  * Storybook läuft dann auf Port 6006

# Dateien

- `src/ArticleCard.stories.ts` (anlegen!)
  - (Du kannst auch innerhalb von Stories JSX verwenden. In dem Fall müsste die Datei hinten mit `.tsx` enden.)

# Schritte
* Die `ArticleCard`-Komponente soll Teil der globalen Komponentenbibliothek werden 🥳. Damit andere sie finden und ausprobieren können, musst du sie in Storybook einbinden.
* Lege die Datei `ArticleCard.stories.ts` an
* Erzeuge die `meta`-Informationen mit der `meta`-Funktion.
  * Das Objekt musst du mit `default export` exportieren
* Lege eine oder zwei Stories an
  * erzeuge den `StoryObj`-Typen für deine Komponente
    * `type ArticleCardStory = StoryObj<typeof ArticleCard>`
  * Für jede Story, die du anlegen willst:
    * erzeuge ein Objekt vom Typ `ArticleCardStory`.
      * Das Objekt muss du exportieren
      * Mit `args` kannst du die Properties deiner Komponente setzen
* Als Vorlage und Hilfe kannst du in die Datei `hello_world/HelloWorld.stories.ts` schauen
* **Propiere deine Komponete in Storybook aus**
  * Du kannst Storybook jetzt im Browser öffnen: http://localhost:6006
  * Dort sollte deine Komponente zu finden sein
  * Wenn du auf die Komponente klickst, siehst du deine Story/Stories.
    * Du kannst unten im Fenster und `Controls` die Properties verändern und direkt sehen, wie sich die Darstellung deiner Komponente ändert.

# Material

* Storybook "Story" Grundlagen: https://storybook.js.org/docs/get-started/whats-a-story
* Für unsere "Kurzeinführung" enthält der Link oben alles, was du brauchst, aber hier details:
  * Argumente (Properties): https://storybook.js.org/docs/writing-stories/args
  * TypeScript: https://storybook.js.org/docs/writing-stories/typescript
  * Benennung von Stories: https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy
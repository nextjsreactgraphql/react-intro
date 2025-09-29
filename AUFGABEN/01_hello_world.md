# Übung: Eine React-Komponente

# Vorbereitung

- Stelle sicher, dass der Development-Server läuft
- Starte dazu das Script `dev` aus dem Root-Verzeichnis des Workspaces
  - Zum Beispiel: `pnpm dev` oder `npm run dev`
- Der Server mit deiner Anwendung läuft dann auf Port 3000
- **Hinweis:** Wenn der Server läuft und du **Dateien speicherst**, sollte die Darstellung im Browser automatisch aktualisiert werden
  - Wenn das nicht klappt, Browser Refresh machen
  - In der Regel ist es aber nicht notwendig, den Server neuzustarten.

# Dateien

- src/App.tsx
- src/ArticleCard.tsx (bitte anlegen!)

# Schritte

- Lege die neue Datei `src/ArticleCard.tsx` an
  - Dateien, die TypeScript- und JSX-Code enthalten **müssen** mit `.tsx` enden
  - Dateien, die nur "normalen" TypeScript-Code enthalten, können auch die Endung `.ts` haben.
- Lege darin eine ganz einfache React Komponente an
- Sie soll `ArticleCard` heißen
  - Fachliche Idee: damit kann man einen Artikel anzeigen, der z.B. aus der DB oder über GraphQL geladen wird
  - Damit alles möglichst einfach bleibt, brauchst zu nur zwei Informationen anzuzeigen (die wir später per Parameter an die Komponente übergeben):
    - Einen ausgedachten Titel
    - Eine ausgedachte Anzahl von Likes
  - Styling etc. spielt in unserem Workshop keine Rolle, aber wenn du willst, kannst du natürlich CSS hinzufügen (s.u.)
- Denk dran, dass du die Komponente exportieren musst!
- **Baue deine Komponente in unsere `App`-Komponente ein**
  - Die `App`-Komponente ist die Root-Komponente in unserer Anwendung, die beim Starten von React gerendert wird
    - In Next.js wird das etwas anders aussehen, aber auch da gibt es soetwas wie Root-Komponenten
  - Die `App`-Komponente gibt `Hello World` aus. Entferne das `return` Statement und liefere stattdessen deine `ArticleCard` zurück
    - wir werden später die `App`-Komponente noch um weitere Komponenten ergänzen
  - 
  

# Material

- Komponenten: https://react.dev/learn/your-first-component
- Importieren und exportieren von Komponenten: https://react.dev/learn/importing-and-exporting-components
  - Achtung! Beim `import` brauchst du in unserem Setup keine Dateiendung anzugeben!

# CSS in React
- Im Workspace ist Tailwind installiert, das kannst du out-of-the-box verwenden
  - Wenn du kein Tailwind verwenden willst, kannst du in `src/index.css` alles löschen
    - Du kannst deine eigenen CSS-Klassen dann in die Datei schreiben
    - Alternativ kannst du dein eigenes CSS auch auf einzelne Dateien aufteilen. Dazu legst du eine (oder mehrere) `.css`-Dateien an und importierst diese in einer (oder mehreren) Komponenten, z.B. `import './ArticleCard.css';`
- Unabhängig davon, ob du Tailwind oder eigenes CSS benutzt: anstatt `class` verwendest du in React das Attribute `className`, um die CSS-Klassen zu setzen (https://react.dev/learn#adding-styles)
- Um inline styles anzugeben (`style`-Attribute), musst du in React ein Objekt angeben.
  - Siehe hier: https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx
  - 
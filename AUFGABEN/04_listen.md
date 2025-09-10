# Baue eine Liste mit Artikeln

# Dateien

- src/types.ts (anlegen)
- src/ArticleList.tsx (anlegen)
- src/App.tsx

# Beschreibung

- **Baue eine neue Komponente `ArticleList`, die eine Liste von mehreren Artikeln anzeigen kann**
  - Die Komponente soll eine Liste von Artikeln (als Daten) bekommen
  - Jeder übergebene Artikel soll mit `ArticleCard` angezeigt werden
  - Die Aufgabe von `ArticleList` ist also, eine Liste von `ArticleCard`-Komponenten zu rendern

# Schritte

- Erzeuge einen TypeScript-Typen für die Daten eines Artikels
  - Der Typ soll in der (neuen) Datei `src/types.ts` angelegt werden
  - Der Typ soll `Article` heißen und folgende Properties haben:
  - `id` (`string`), `title` (`string`), `likes` (`number`)
  - exportiere den Typen aus `types.ts`, damit du in deinen Komponente darauf Zugriff hast (`export type...`)
- Definiere die Properties für die `ArticleList`
  - Das Properties Objekt `ArticleListProps` soll einen Eintrag haben (`articles`) mit einer Liste von `Article`-Objekten (`Article[]` oder `Array<Article>`)
    - Du musst den `Article`-Typ aus `types.ts` importieren (`import type Articles from ./types.ts`)
- Deine Komponente sollte ein Root-Element zurückgeben (z.B. `div` oder `section`)
  - Als Kind-Elemente soll für jeden übergebenen `Article` eine `ArticleCard`-Komponente gerendert werden
  - Denk' dran, dass du einen `key` bei `ArticleCard` verwenden musst.
    - Das `key`-Property ist automatisch an jeder React-Komponente vorhanden, du kannst es setzen und musst nichts weiter dafür tun.
    - Der Wert für das `key`-Property muss innerhalb der Liste eindeutig sein.
- Aktualisiere die `App`-Komponente
  - In der `App`-Komponente sollen nicht mehr zwei `ArticleCard`-Komponenten gerendert werden (kannst du entfernen)
  - Lege ein Array an (außerhalb der Komponenten-Funktion) mit zwei oder mehr `Article`s
    - (In der "echten" Anwendung hätten wir diese Daten natürlich z.B. über GraphQL gelesen)
    - Achte darauf, dass die `id`s in den Artikeln unterschiedlich sind
  - Verwende deine `ArticleList`-Komponente, um die Artikel anzuzeigen

# Material

- Rendering Lists in React: https://react.dev/learn/rendering-lists
- `key` property: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
- JavaScript `map`-Funktion an einem Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

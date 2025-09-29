# Properties einer Komponente

# Dateien 

- src/ArticleCard.tsx
- src/App.tsx

# Schritte

- **Mache deine `ArticleCard`-Komponente mit Properties parametrisierbar**
  - `title` und `likes` sollen per Properties übergeben werden
  - Definiere einen TypeScript `type` (oder `interface`) für das Property-Objekt der Komponente
    - `title` soll ein String sein
    - `likes` soll eine Zahl sein
- Verwende die übergebenen Properties in deiner `ArticleCard`
  - Entferne die hardcodierten Werte aus der vorherigen Übung und ersetze sie durch die Werte aus den Properties
- **Passe den Aufruf in der `App`-Komponente an** 
  - Hier musst du jetzt deine Properties angeben. Denk dir einfach Werte für `title` und `likes` aus
- **Optimiere die Darstellung der Likes** abhängig von der übergebenen Anzahl
  - Wenn ein Artikel keine Likes hat (`0`), soll die Komponente "Keine Likes" o.ä. anzeigen (statt `0 Likes`), ansonsten die Anzahl der Likes
- **Verwende deine Komponente zweimal in der App-Komponente**
  - Füge in der `App-`Komponente einen zweiten Aufruf der `ArticleCard` hinzu
    - ein Aufruf soll Likes != 0 haben, ein Aufruf Likes = 0, damit du die unterschiedliche Darstellung sehen kannst
  - Achtung! Eine Komponente (hier: die `App`-Komponente) darf nur *eine* Root-Komponente zurückliefern. Zwei (oder mehr) Komponenten gehen nicht.
    - Deswegen kannst du um die beiden `ArticleCard`-Komponenten ein `div` o.ä. legen, so dass `App` _ein_ Root-Element mit zwei Kind-Elementen zurückliefert
    - Alternativ kannst du ein `Fragment` statt des divs verwenden. Das ist eine Art virtuelle React-Komponente und besteht aus einem leeren Klammerpaar `<>...</>`. Zur Laufzeit wird diese "Komponente" von React entfernt.

# Material

- Properties von Komponenten: https://react.dev/learn/passing-props-to-a-component
- TypeScript object type (zum Beschreiben des Property-Objektes): https://www.typescriptlang.org/docs/handbook/2/objects.html
- JavaScript in JSX: https://react.dev/learn/javascript-in-jsx-with-curly-braces
- Conditionally rendering: https://react.dev/learn/conditional-rendering#conditionally-including-jsx
- Single Root Element: https://react.dev/learn/writing-markup-with-jsx#1-return-a-single-root-element
  - Fragment Komponente: https://react.dev/reference/react/Fragment
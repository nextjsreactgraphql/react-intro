# Baue einen interaktiven "Slider"

# Dateien

* `src/ArticleSlider.tsx` (anlegen)
* `src/App.tsx`

# Beschreibung

* Die "Slider"-Komponente soll einen Ausschnitt aus einer Artikel-Liste darstellen (z.B. immer drei Artikel gleichzeitig)
* Mit einem Vor/Zurück-Button soll man durch die Artikel navigieren können

# Schritte

* Lege die neue Komponente `ArticleSlider` in `src/ArticleSlider.tsx` an
    * Diese Komponente soll ein Property `articles` bekommen, dass eine Liste von `Article`-Objekten enthält
    * Die Properties entsprechen damit den Properties der `ArticleList`, du kannst diese dir einfach in deine neue Datei kopieren.
* Die Komponente benötigt einen Zustand (State), in dem du speicherst, welcher Artikel der erste ist, der angezeigt wird (Index aus der Artikel-Liste).
    * Initial sollen die ersten drei Artikel angezeigt werden, also muss der initiale Zustand auf `0` gesetzt sein
* Ermittle die anzuzeigenden Artikel aus dem `articles`-Property
    * Du kannst dafür die JavaScript-Funktion `slice` verwenden.
        * Dieser Funktion kannst du das erste letzte Element aus einem Array übergeben.
        * Die Funktion liefert dann ein neues Array mit den Elementen
        * Wenn das angegebene End-Element hinter dem letzten Element im Array liegt, werden automatisch weniger Elemente zurückgegeben
            * Es gibt also keine ungültigen Zugriffe
        * Du brauchst dir keine Mühe zu machen, dass die Indices im gültigen Bereich liegen. Es geht hier nur um die React Funktionalität.
* Zeige die sichtbaren Artikel mit deiner fertigen `ArticleList`-Komponente an
* Render zwei Button-Komponenten, zum navigieren durch die Artikel-Liste (`Vorherige` und `Nächste`)
    * Wenn auf einen Button geklickt wird, soll die Ansicht der Artikel entsprechend "verschoben" werden
    * Der Zustand muss also um `1` erhöht bzw. verringert werden
    * Wenn du willst, kannst du mit dem `disabled`-Propertis die Button deaktivieren, so dass man keine Werte im ungültigen Bereich auswählen kann (z.B. Index kleiner `0`)
        * Das ist aber kein Muss, es reicht, wenn deine Komponente funktioniert.
        * User Experience ist nicht unsere Priorität 🤓
* Verende den `ArticleSlider` in der `App`-Komponente.
    * Entferne dort den bestehenden `ArticleList`-Aufruf und render stattdessen den `ArticleSlider`
        * Was passiert wenn du den `ArticleSlider` mehrfach einbindest?
* **Optional**, wenn wir noch Zeit haben, kannst du noch Verbesserungen machen

    * Weitere Buttons hinzufügen, mit denen man direkt auf eine "Seite" springen kann
    * Endloses Klicken: wenn man rechts angekommen ist, geht es von vorne los **oder** den Button disablen, damit man nur dann klicken kann, wenn man noch im "gültigen" Bereich ist
    * In der App-Komponente kann man den Slider mit einem Button ein- und ausschalten.
    * Der Slider bekommt ein zusätzliches Property, mit dem eine Komponente von außen bestimmen kann, mit welchem Artikel begonnen wird
    * Wenn man auf der letzten Seite angekommen ist, soll der Slider eine andere Hintergrundfarbe bekommen (dazu bitte eine entsprechende CSS-Klasse setzen, z.B. `bg-red-500`)
    *

# Material

* JavaScript `slice`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

* React
    * React State: https://react.dev/learn/state-a-components-memory
        * besonders:https://react.dev/learn/state-a-components-memory#adding-a-state-variable
    * useState: https://react.dev/reference/react/useState
    * Event Handler: https://react.dev/learn/responding-to-events#adding-event-handlers
    * Properties von HTML-Elementen (eingebaute Browser Komponenten): https://react.dev/reference/react-dom/components/common

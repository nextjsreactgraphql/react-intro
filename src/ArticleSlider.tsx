import { Article } from "./types.ts";
import ArticleList from "./ArticleList.tsx";
import { useState } from "react";

type ArticleSliderProps = {
  articles: Article[]
}

// "Virtual DOM"
export default function ArticleSlider(props: ArticleSliderProps) {

  console.log("Rendering ArticleSlider", new Date().toLocaleTimeString());

  // State
  const [visibleArticleIndex, setVisibleArticleIndex] = useState(0);  // Tuple

  // const state = useState(0);  // Tuple
  // const visibleArticleIndex = state[0]; // Aktueller Wert im State
  // const setVisibleArticleIndex = state[1]; // Setter-Funktion

  const visibleArticles = props.articles.slice(
    visibleArticleIndex,
    visibleArticleIndex + 3
  );

  const zurueckButtonDisabled = visibleArticleIndex === 0;

  // const handleZurueckClick = () => {
  //   console.log("Zurück wurde geklickt!")
  // }
  //
  function handleZurueckClick() {
    setVisibleArticleIndex(visibleArticleIndex-1)
  }

  return <div className={"flex space-x-4"}>
    <button
      disabled={zurueckButtonDisabled}
      onClick={ handleZurueckClick  } >Zurück</button>
    <ArticleList articles={visibleArticles} />
    <button
      onClick={ () => setVisibleArticleIndex(visibleArticleIndex +1) }>
      Vor</button>
    <button onClick={() => setVisibleArticleIndex(2)}>Zu Nummer drei</button>
  </div>

}
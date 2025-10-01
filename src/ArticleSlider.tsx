import { Article } from "./types.ts";
import ArticleList from "./ArticleList.tsx";
import { useMemo, useState } from "react";

type ArticleSliderProps = {
  articles: Article[]
}

// "Virtual DOM"
//  { elementName: "div",
//  // children: [
//       { elementName: "h1", children: "Hello WorlD" },
//       { elementName: "ArticleList", children: [articles] }
//  }
export default function ArticleSlider(props: ArticleSliderProps) {

  console.log("Rendering ArticleSlider", new Date().toLocaleTimeString());

  // State
  const [visibleArticleIndex, setVisibleArticleIndex] = useState(0);  // Tuple

  // useMemo <--
  // useCallback
  //    ^---------------- React Compiler

  // const state = useState(0);  // Tuple
  // const visibleArticleIndex = state[0]; // Aktueller Wert im State
  // const setVisibleArticleIndex = state[1]; // Setter-Funktion

  // 1
  const visibleArticles = useMemo(
    () =>  props.articles.slice(
    visibleArticleIndex,
    visibleArticleIndex + 3
  ), [props.articles, visibleArticleIndex])

  // const kompletteList = visibleArticles + props.articles.slice(0, 2)

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
    <ArticleList articles={visibleArticles}
    imagePosition={"top"}/>
    <button
      onClick={ () => setVisibleArticleIndex(visibleArticleIndex +1) }>
      Vor</button>
    <button onClick={() => setVisibleArticleIndex(2)}>Zu Nummer drei</button>
  </div>

}
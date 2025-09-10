import { Article } from "./types.ts";
import ArticleList from "./ArticleList.tsx";
import { useEffect, useState } from "react";

type SliderProps = {
  allArticles: Article[];
};

// 1. Render Phase => Virtual DOM
// 2. Commit Phase => Virtual -> Browser DOM
//     3. Effekte
export default function Slider(props: SliderProps) {

  // State (Zustand)  Model
  // const state = useState(0);
  // const firstArticleIndex = state[0];
  // const setFirstArticleIndex = state[1];

  const [ firstArticleIndex, setFirstArticleIndex ]
    = useState(0);

  const selectedArticles = props.allArticles.slice(
    firstArticleIndex, firstArticleIndex+3);

  // Virtual DOM => native DOM
  useEffect(
    () => {
      // async function loadData() { /* ... */}
      // loadData();
      window.document.title = "Slider " + firstArticleIndex
    }, [ firstArticleIndex ] // Dependency Array
  );

  return (
    <div className={"flex gap-x-4"}>
      <p>Der erste Artikel ist {firstArticleIndex}</p>
      <button
        onClick={() => setFirstArticleIndex(firstArticleIndex-1)}>Vorherige
      </button>
      <ArticleList articles={selectedArticles} />
      <button
        onClick={() => setFirstArticleIndex(firstArticleIndex+1)}>Nächste</button>
    </div>
  );
}

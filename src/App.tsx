import ArticleCard from "./ArticleCard.tsx";
import { Fragment } from "react";

export default function App() {
  return (
    <>
      <ArticleCard title={"Artikel 1"} likes={123} />
      <ArticleCard title={"Artikel 2"} likes={45} />
    </>
  );
}

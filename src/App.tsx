import ArticleCard from "./ArticleCard.tsx";
import { Fragment } from "react";
import ArticleList from "./ArticleList.tsx";

const article1 = {
  id: "1",
  likes: 421,
  title: "Hello React",
};

const article2 = {
  id: "2",
  likes: 0,
  title: "Hello Next.js",
};
function loadArticlesFromServer() {
  return [article1, article2];
}
export default function App() {

  // "Serverzugriff"
  const allArticles = loadArticlesFromServer();

  return <Fragment>
    <ArticleList articles={allArticles} />
    {/*  <ArticleCard*/}
    {/*  title="Learning React"*/}
    {/*  likes={7}*/}
    {/*/>*/}
    {/*<ArticleCard*/}
    {/*  title="Learning Next"*/}
    {/*  likes={12}*/}
    {/*/>*/}
  </Fragment>;
}


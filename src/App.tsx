import ArticleCard from "./ArticleCard.tsx";
import { Article } from "./types.ts";
import ArticleList from "./ArticleList.tsx";
import ArticleSlider from "./ArticleSlider.tsx";

const readArticlesFromBackend = () => {
  const article1:Article = {
    id: "1",
    likes: 421,
    title: "Hello React",
  };

  const article2:Article = {
    id: "2",
    likes: 333,
    title: "Hello Next.js 2",
  };

  const article3:Article = {
    id: "3",
    likes: 0,
    title: "Hello Next.js 3",
  };
  const article4:Article = {
    id: "4",
    likes: 0,
    title: "Hello Next.js 4",
  };
  const article5:Article = {
    id: "5",
    likes: 0,
    title: "Hello Next.js 5",
  };
  const article6:Article = {
    id: "6",
    likes: 0,
    title: "Hello Next.js 6",
  };


  return [article1, article2, article3, article4, article5,article6]
}




export default function App() {

  const articles = readArticlesFromBackend();

  return <div>
    <ArticleSlider articles={articles} />
  </div>
}

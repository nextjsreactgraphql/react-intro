import ArticleCard from "./ArticleCard.tsx";
import { Article } from "./types.ts";
import ArticleList from "./ArticleList.tsx";

const readArticlesFromBackend = () => {
  const article1:Article = {
    id: "1",
    likes: 421,
    title: "Hello React",
  };

  const article2:Article = {
    id: "2",
    likes: 0,
    title: "Hello Next.js",
  };

  return [article1, article2]
}




export default function App() {

  const articles = readArticlesFromBackend();

  return <div>
    <ArticleList articles={articles} />
  </div>
}

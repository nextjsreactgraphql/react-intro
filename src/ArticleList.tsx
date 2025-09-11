import { Article } from "./types.ts";
import ArticleCard from "./ArticleCard.tsx";

type ArticleListProps = {
  articles: Article[]
}

export default function ArticleList(props: ArticleListProps) {

  return <div className={"flex gap-x-4"}>
    {props.articles.map(a =>
      <ArticleCard name="..." key={a.id} title={a.title} likes={a.likes} />)}
  </div>

}
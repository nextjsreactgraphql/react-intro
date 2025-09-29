import { Article } from "./types.ts";
import ArticleCard from "./ArticleCard.tsx";

type ArticleListProps = {
  articles: Article[]
  // articles: Array<Article>
}

export default function ArticleList(props: ArticleListProps) {

    return <div className={"flex space-x-4"}>
      {props.articles.map( (a) => {
        return <ArticleCard title={a.title} likes={a.likes} />
      })}

    </div>
}
import { Article } from "./types.ts";
import ArticleCard from "./ArticleCard.tsx";

type ArticleListProps = {
  articles: Article[]
  imagePosition?: "top"|"bottom"
  // articles: Array<Article>
}

export default function ArticleList(props: ArticleListProps) {

    return <div className={"flex space-x-4"}>
      {props.articles.map( (a) => {
        return <ArticleCard key={a.id} title={a.title}
                            likes={a.likes}
                            imagePosition={props.imagePosition}
        />
      })}

    </div>
}
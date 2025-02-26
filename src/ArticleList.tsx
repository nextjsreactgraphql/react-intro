import ArticleCard from "./ArticleCard.tsx";
import {Article} from "./types.ts";



type ArticleListProps = {
	articles: Article[]
}

export default function ArticleList({articles}: ArticleListProps) {

	// const x  = [ <ArticleCard title={"fasdfasdf"} likes={3} /> ]

	return <div className={"space-y-4 "}>
		{articles.map( article => <ArticleCard key={article.id} title={article.title} likes={article.likes} />)}

	</div>

}
import {Article} from "./types.ts";
import ArticleList from "./ArticleList.tsx";
import {useState} from "react";
import Hallo from "./Hallo.tsx";

type ArticleSliderProps = {
	articles: Article[]
}
export default function ArticleSlider( {articles} : ArticleSliderProps) {

	const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);
	// const state = useState(0);
	// const selectedArticleIndex = state[0];
	// const setSelectedArticleIndex = state[1];

	// let selectedArticleIndex = 0;

	const selectedArticles = articles.slice(selectedArticleIndex, selectedArticleIndex + 3);
	console.log("Render", selectedArticleIndex)

	const handleNextClick = () => setSelectedArticleIndex(selectedArticleIndex + 1)

	return <div className={"flex"}>
		<button
			disabled={selectedArticleIndex<=0}
			onClick={ () => setSelectedArticleIndex(selectedArticleIndex - 1) }>Prev</button>
		<ArticleList articles={selectedArticles} />
	<Hallo  />
		<button onClick={handleNextClick}>Next</button>
	</div>

}
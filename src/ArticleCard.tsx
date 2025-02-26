// Properties
// <ArticleCard title="Hello React" likes={234} />
// { title: "Hello React", likes: 234 }

type ArticleCardProps = {
	title: string;
	likes: number
}

//export default function ArticleCard(props: ArticleCardProps) {
export default function ArticleCard({title, likes} : ArticleCardProps) {
	// const {title, likes} = props;
	// return React.createElement("article")
	// JSX
	// "virtual DOM"

	const myClassNames = "text-2xl font-bold text-amber-700"

	if (title === "" ) {
		return <h1>Artikel kaputt</h1>
	}



	return (
		<article>
			<h1 id={"title"} aria-hidden={true} className={myClassNames}>{title}</h1>
			{/*<div>{likes} Likes</div>*/}
			{likes === 0 ? <p>Leider keine Likes!</p> : <p>{likes} Likes</p>}
		</article>
	)
}
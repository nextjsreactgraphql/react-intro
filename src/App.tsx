import ArticleCard from "./ArticleCard.tsx";

export default function App() {
  return <div>
    <ArticleCard title={"Artikel eins"} likes={1} />
    <ArticleCard title={"Artikel zwei"} likes={456} />
  </div>
}

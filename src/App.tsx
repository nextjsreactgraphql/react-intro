import ArticleCard from "./ArticleCard.tsx";
import { Fragment } from "react";
import ArticleList from "./ArticleList.tsx";
import ArticleSlider from "./ArticleSlider.tsx";
import Button from "./Button.tsx";
import NdrIcon from "./Icon.tsx";

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

const article3 = {
  id: "3",
  likes: 10,
  title: "Hello JavaScript",
};
const article4 = {
  id: "4",
  likes: 10,
  title: "Hello HTML",
};
const article5 = {
  id: "5",
  likes: 10,
  title: "Hello TypeScript",
};

export default function App() {

  const leftIcon = <NdrIcon size={"lg"} />
  // const leftIcon = React.createElement("NdrIcon", {size: "lg" });

  return (
    <>
      <h1>Mediathek</h1>
      <Button iconLeft={leftIcon}>
        <NdrIcon />

        <p>eins</p>
        <p>Dieses ist <b>unser</b> Button</p>

      </Button>
      <ArticleSlider articles={[article1, article2, article3, article4, article5]} />
      {/*<ArticleList articles={ [article1, article2, article3] } />*/}
      {/*<ArticleCard title={"Artikel 1"} likes={123} />*/}
      {/*<ArticleCard title={"Artikel 2"} likes={45} />*/}
      <h2>(c) ARD</h2>
    </>
  );
}

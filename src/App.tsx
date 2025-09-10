import ArticleCard from "./ArticleCard.tsx";
import { Fragment } from "react";

export default function App() {
  return <Fragment>
      <ArticleCard
      title="Learning React"
      likes={7}
    />
    <ArticleCard
      title="Learning Next"
      likes={12}
    />
  </Fragment>;
}


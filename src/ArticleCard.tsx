// <ArticleCard title="Learning React Props" likes={7} />

// props
// {
// title: "Learning React Props"
// likes: 7
// }

type ArticleCardProps = {
  title: string;
  likes: number;
  name: string;

  // variante: "large" | "small"
}
export default function ArticleCard(props: ArticleCardProps) {
// export default function ArticleCard({title, likes}: ArticleCardProps) {
  // JSX
  // Properties

  // const likes = loadLikes(...)

  const x = props.name.toUpperCase();

  const message = props.likes < 500 ?
    <div className={"gruen"}>Unter fünfhundert</div> :
    <div className={"rot"}>Über fünfhundert</div>;

  return <article>
    <h1 className={"text-2xl"}>{props.title}</h1>

    {props.likes > 1000 && <div>Zu viele Likes!</div>}

    {message}

    <div>{props.likes < 500 ? "xxx" : "yyy"}</div>

    {props.likes === 1 ?
      <div>Ein Like</div> :
      <div>{props.likes} Likes</div>
    }

  </article>
}
// Properties (props)

// <ArticleCard title="Artikel eins" likes=123 />
// {
//   title: "Artikel eins",
//   likes: 123
// }
//   props

interface IArticleCardProps {
  title: string;
  likes: number;
}

type ArticleCardProps = {
  title: string;
  likes: number;

  imagePosition?: "top" | "bottom"
}

// export default function ArticleCard({likes, title}: ArticleCardProps) {
export default function ArticleCard(props: ArticleCardProps) {

  //

  // Model
  // View <----
  // Controller
  // MVC-Pattern

  // JSX "Templatesprache"

  // Anweisungen und Statements (if, switch, goto, Variable)
  // Ausdrücke  und Expressions (Variable, Funktionsaufruf, Ternäre-Operator)
  //                               a ? "Ja, ist A" : "Nein, ist nicht A"

  const likesMessage = props.likes == 1 ? "1 Like" : `${props.likes} Likes`;

  return <article>
    {props.imagePosition === "top" && <div>bild</div>}
    <h1 className={"text-2xl font-bold"}>{props.title === "" ? "Kein Titel" : props.title}</h1>
    {/*<input disabled={true} max={123} value={null} />*/}
    <div>{likesMessage}</div>
    {props.imagePosition === "bottom" && <div>bild</div>}
  </article>



}
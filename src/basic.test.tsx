import { test } from "vitest";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

// Vitest

//

test("render to html", () => {
  const html = renderToString(<App />)
  console.log(html);
})
import { test } from "vitest";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

test("render in html", () => {
  const html = renderToString(<App />)
  console.log(html);
})
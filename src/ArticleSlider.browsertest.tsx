// React Testing Library <-- aktuelle Weg
//   JSDom

// Vitest Browser Mode <-- NEU!!!!!

import { expect, test } from "vitest";
import { Article } from "./types.ts";
import { render } from "vitest-browser-react";
import ArticleSlider from "./ArticleSlider.tsx";

// Vitest (ehem. Jest)
// Component Tests: Vitest Browser Mode
//   MSW (Mock Service Worker)
//      ^--- mockt / simuliert Netzwerkverkehr
//   (alternativ React Testing Library)
//   Async RSC testen: https://github.com/kasperpeulen/vitest-plugin-rsc
// End-to-end-Tests: Cypress vs. Playwright (Microsoft)
//

/*

http.get("/api/graphql/", (req, res) => {
return { "data": "success" }
})

 */

test('render slider correctly', async () => {

  const testArticles = readArticlesFromBackend();

  const screen = render(<ArticleSlider articles={testArticles} />);
  await expect
    .element(screen.getByText(/Hello React/i))
    .toBeInTheDocument();

  await expect
    .element(screen.getByText(/Hello Next.js 4/i))
    .not
    .toBeInTheDocument();

  await screen.getByRole("button", {
    name: /vor/i
  }).click();

  await expect
    .element(screen.getByText(/Hello React/i))
    .not
    .toBeInTheDocument();


  await expect
    .element(screen.getByText(/Hello Next.js 4/i))
    .toBeInTheDocument();



});


const readArticlesFromBackend = () => {
  const article1:Article = {
    id: "1",
    likes: 421,
    title: "Hello React",
  };

  const article2:Article = {
    id: "2",
    likes: 333,
    title: "Hello Next.js 2",
  };

  const article3:Article = {
    id: "3",
    likes: 0,
    title: "Hello Next.js 3",
  };
  const article4:Article = {
    id: "4",
    likes: 0,
    title: "Hello Next.js 4",
  };
  const article5:Article = {
    id: "5",
    likes: 0,
    title: "Hello Next.js 5",
  };
  const article6:Article = {
    id: "6",
    likes: 0,
    title: "Hello Next.js 6",
  };


  return [article1, article2, article3, article4, article5,article6]
}
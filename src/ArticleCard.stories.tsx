import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard.tsx";

type ArticleCardMeta = Meta<typeof ArticleCard>;

const meta: ArticleCardMeta = {
  tags: ["autodocs"],
  title: "React-Komponenten / Article Card Komponente",
  args: {
    title: "Beispiel Artikel",
  },
  // title: "Article Card",
  component: ArticleCard,
};

// meta per default exportiert !!!!
export default meta;

type ArticleCardStory = StoryObj<typeof ArticleCard>;

export const defaultArticleCard: ArticleCardStory = {
  name: "Article Card (Default)",
  args: {
    title: "mittag",
    likes: 23123,
  },
};

export const articleMit1Like: ArticleCardStory = {
  name: "Article Card (mit 1 Like)",
  args: {
    title: "Montag Morgen",
    likes: 1,
  },
};

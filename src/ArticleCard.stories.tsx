import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard.tsx";

const meta: Meta<typeof ArticleCard> = {
  title: "NDR / Artikel-Karte",
  tags: ["autodocs"],
  component: ArticleCard,
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
  args: {
    title: "Guten Tag React",
    likes: 123,
  },
};

export const Zwei: Story = {
  args: {
    title: "Guten Tag Reactd",
    likes: 123,
  },
};

export const NDRStory: Story = {
  args: {
    title: "NDR",
    likes: 456,
  },
};

import ArticleCard from "./ArticleCard.tsx";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof ArticleCard> = {
	title: "Artikel Komponenten / ArticleCard",
	tags: ["autodocs"],
	component: ArticleCard
}

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
	args: {
		likes: 123,
		title: "Hallo Storybook"
	}
}

export const OhneLikes: Story = {
	args: {
		likes: 0,
		title: "Schlecter Artikel, gefällt niemandem"
	}
}


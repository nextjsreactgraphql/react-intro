import { Meta, StoryObj } from "@storybook/react";
import HelloWorld from "./HelloWorld.tsx";

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
};

export default meta;

type HelloWorldStory = StoryObj<typeof HelloWorld>;

export const helloWorld: HelloWorldStory = {
  args: {
    title: "Hello",
    subtitle: "World",
  },
};

export const withoutTitle: HelloWorldStory = {
  name: "Hello World without subtitle",
  args: {
    title: "Hello",
  },
};

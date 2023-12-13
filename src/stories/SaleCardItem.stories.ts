import type { Meta, StoryObj } from "@storybook/react";
import { SaleCardItem } from "../components/SaleCardItem/SaleCardItem";

const meta = {
  title: "Example/SaleCardItem",
  component: SaleCardItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SaleCardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  args: {
    id: 1,
    imageUrl:
      "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
    actualUrl: "/home",
    type: "block",
    height: 128,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { SaleCard } from "../components/SaleCard/SaleCard";

const meta = {
  title: "Example/SaleCard",
  component: SaleCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SaleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  args: {
    items: [{ imageUrl: "someurl", actualUrl: "someotherurl" }],
    marginTop: 0,
    type: "block",
    height: 96,
  },
};

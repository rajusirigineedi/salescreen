import type { Meta, StoryObj } from "@storybook/react";
import { SaleScreenView } from "../components/SaleScreenView/SaleScreenView";

const meta = {
  title: "Example/SaleScreenView",
  component: SaleScreenView,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SaleScreenView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaleScreen: Story = {
  args: {
    cardsData: [
      {
        id: 1,
        items: [
          {
            id: 1,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 2,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 3,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
        ],
        marginTop: 0,
        type: "block",
        height: 64,
      },
      {
        id: 2,
        items: [
          {
            id: 1,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 2,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 3,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
        ],
        marginTop: 20,
        type: "carousel",
        height: 190,
      },
      {
        id: 3,
        items: [
          {
            id: 1,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 2,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
          {
            id: 3,
            imageUrl:
              "http://res.cloudinary.com/dr8pyxxqb/image/upload/v1693739369/ed3vqzcf7l8higzyx0ur.avif",
            actualUrl: "/home",
          },
        ],
        marginTop: 20,
        type: "draggable",
        height: 96,
      },
    ],
  },
};

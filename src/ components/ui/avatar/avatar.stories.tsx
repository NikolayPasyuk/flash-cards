import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar.tsx";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "Colm Tutte",
  },
};

export const Large: Story = {
  args: {
    userName: "Colm Tutte",
    size: "large",
  },
};

export const DefaultWithImage: Story = {
  args: {
    userName: "Colm Tutte",
    image: "https://placehold.co/36",
  },
};

export const LargeWithImage: Story = {
  args: {
    userName: "Colm Tutte",
    size: "large",
    image: "https://placehold.co/96",
  },
};

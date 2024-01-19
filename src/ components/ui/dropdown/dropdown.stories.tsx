import type { Meta, StoryObj } from "@storybook/react";

import { Edit } from "../../../assets/icons/edit";
import { OutlinedPlayCircle } from "../../../assets/icons/play-circle-outline";
import { Trash } from "../../../assets/icons/trash";

import { DropdownItemWithIcon } from "./dropdown-items/dropdow-item.tsx";
import { Dropdown } from "./dropdown.tsx";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon
          icon={<OutlinedPlayCircle />}
          text="Learn"
          onSelect={() => {}}
        />
        <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon
          icon={<Trash />}
          text="Delete"
          onSelect={() => {}}
        />
      </>
    ),
  },
};

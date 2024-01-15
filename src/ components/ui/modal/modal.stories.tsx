import { Meta } from "@storybook/react";

import { Button } from "../button";
import { Typography } from "../typography";

import { Modal } from "./";

export default {
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export const Default = {
  args: {
    open: true,
    title: <>Some Title</>,
    showCloseButton: true,
    children: (
      <>
        <Typography variant={"body2"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          consequatur ducimus ea est nam nobis nulla officiis temporibus!
          Debitis distinctio dolores doloribus eum excepturi fugit incidunt
          laudantium repudiandae temporibus voluptates.
        </Typography>
        <Button fullWidth>Save</Button>
      </>
    ),
  },
};

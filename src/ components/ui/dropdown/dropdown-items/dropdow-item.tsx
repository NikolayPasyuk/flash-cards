import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

import s from "./dropdown-new-item.module.scss";
import { Typography } from "../../typography";

export type DropdownItemProps = {
  children: ReactNode;
  onSelect?: (event: Event) => void;
  className?: string;
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>;
export const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  DropdownItemProps
>(({ children, onSelect, className }, ref): JSX.Element => {
  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e);
    e.preventDefault();
  };

  return (
    <DropdownPrimitive.Item
      ref={ref}
      className={`${s.item} ${className ? className : ""}`}
      onSelect={onSelectHandler}
      asChild
    >
      <div>{children}</div>
    </DropdownPrimitive.Item>
  );
});

export type DropdownItemWithIconProps = Omit<DropdownItemProps, "children"> & {
  icon: ReactNode;
  text: string;
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>;
export const DropdownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  DropdownItemWithIconProps
>(({ icon, text, onSelect, className, ...restProps }, ref): JSX.Element => {
  const onSelectHandler = (e: Event) => {
    onSelect && onSelect(e);
    e.preventDefault();
  };

  return (
    <DropdownPrimitive.Item
      ref={ref}
      className={`${s.item} ${className ? className : ""}`}
      asChild
      {...restProps}
      onSelect={onSelectHandler}
    >
      <div>
        <div className={s.itemIcon}>{icon}</div>
        <Typography variant={"caption"}>{text}</Typography>
      </div>
    </DropdownPrimitive.Item>
  );
});

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

import s from "./dropdown-new-item.module.scss";

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

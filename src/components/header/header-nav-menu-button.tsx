import { HTMLAttributes } from "react";
import { MenuIcon } from "@/components/icons/menu";
import clsx from "clsx";

export type HeaderNavMenuButtonProps = HTMLAttributes<HTMLButtonElement>;

export function HeaderNavMenuButton(props: HeaderNavMenuButtonProps) {
  const { className, ...buttonProps } = props;

  return (
    <button className={clsx("text-slate-300", className)} {...buttonProps}>
      <MenuIcon className="w-8 h-8"/>
    </button>
  );
}
import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PanelListItemProps = HTMLAttributes<HTMLLIElement> & {};

export function PanelListItem(props: PanelListItemProps) {
  const { className, ...liProps } = props;

  return (
    <li
      className={clsx(
        "group/panel-list-item",
        "border border-transparent rounded-xl",
        "transition-all duration-300 ease-in-out",
        // Fade all panels when the list is hovered
        "group-hover/panel-list:[filter:opacity(.5)]",
        // Highlight the hovered panel
        "hover:![filter:opacity(1)]",
        "hover:backdrop-brightness-[.85]",
        "hover:backdrop-blur-[2px]",
        "hover:border-slate-800",
        className
      )}
      {...liProps}
    />
  );
}

import clsx from "clsx";
import React, { HTMLAttributes } from "react";

export type PanelListProps = HTMLAttributes<HTMLUListElement> & {};

export default function PanelList(props: PanelListProps) {
  const { className, ...ulProps } = props;

  return (
    <ul
      className={clsx(
        "-m-12",
        "group/panel-list",
        "relative flex flex-col",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...ulProps}
    />
  );
}

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
        "p-12",
        className
      )}
      {...liProps}
    />
  );
}

PanelList.Item = PanelListItem;
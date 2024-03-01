import clsx from "clsx";
import { HTMLAttributes } from "react";
import { PanelListItem } from "./panel-list-item";

export type PanelListProps = HTMLAttributes<HTMLUListElement> & {};

export function PanelList(props: PanelListProps) {
  const { className, ...ulProps } = props;

  return (
    <ul
      className={clsx(
        "group/panel-list",
        "relative flex flex-col",
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...ulProps}
    />
  );
}

PanelList.Item = PanelListItem;
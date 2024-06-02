import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PanelListItemProps = HTMLAttributes<HTMLLIElement> & {};

export function PanelListItem(props: PanelListItemProps) {
  const { className, ...liProps } = props;

  return (
    <li
      className={clsx(
        "group/panel-list-item",
        "border rounded-xl border-slate-800",
        "backdrop-brightness-[.85] backdrop-blur-[2px]",
        className
      )}
      {...liProps}
    />
  );
}

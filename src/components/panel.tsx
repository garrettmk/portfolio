import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PanelProps = HTMLAttributes<HTMLDivElement> & {};

export function Panel(props: PanelProps) {
  const { className, ...rest } = props;
  return (
    <div 
      className={clsx(
        "border border-transparent rounded-xl",
        "transition-all duration-300 ease-in-out",
        "hover:![filter:opacity(1)]",
        "hover:backdrop-brightness-[.85]",
        "hover:backdrop-blur-[2px]",
        "hover:border-slate-800",
        className
      )}
      {...rest}
    />
  );
}
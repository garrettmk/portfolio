import clsx from "clsx";
import { HTMLAttributes } from "react";

export type SidebarFooterProps = HTMLAttributes<HTMLDivElement>;

export default function SidebarFooter(props: SidebarFooterProps) {
  const { className, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        "self-center mt-auto mb-12",
        className
      )}
    >
      {children}
    </div>
  );
}
import React, { HTMLAttributes } from "react";
import BigG from "./big-g";
import SidebarItem, { type SidebarItemProps } from "./sidebar-item";
import clsx from "clsx";

export type SidebarProps = HTMLAttributes<HTMLDivElement>;

export default function Sidebar(props: SidebarProps) {
  const { className, children, ...divProps } = props;

  return (
    <aside className={clsx("w-80 flex flex-col", className)} {...divProps}>
      <div className="flex flex-col justify-center items-center h-80">
        <BigG />
      </div>
      <nav>
        <ul className="[&>li]:mb-4 group">
          {children}
        </ul>
      </nav>
      <div className="text-green-300 self-center mt-auto mb-8">
        Surprise me!
      </div>
    </aside>
  );
}

Sidebar.Item = SidebarItem;
export { SidebarItem, type SidebarItemProps };

import { HTMLAttributes } from "react";
import SidebarMenuItem, { SidebarMenuItemProps } from "./sidebar-menu-item";
import clsx from "clsx";

export type SidebarMenuProps = HTMLAttributes<HTMLDivElement>;

export default function SidebarMenu(props: SidebarMenuProps) {
  const { className, children, ...divProps } = props;

  return (
    <nav className={clsx("text-xl", className)} {...divProps}>
      <ul className="[&>li]:mb-4 group">
        {children}
      </ul>
    </nav>
  );
}

SidebarMenu.Item = SidebarMenuItem;
export { SidebarMenuItem, type SidebarMenuItemProps };
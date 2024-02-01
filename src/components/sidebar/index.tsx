import clsx from "clsx";
import { HTMLAttributes } from "react";
import SidebarHero, { SidebarHeroProps } from "./sidebar-hero";
import SidebarMenu, { SidebarMenuProps } from "./sidebar-menu";
import SidebarFooter, { SidebarFooterProps } from "./sidebar-footer";

export type SidebarProps = HTMLAttributes<HTMLDivElement>;

export default function Sidebar(props: SidebarProps) {
  const { className, children, ...divProps } = props;

  return (
    <aside 
      className={clsx(
        "w-80 flex flex-col", 
        "backdrop-blur-[2px] backdrop-brightness-[.85] border-r border-slate-800",
        className
      )}
      {...divProps}
    >
      {children}
    </aside>
  );
}

Sidebar.Hero = SidebarHero;
Sidebar.Menu = SidebarMenu;
Sidebar.Footer = SidebarFooter;
export {
  SidebarHero, 
  type SidebarHeroProps, 
  SidebarMenu, 
  type SidebarMenuProps,
  SidebarFooter,
  type SidebarFooterProps
};


import clsx from "clsx";
import { HTMLAttributes } from "react";
import SidebarHero, { SidebarHeroProps } from "./sidebar-hero";
import SidebarMenu, { SidebarMenuProps } from "./sidebar-menu";
import SidebarFooter, { SidebarFooterProps } from "./sidebar-footer";
import { Panel } from "../panel";

export type SidebarProps = HTMLAttributes<HTMLDivElement>;

export default function Sidebar(props: SidebarProps) {
  const { className, children, ...divProps } = props;

  return (
    <Panel 
      className={clsx(
        "flex flex-col p-12", 
        className
      )}
      {...divProps}
    >
      {children}
    </Panel>
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


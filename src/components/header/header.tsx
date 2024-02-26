'use client';

import clsx from "clsx";
import { HTMLAttributes, useState } from "react";
import { HeaderNavItem } from "./header-nav-item";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import { MenuIcon } from "../icons/menu";
import { HeaderNavMenuButton } from "./header-nav-menu-button";

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  const { className, ...divProps } = props;
  const scrollPosition = useWindowScroll();
  const hasScrolled = scrollPosition.y > 0;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header
      className={clsx(
        "xl:px-48 md:px-24 sm: px-8 border-b text-slate-50",
        "transition-all duration-300 ease-in-out",
        "flex items-center justify-between items-center",
        isExpanded ? "h-screen" : "h-16",
        hasScrolled ? "backdrop-blur-[4px] backdrop-brightness-[.65]" : "backdrop-blur-[2px] backdrop-brightness-[.85]",
        hasScrolled ? "border-slate-800" : "border-transparent",
        className
      )} 
      {...divProps}
    >
      <h1 className="text-3xl font-bold text-green-300">GM</h1>
      <nav className={clsx(
        "transition-all duration-300 ease-in-out",
        isExpanded ? "block" : "hidden md:block"
      )}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center group/nav-list">
          <HeaderNavItem href="/" exact>About</HeaderNavItem>
          <HeaderNavItem href="/projects">Projects</HeaderNavItem>
          <HeaderNavItem href="/blog">Blog</HeaderNavItem>
          <HeaderNavItem href="/contact">Contact</HeaderNavItem>
        </ul>
      </nav>
      <HeaderNavMenuButton
        className="md:hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </header>
  );
}
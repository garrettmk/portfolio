'use client';

import { useWindowScroll } from "@/hooks/use-window-scroll";
import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HeaderNavItem } from "./header-nav-item";
import { HeaderNavMenuButton } from "./header-nav-menu-button";

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  const { className, ...divProps } = props;
  const scrollPosition = useWindowScroll();
  const hasScrolled = scrollPosition.y > 0;
  const [isOverlay, setisOverlay] = useState(false);

  useEffect(() => {
    if (isOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <header
        className={clsx(
          "xl:px-48 md:px-24 sm: px-8 border-b text-slate-50",
          "transition-all duration-150 ease-in-out",
          "flex items-center justify-between items-center h-16",
          hasScrolled ? "backdrop-blur-[4px] backdrop-brightness-[.65]" : "backdrop-blur-[2px] backdrop-brightness-[.85]",
          hasScrolled ? "border-slate-800" : "border-transparent",
          className
        )} 
        {...divProps}
      >
        <Link href="/">
          <h1 className="text-3xl font-bold text-green-300">GM</h1>
        </Link>
        <HeaderNavMenuButton
          className="md:hidden"
          onClick={() => setisOverlay(!isOverlay)}
        />
      </header>
      {createPortal(
        <nav
          className={clsx(
            "fixed inset-0 z-50 flex flex-row items-center justify-between p-8",
            "transition-all duration-300 ease-in-out",
            "backdrop-blur-[16px] backdrop-brightness-[.65] bg-slate-900 bg-opacity-50",
            isOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setisOverlay(false)}
        >
          <Link href="/">
            <h1 className="text-3xl font-bold text-green-300">GM</h1>
          </Link>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center group/nav-list">
            <HeaderNavItem href="/" exact>About</HeaderNavItem>
            <HeaderNavItem href="/projects">Projects</HeaderNavItem>
            <HeaderNavItem href="/posts">Blog</HeaderNavItem>
            <HeaderNavItem href="/contact">Contact</HeaderNavItem>
          </ul>
          <HeaderNavMenuButton
            onClick={() => setisOverlay(!isOverlay)}
          />
        </nav>,
        document.body
      )}
    </>
  );
}
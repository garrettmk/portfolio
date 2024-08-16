'use client';

import { useWindowScroll } from "@/hooks/use-window-scroll";
import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, useState } from "react";
import { HeaderNavItem } from "./header-nav-item";
import { HeaderNavMenuButton } from "./header-nav-menu-button";
import { HeaderOverlay } from "./header-overlay";
import { LinkedinIcon } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header(props: HeaderProps) {
  const { className, ...divProps } = props;
  const scrollPosition = useWindowScroll();
  const hasScrolled = scrollPosition.y > 0;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 h-16 z-10",
          "xl:px-48 md:px-24 sm: px-8 border-b text-slate-50",
          "transition-all duration-150 ease-in-out",
          "flex items-center justify-between items-center",
          hasScrolled ? "backdrop-blur-[8px] backdrop-brightness-[.65]" : "backdrop-blur-[2px] backdrop-brightness-[.85]",
          hasScrolled ? "border-slate-800" : "border-transparent",
          className
        )}
        {...divProps}
      >
        <Link href="/">
          <h1 className="text-3xl font-bold text-green-300">GM</h1>
        </Link>
        <nav className="flex flex-row gap-6 transition-all duration-300 ease-in-out hidden md:flex">
          <ul className="flex flex-row gap-6 items-center group/nav-list">
            <HeaderNavItem href="/" exact>About</HeaderNavItem>
            <HeaderNavItem href="/projects">Projects</HeaderNavItem>
            <HeaderNavItem href="/posts">Blog</HeaderNavItem>
          </ul>

          <div className="w-[1px] bg-slate-700 self-stretch"/>
          
          <ul className="flex flex-row gap-6 items-center group/nav-list">
            <HeaderNavItem href="https://www.linkedin.com/in/garrettmk">
              <LinkedinIcon className="w-6 h-6"/>
            </HeaderNavItem>
            <HeaderNavItem href="https://github.com/garrettmk">
              <GithubIcon className="w-6 h-6"/>
            </HeaderNavItem>
            <HeaderNavItem href="mailto:garrett@garrettmyrick.dev">
              <EnvelopeIcon className="w-6 h-6"/>
            </HeaderNavItem>
          </ul>
        </nav>
        <HeaderNavMenuButton
          className="md:hidden"
          onClick={() => setIsOverlayOpen(!isOverlayOpen)}
        />
      </header>
      <HeaderOverlay
        isOpen={isOverlayOpen}
        onIsOpenChange={setIsOverlayOpen}
      />
    </>
  );
}
'use client';

import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { HeaderNavItem } from "./header-nav-item";
import { HeaderNavMenuButton } from "./header-nav-menu-button";
import { LinkedinIcon } from "../icons/linkedin";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { GithubIcon } from "../icons/github";

export type HeaderOverlayProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onIsOpenChange: (isOpen: boolean) => void;
};

export function HeaderOverlay(props: HeaderOverlayProps) {
  const { className, isOpen, onIsOpenChange, ...divProps } = props;
  const portalParent = useRef<HTMLElement | undefined>();

  useEffect(() => {
    portalParent.current = window.document.body;
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (portalParent.current)
    return createPortal(
      <div
        className={clsx(
          "md:hidden fixed h-screen w-screen z-50", 
          "bg-slate-900 bg-opacity-70 backdrop-blur-[16px]",
          "flex flex-row items-center justify-between p-8",
          "transition-all duration-300 ease-in-out",
          isOpen ? "top-0 opacity-100" : "-top-full opacity-0",
        )}
        onClick={() => onIsOpenChange?.(!isOpen)}
        {...divProps}
      >
        <Link href="/">
          <h1 className="text-3xl font-bold text-green-300">GM</h1>
        </Link>
        <nav className={clsx(
          "block transition-all duration-300 ease-in-out",
        )}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center group/nav-list">
            <HeaderNavItem href="/" exact>About</HeaderNavItem>
            <HeaderNavItem href="/projects">Projects</HeaderNavItem>
            <HeaderNavItem href="/posts">Blog</HeaderNavItem>
          </ul>
          <div className="h-[1px] w-full bg-slate-700 my-6"/>
          <ul className="flex flex-row gap-4 items-center group/nav-list">
            <HeaderNavItem href="https://www.linkedin.com/in/garrettmk">
              <LinkedinIcon className="w-6 h-6"/>
            </HeaderNavItem>
            <HeaderNavItem href="Github">
              <GithubIcon className="w-6 h-6"/>
            </HeaderNavItem>
            <HeaderNavItem href="mailto:garrett@garrettmyrick.dev">
              <EnvelopeIcon className="w-6 h-6"/>
            </HeaderNavItem>
          </ul>
        </nav>
        <HeaderNavMenuButton
          className="md:hidden"
          onClick={() => onIsOpenChange?.(!isOpen)}
        />
      </div>,
      portalParent.current
    );
  else
    return null;
}
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes, useMemo } from "react";

export type SidebarItemProps = HTMLAttributes<HTMLLIElement> & {
  href: string;
  active?: boolean;
  exact?: boolean;
};

export default function SidebarItem(props: SidebarItemProps) {
  const { className, href, children, active, exact, ...liProps } = props;
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return active
      ? active
      : exact
        ? pathname === href
        : pathname.startsWith(href);
  }, [pathname, href, active, exact]);

  return (
    <li
      className={clsx(
        "mb-4 underline decoration-transparent decoration-4 underline-offset-4 text-center",
        "transition-[text-underline-offset] duration-300 hover:decoration-green-300 hover:underline-offset-8",
        isActive && "!decoration-green-300 underline-offset-4",
        className
      )}
      {...liProps}
    >
      <Link className="block" href={href}>{children}</Link>
    </li>
  );
}
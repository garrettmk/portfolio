"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes, useMemo } from "react";

export type SidebarMenuItemProps = HTMLAttributes<HTMLLIElement> & {
  href: string;
  active?: boolean;
  exact?: boolean;
};

export default function SidebarMenuItem(props: SidebarMenuItemProps) {
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
        "mb-4 underline decoration-transparent decoration-4 underline-offset-4",
        "transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:decoration-green-300 hover:underline-offset-8",
        isActive && "!decoration-green-300 underline-offset-4",
        className
      )}
      {...liProps}
    >
      <Link className="block" href={href}>{children}</Link>
    </li>
  );
}
'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes, useMemo } from "react";

export type HeaderNavItemProps = HTMLAttributes<HTMLLIElement> & {
  href: string;
  active?: boolean;
  exact?: boolean;
};

export function HeaderNavItem(props: HeaderNavItemProps) {
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
        "underline font-bold text-xl decoration-transparent decoration-4 underline-offset-4 text-slate-300",
        "transition-all duration-300 ease-in-out",
        "group-hover/nav-list:text-slate-500 hover:!text-slate-50 hover:decoration-green-300 hover:underline-offset-8",
        isActive && "!decoration-green-300 underline-offset-4 not:group-hover/nav-list:!text-slate-50",
        className
      )}
      {...liProps}
    >
      <Link className="block" href={href}>{children}</Link>
    </li>
  );
}
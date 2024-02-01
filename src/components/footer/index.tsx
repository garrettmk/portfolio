import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLDivElement>;

export function Footer(props: FooterProps) {
  const { className, ...divProps } = props;

  return (
    <footer 
      className={clsx(
        "flex flex-col items-center justify-center pt-24 pb-12",
        // "backdrop-blur-[2px] backdrop-brightness-[.85]",
        // "border-t border-slate-800", 
        className
      )} 
      {...divProps}
    >
      <span className="block text-sm text-gray-400">
        © 2021 Garrett Myrick. All rights reserved.
      </span>
      <span className="mt-2 text-sm text-gray-400">
        Background:&nbsp;
        <Link 
          href="https://www.vecteezy.com/free-vector/pattern"
          className="text-green-300 underline decoration-dotted"
        >
          Pattern Vectors by Vecteezy
        </Link>
      </span>
    </footer>
  );
}
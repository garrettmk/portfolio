import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";

export type HeroSubtitleProps = HTMLAttributes<HTMLHeadingElement> & {
  href?: string;
};

export default function HeroSubtitle(props: HeroSubtitleProps) {
  const { className, children, href, ...headingProps } = props;

  const subtitle = (
    <h2 className={clsx("block text-xl font-bold text-green-300", className)} {...headingProps}>
      {children}
    </h2>
  );

  if (href)
    return (
      <Link href={href}>
        {subtitle}
      </Link>
    );
  else
    return subtitle;
}
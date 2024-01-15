import clsx from "clsx";
import { HTMLAttributes } from "react";

export type HeroSubtitleProps = HTMLAttributes<HTMLSpanElement>;

export default function HeroSubtitle(props: HeroSubtitleProps) {
  const { className, children, ...spanProps } = props;

  return (
    <span className={clsx("block text-xl font-bold text-green-300 mb-2", className)} {...spanProps}>
      {children}
    </span>
  );
}
import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import HeroTitle, { type HeroTitleProps } from "./hero-title";
import HeroSubtitle, { type HeroSubtitleProps } from "./hero-subtitle";

export type HeroProps = HTMLAttributes<HTMLDivElement>;

export function Hero(props: HeroProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        'min-h-80 px-12 py-12 md:py-24 grid content-center place-content-center',
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        "border-b border-slate-800",
        className
      )} 
      {...divProps}
    >
      {children}
    </div>
  );
}

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
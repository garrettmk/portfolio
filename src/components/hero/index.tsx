import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import HeroTitle, { type HeroTitleProps } from "./hero-title";
import HeroSubtitle, { type HeroSubtitleProps } from "./hero-subtitle";

export type HeroProps = HTMLAttributes<HTMLDivElement>;

export default function Hero(props: HeroProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx('h-80 grid content-center place-content-center', className)} 
      {...divProps}
    >
      {children}
    </div>
  );
}

Hero.Title = HeroTitle;
export { HeroTitle, HeroTitleProps };

Hero.Subtitle = HeroSubtitle;
export { HeroSubtitle, HeroSubtitleProps };
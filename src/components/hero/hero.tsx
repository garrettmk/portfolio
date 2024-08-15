import clsx from "clsx";
import { HTMLAttributes } from "react";
import HeroSubtitle from "./hero-subtitle";
import HeroTitle from "./hero-title";

export type HeroProps = HTMLAttributes<HTMLDivElement>;

export function Hero(props: HeroProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        'min-h-80 p-6 md:p-12 md:py-24 grid content-center place-content-center',
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        "border-b border-slate-800",
        className
      )} 
      {...divProps}
    >
      <div className="max-w-2xl mx-12">
        {children}
      </div>
    </div>
  );
}

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
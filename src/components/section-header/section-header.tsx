import clsx from "clsx";
import { HTMLAttributes } from "react";
import { SectionHeaderTitle } from './section-header-title';
import { SectionHeaderSubtitle } from "./section-header-subtitle";

export type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "left" | "right";
};

export function SectionHeader(props: SectionHeaderProps) {
  const { className, children, orientation, ...divProps } = props;

  return (
    <header
      className={clsx(
        "flex flex-row", 
        // orientation === "left" ? "justify-start" : "justify-end",
        className
      )}
      {...divProps}
    >
      <div className={clsx(
        "grow shrink min-w-12",
        "flex justify-end",
      )}>
        <div className={clsx(
          "border-slate-800 border-y",
          "backdrop-blur-[2px] backdrop-brightness-[.85]",
          orientation === 'left' 
            ? "basis-full"
            : "basis-full lg:basis-1/2 lg:border-l lg:rounded-l-xl",
        )}/>
      </div>
      <div className={clsx(
        "basis-full max-w-2xl py-12",
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        "border-slate-800 border-y",
        orientation === 'left' 
          ? "text-right"
          : "text-left",
      )}>
        {children}
      </div>
      <div className={clsx(
        "grow shrink min-w-12",
        "flex justify-start",
      )}>
        <div className={clsx(
          "border-slate-800 border-y",
          "backdrop-blur-[2px] backdrop-brightness-[.85]",
          orientation === 'left' 
            ? "basis-full lg:basis-1/2 lg:border-r lg:rounded-r-xl"
            : "basis-full",
        )}/>
      </div>
    </header>
  );
}

SectionHeader.Title = SectionHeaderTitle;
SectionHeader.Subtitle = SectionHeaderSubtitle;
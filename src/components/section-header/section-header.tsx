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
        "flex flex-row mb-16", 
        orientation === "left" ? "justify-start" : "justify-end",
        className
      )}
      {...divProps}
    >
      <div className={clsx(
        "flex grow shrink",
        "border-slate-800 border-y",
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        orientation === 'left' 
          ? ""
          : "ml-8 lg:ml-36 border-l rounded-l-xl",
      )}/>
      <div className={clsx(
        "basis-full max-w-4xl",
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        "border-slate-800 border-y p-16",
        "mr-auto",
        orientation === 'left' 
          ? "text-right"
          : "text-left",
      )}>
        {children}
      </div>
      <div className={clsx(
        "grow shrink",
        "border-slate-800 border-y",
        "backdrop-blur-[2px] backdrop-brightness-[.85]",
        orientation === 'left' 
          ? "mr-8 lg:mr-36 border-r rounded-r-xl"
          : "",
      )}/>
    </header>
  );
}

SectionHeader.Title = SectionHeaderTitle;
SectionHeader.Subtitle = SectionHeaderSubtitle;
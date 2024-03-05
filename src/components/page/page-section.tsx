import clsx from "clsx";
import { HTMLAttributes } from "react";
import { PageSectionSubtitle } from "./page-section-subtitle";
import { PageSectionTitle } from "./page-section-title";

export type PageSectionProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "left" | "right";
};

export function PageSection(props: PageSectionProps) {
  const { className, children, orientation, ...divProps } = props;

  return (
    <header
      className={clsx(
        "flex flex-row my-12", 
        className
      )}
      {...divProps}
    >
      <div className={clsx(
        "grow shrink min-w-24",
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
        "grow shrink min-w-24",
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

PageSection.Title = PageSectionTitle;
PageSection.Subtitle = PageSectionSubtitle;
import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PageSectionSubtitleProps = HTMLAttributes<HTMLHeadingElement>;

export function PageSectionSubtitle(props: PageSectionSubtitleProps) {
  const { className, ...headingProps } = props;

  return (
    <h2 
      className={clsx(
        "text-xl font-bold text-green-300 mb-2",
        className,
      )}
      {...headingProps}
    />
  );
}
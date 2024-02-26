import clsx from "clsx";
import { HTMLAttributes } from "react";

export type SectionHeaderSubtitleProps = HTMLAttributes<HTMLHeadingElement>;

export function SectionHeaderSubtitle(props: SectionHeaderSubtitleProps) {
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
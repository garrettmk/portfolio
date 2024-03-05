import clsx from "clsx";
import { HTMLAttributes } from "react";

/**
 * The title of a TimelineDuration
 */
export type TimelineDurationTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function TimelineDurationTitle(props: TimelineDurationTitleProps) {
  const { className, children, ...headingProps } = props;

  return (
    <h3
      className={clsx(
        'text-lg font-bold text-slate-100',
        className
      )}
      {...headingProps}
    >
      {children}
    </h3>
  );
}

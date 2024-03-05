import clsx from "clsx";
import { HTMLAttributes } from "react";


/**
 * The subtitle of a TimelineDuration
 */
export type TimelineDurationSubtitleProps = HTMLAttributes<HTMLHeadingElement>;

export function TimelineDurationSubtitle(props: TimelineDurationSubtitleProps) {
  const { className, children, ...headingProps } = props;

  return (
    <h4
      className={clsx(
        'text-sm font-bold text-slate-400',
        'transition-all duration-300 ease-in-out',
        className
      )}
      {...headingProps}
    >
      {children}
    </h4>
  );
}

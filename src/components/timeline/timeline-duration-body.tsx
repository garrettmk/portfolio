import clsx from "clsx";
import { HTMLAttributes } from "react";

/**
 * The body text of a TimelineDuration. Collapsed and transparent by default,
 * but expands and becomes opaque when the TimelineDuration is hovered.
 */
export type TimelineDurationBodyProps = HTMLAttributes<HTMLDivElement> & {
  quiet?: boolean;
  open?: boolean;
};

export function TimelineDurationBody(props: TimelineDurationBodyProps) {
  const { open, quiet, className, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        'text-md max-h-0 mt-0 opacity-0',
        quiet ? 'text-slate-400' : 'text-slate-50',
        'transition-all duration-300 ease-in-out',

        // When the timeline duration is hovered, expand and become opaque
        'group-hover/timeline-item:max-h-[999px] group-hover/timeline-item:opacity-100 group-hover/timeline-item:mt-4',
        open && 'max-h-[100px] opacity-100 mt-4',
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}

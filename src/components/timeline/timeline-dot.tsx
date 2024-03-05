import clsx from "clsx";
import { HTMLAttributes } from "react";


/**
 * TimelineDot represents a point in time on the timeline. The dot can be
 * either open or closed, and can contain any content (but is meant to contain
 * text, like a date).
 */

export type TimelineDotProps = HTMLAttributes<HTMLLIElement> & {
  open?: boolean;
};

export function TimelineDot(props: TimelineDotProps) {
  const { open, className, children, ...liProps } = props;

  return (
    <li
      className={clsx(
        'timeline-dot',
        'relative h-4 pl-6 text-sm font-bold text-slate-400',
        'transition-all duration-300 ease-in-out',
        
        // When the timeline is hovered, fade all dots
        'group-hover/timeline:opacity-50',

        // If this dot is hovered, highlight it
        'hover:!opacity-100',
        
        // If the next item is a duration and is hovered, highlight the current dot
        'has-[+li.timeline-duration:hover]:!opacity-100',
        
        className
      )}
      {...liProps}
    >
      <div 
        className={clsx(
          'w-4 h-4 rounded-full',
          open ? "border-2 border-green-300" : "bg-green-300",
          // Center the dot on the left edge
          "absolute top-1/2 left-0 translate-x-[-50%] translate-y-[-50%]",
        )}
      />
        {children}
    </li>
  );
}

import clsx from "clsx";
import { HTMLAttributes } from "react";
import { TimelineDurationBody } from "./timeline-duration-body";
import { TimelineDurationSubtitle } from "./timeline-duration-subtitle";
import { TimelineDurationTitle } from "./timeline-duration-title";

/**
 * TimelineDuration is a duration of time on the timeline. It can be either
 * a thin line (emphasis=false), a thick line (emphasis=true), or a dotted
 * line (quiet=true).
 */
export type TimelineDurationProps = HTMLAttributes<HTMLLIElement> & {
  emphasis?: boolean;
  quiet?: boolean;
  open?: boolean;
};

export function TimelineDuration(props: TimelineDurationProps) {
  const { open, quiet, className, emphasis, children, ...divProps } = props;

  return (
    <li
      className={clsx(
        'relative py-6 text-slate-400',
        'transition-all duration-300 ease-in-out',
        'timeline-duration group/timeline-item',    // Used as selectors by other components
        'hover:py-12',                              // Expand a bit when hovered
        '[&+li.timeline-dot]:hover:!opacity-100',   // If followed by a dot, highlight the dot when hovered
        open && 'py-12',
        className
      )}
      {...divProps}
    >
      <div className={clsx(
        'absolute w-4 top-0 h-full border-green-300',
        emphasis ? 'border-l-4 left-[-2px]' : 'border-l left-0',
        quiet ? 'border-dotted' : '',
        'transition-all duration-300 ease-in-out',
        'group-hover/timeline:opacity-50 group-hover/timeline-item:!opacity-100',
      )}/>
      <div className={clsx(
        emphasis ? 'ml-[2px]' : 'ml-[1px]',
        'px-6 py-6 border-r border-t border-b border-transparent rounded-r-xl',
        'transition-all duration-300 ease-in-out',
        'group-hover/timeline:[filter:opacity(.5)]', 
        'group-hover/timeline-item:![filter:opacity(1)]',
        'group-hover/timeline-item:backdrop-brightness-[.85]', 
        'group-hover/timeline-item:backdrop-blur-[2px]',
        'group-hover/timeline-item:border-slate-800',
        open && 'backdrop-brightness-[.85] backdrop-blur-[2px] !border-slate-800 border-t border-r border-b rounded-r-xl',
      )}>
        {children}
      </div>
    </li>
  );
}

TimelineDuration.Title = TimelineDurationTitle;
TimelineDuration.Subtitle = TimelineDurationSubtitle;
TimelineDuration.Body = TimelineDurationBody;

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

/**
 * The body text of a TimelineDuration. Collapsed and transparent by default,
 * but expands and becomes opaque when the TimelineDuration is hovered.
 */
export type TimelineDurationBodyProps = HTMLAttributes<HTMLDivElement> & {
  quiet?: boolean;
};

export function TimelineDurationBody(props: TimelineDurationBodyProps) {
  const { quiet, className, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        'text-md max-h-0 mt-0 opacity-0',
        quiet ? 'text-slate-400' : 'text-slate-50',
        'transition-all duration-300 ease-in-out',

        // When the timeline duration is hovered, expand and become opaque
        'group-hover/timeline-item:max-h-[100px] group-hover/timeline-item:opacity-100 group-hover/timeline-item:mt-4',
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}

/**
 * TimelineDuration is a duration of time on the timeline. It can be either
 * a thin line (emphasis=false), a thick line (emphasis=true), or a dotted
 * line (quiet=true).
 */
export type TimelineDurationProps = HTMLAttributes<HTMLLIElement> & {
  emphasis?: boolean;
  quiet?: boolean;
};

export function TimelineDuration(props: TimelineDurationProps) {
  const { quiet, className, emphasis, children, ...divProps } = props;

  return (
    <li
      className={clsx(
        'relative py-6 text-slate-400',
        'transition-all duration-300 ease-in-out',
        'timeline-duration group/timeline-item',    // Used as selectors by other components
        'hover:py-12',                              // Expand a bit when hovered
        '[&+li.timeline-dot]:hover:!opacity-100',   // If followed by a dot, highlight the dot when hovered
        
        className
      )}
      {...divProps}
    >
      <div className={clsx(
        'absolute w-4 top-0 h-full border-green-300',
        emphasis ? 'border-l-4 left-[-2px]' : 'border-l left-0',
        quiet ? 'border-dotted' : '',
        'transition-all duration-300 ease-in-out',
        'group-hover/timeline:opacity-50 group-hover/timeline-item:!opacity-100'
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
      )}>
        {children}
      </div>
    </li>
  );
}

TimelineDuration.Title = TimelineDurationTitle;
TimelineDuration.Subtitle = TimelineDurationSubtitle;
TimelineDuration.Body = TimelineDurationBody;


/**
 * Timeline is a list of TimelineDots and TimelineDurations
 */
export type TimelineProps = HTMLAttributes<HTMLOListElement>

export function Timeline(props: TimelineProps) {
  const { className, children, ...listProps } = props;

  return (
    <ol 
      className={clsx(
        'group/timeline',
        className
      )} 
      {...listProps}
    >
      {children}
    </ol>
  );
}

Timeline.Dot = TimelineDot;
Timeline.Duration = TimelineDuration;
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { TimelineDot } from "./timeline-dot";
import { TimelineDuration } from "./timeline-duration";



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
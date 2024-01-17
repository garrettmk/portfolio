import clsx from "clsx";
import { HTMLAttributes } from "react";
import TimelineItem, { type TimelineItemProps } from "./timeline-item";

export type TimelineProps = HTMLAttributes<HTMLOListElement>

export default function Timeline(props: TimelineProps) {
  const { className, children, ...listProps } = props;

  return (
    <ol 
      className={clsx(
        'group',
        className
      )} 
      {...listProps}
    >
      {children}
    </ol>
  );
}

Timeline.Item = TimelineItem;
export { TimelineItem, type TimelineItemProps };
import clsx from "clsx";
import { HTMLAttributes } from "react";


export type TimelineDotProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
};

export function TimelineDot(props: TimelineDotProps) {
  const { className, open, children, ...divProps } = props;

  return (
    <div
      className={clsx('relative h-4 pl-6 text-sm font-bold text-slate-400', className)}
      {...divProps}
    >
      <div 
        className={clsx(
          "w-4 h-4 absolute top-1/2 left-0 translate-x-[-50%] translate-y-[-50%] rounded-full",
          open ? "border-2 border-green-300" : "bg-green-300"
        )}
        {...divProps}
      />
        {children}
    </div>
  );
}



export type TimelineDurationProps = HTMLAttributes<HTMLDivElement> & {
  emphasis?: boolean;
  quiet?: boolean;
};

export function TimelineDuration(props: TimelineDurationProps) {
  const { quiet, className, emphasis, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        'border-green-300 pl-6 py-16 text-slate-400 transition-all duration-300 ease-in-out hover:py-24',
        emphasis ? 'border-l-4 translate-x-[-2px]' : 'border-l',
        quiet ? 'border-dotted' : '',
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}


export type TimelineItemTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function TimelineItemTitle(props: TimelineItemTitleProps) {
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

export type TimelineItemSubtitleProps = HTMLAttributes<HTMLHeadingElement>;

export function TimelineItemSubtitle(props: TimelineItemSubtitleProps) {
  const { className, children, ...headingProps } = props;

  return (
    <h4
      className={clsx(
        'text-sm font-bold text-slate-400',
        className
      )}
      {...headingProps}
    >
      {children}
    </h4>
  );
}


export type TimelineItemBodyProps = HTMLAttributes<HTMLDivElement> & {
  quiet?: boolean;
};

export function TimelineItemBody(props: TimelineItemBodyProps) {
  const { quiet, className, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        'text-md pt-4',
        quiet ? 'text-slate-400' : 'text-slate-50',
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}


export type TimelineItemProps = HTMLAttributes<HTMLLIElement>;

export default function TimelineItem(props: TimelineItemProps) {
  const { className, children, ...listItemProps } = props;

  return (
    <li 
      className={clsx(
        'transition-all duration-300 ease-in-out group-hover:opacity-50 hover:!opacity-100',
        className
      )}
      {...listItemProps}
    >
      {children}
    </li>
  );
}

TimelineItem.Dot = TimelineDot;
TimelineItem.Duration = TimelineDuration;
TimelineItem.Title = TimelineItemTitle;
TimelineItem.Subtitle = TimelineItemSubtitle;
TimelineItem.Body = TimelineItemBody;
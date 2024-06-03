import clsx from "clsx";
import { PanelTitle } from "./panel-title";
import { PanelHeader } from "./panel-header";
import { PanelSubtitle } from "./panel-subtitle";
import { PanelContent } from "./panel-content";

export type PanelProps<T extends keyof JSX.IntrinsicElements = 'div'> = JSX.IntrinsicElements[T] & {
  as?: T
};

export function Panel<T extends keyof JSX.IntrinsicElements = 'div'>(props: PanelProps<T>) {
  const { as: Tag = 'div', className, ...rest } = props;
  
  const classNames = clsx(
    "-mx-6 md:-mx-12",
    "border border-slate-800 rounded-xl",
    "backdrop-brightness-[.85] backdrop-blur-[2px]",
    "text-lg",
    className
  );

  return (
    // @ts-ignore TS chokes on this
    <Tag className={classNames} {...rest}/>
  );
}


Panel.Header = PanelHeader;
Panel.Title = PanelTitle;
Panel.Subtitle = PanelSubtitle;
Panel.Content = PanelContent;

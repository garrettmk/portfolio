import clsx from "clsx";

export type PanelHeaderProps<T extends keyof JSX.IntrinsicElements = 'div'> = JSX.IntrinsicElements[T] & {
  as?: T
  shade?: boolean
};

export function PanelHeader<T extends keyof JSX.IntrinsicElements = 'div'>(props: PanelHeaderProps<T>) {
  const { as: Tag = 'div', shade, className, ...rest } = props;

  const classNames = clsx(
    "p-6 md:p-12 rounded-t-xl",
    !shade && "[&~*]:pt-0",
    shade && "bg-slate-800",
    className
  );

  return (
    // @ts-ignore TS chokes on this
    <Tag className={classNames} {...rest}/>
  );
}
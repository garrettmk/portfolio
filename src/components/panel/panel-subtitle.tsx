import clsx from "clsx";

export type PanelSubtitleProps<T extends keyof JSX.IntrinsicElements = 'h3'> = JSX.IntrinsicElements[T] & {
  as?: T
};

export function PanelSubtitle<T extends keyof JSX.IntrinsicElements = 'h3'>(props: PanelSubtitleProps<T>) {
  const { as: Tag = 'h3', className, ...rest } = props;
  const classNames = clsx(
    "text-2xl text-green-300",
    className
  );

  return (
    // @ts-ignore TS chokes on this
    <Tag className={classNames} {...rest} />
  );
}
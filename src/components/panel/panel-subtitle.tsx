import clsx from "clsx";

export type PanelSubtitleProps<T extends keyof JSX.IntrinsicElements = 'h3'> = JSX.IntrinsicElements[T] & {
  as?: T
};

export function PanelSubtitle<T extends keyof JSX.IntrinsicElements = 'h3'>(props: PanelSubtitleProps<T>) {
  const { as: Tag = 'h3', className, ...rest } = props;

  return (
    // @ts-ignore TS chokes on this
    <Tag
      className={clsx(
        "text-2xl text-green-300",
        className
      )}
      {...rest}
    />
  );
}
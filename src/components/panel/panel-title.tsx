import clsx from "clsx";

export type PanelTitleProps<T extends keyof JSX.IntrinsicElements = 'h2'> = JSX.IntrinsicElements[T] & {
  as?: T
};

export function PanelTitle(props: PanelTitleProps) {
  const { as: Tag = 'h2', className, ...rest } = props;

  return (
    <Tag 
      className={clsx(
        "text-white text-4xl font-bold",
        className
      )}
      {...rest}
    />
  );
}
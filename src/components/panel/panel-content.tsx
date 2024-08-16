import clsx from 'clsx';

export type PanelContentProps<T extends keyof JSX.IntrinsicElements = 'div'> = JSX.IntrinsicElements[T] & {
  as?: T
};

export function PanelContent<T extends keyof JSX.IntrinsicElements = 'div'>(props: PanelContentProps<T>) {
  const { as: Tag = 'div', className, ...rest } = props;

  const classNames = clsx(
    "p-6 md:p-12",
    "text-lg",
    className
  );

  return (
    // @ts-ignore TS chokes on this
    <Tag className={classNames} {...rest}/>
  );
}
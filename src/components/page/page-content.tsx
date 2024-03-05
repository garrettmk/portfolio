import clsx from "clsx";
import { JSX } from "react";

export type PageContentProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  as?: T
} & JSX.IntrinsicElements[T];

// export type PageContentProps = HTMLAttributes<HTMLDivElement>;

export function PageContent<T extends keyof JSX.IntrinsicElements = 'div'>(props: PageContentProps<T>) {
  const { as: Tag = 'div', className, ...otherProps } = props;

  return (
    // @ts-ignore TS chokes on this
    <Tag className={clsx("max-w-2xl self-center my-12 mx-24 space-y-12", className)} {...otherProps}/>
  )
}
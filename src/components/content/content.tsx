import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ContentProps = HTMLAttributes<HTMLDivElement>;

export function Content(props: ContentProps) {
  const { className, children, ...divProps } = props;

  return (
    <article
      className={clsx(
        "max-w-4xl py-12 md:py-24 px-16 md:px-24 mx-auto",
        className
      )}
      {...divProps}
    >
      {children}
    </article>
  );
}
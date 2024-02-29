import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ContentProps = HTMLAttributes<HTMLDivElement>;

export function Content(props: ContentProps) {
  const { className, children, ...divProps } = props;

  return (
    <article
      className={clsx(
        "max-w-2xl mx-12 md:mx-auto",
        "my-24",
        className
      )}
      {...divProps}
    >
      {children}
    </article>
  );
}
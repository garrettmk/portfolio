import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ProjectBodyProps = HTMLAttributes<HTMLHeadingElement>;

export function ProjectBody(props: ProjectBodyProps) {
  const { className, children, ...divProps } = props;

  return (
    <div
      className={clsx(
        "text-md mt-8",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
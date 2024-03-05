import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ProjectRootProps = HTMLAttributes<HTMLDivElement>;


export function ProjectRoot(props: ProjectRootProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
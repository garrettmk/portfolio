import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ProjectTechProps = HTMLAttributes<HTMLDivElement>;


export function ProjectTech(props: ProjectTechProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        "flex flex-row justify-start space-x-4 text-sm text-green-300",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
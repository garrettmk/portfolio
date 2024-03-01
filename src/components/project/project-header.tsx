import clsx from "clsx";
import { HTMLAttributes } from "react";
import { ProjectTitle } from "./project-title";
import { ProjectLinks } from "./project-links";
import { ProjectTech } from "./project-tech";

export type ProjectHeaderProps = HTMLAttributes<HTMLDivElement>;

export function ProjectHeader(props: ProjectHeaderProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        "flex justify-between items-center space-x-6",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}

ProjectHeader.Title = ProjectTitle;
ProjectHeader.Links = ProjectLinks;
ProjectHeader.Tech = ProjectTech;
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { ProjectMeta } from "../../lib";
import { Project } from "../project/project";

export type ProjectListProps = HTMLAttributes<HTMLUListElement> & {
  projects: ProjectMeta[];
}

export function ProjectList(props: ProjectListProps) {
  const { className, projects, ...ulProps } = props;

  return (
    <ul className={clsx("relative flex flex-col space-y-12", className)} {...ulProps}>
      {projects.map(project => (
        <Project
          as='li'
          key={project.slug}
          project={project}
        />
      ))}
    </ul>
  );
}
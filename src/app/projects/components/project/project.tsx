import React from "react";
import { ProjectRootProps, ProjectRoot } from "./project-root";
import { ProjectHeader } from "./project-header";
import { ProjectLinks } from "./project-links";
import { ProjectBody } from "./project-body";
import Link from "next/link";
import { ProjectMeta } from "../../lib";

export type ProjectProps = Omit<ProjectRootProps, 'children'> & {
  project: ProjectMeta
}

export function Project(props: ProjectProps) {
  const { project, ...rootProps } = props;

  return (
    <ProjectRoot {...rootProps}>
      <ProjectHeader>
        <Link href={`/projects/${project.slug}`}>
          <ProjectHeader.Title>{project.title}</ProjectHeader.Title>
        </Link>
        <ProjectHeader.Links>
          {project.urls.docs && (
            <ProjectHeader.Links.Link href={project.urls.docs} target='_blank'>Docs</ProjectHeader.Links.Link>
          )}
          {project.urls.demo && (
            <ProjectHeader.Links.Link href={project.urls.demo} target='_blank'>Demo</ProjectHeader.Links.Link>
          )}
          {project.urls.source && (
            <ProjectHeader.Links.Link href={project.urls.source} target='_blank'>Repo</ProjectHeader.Links.Link>
          )}
        </ProjectHeader.Links>
      </ProjectHeader>
      <ProjectHeader.Tech>
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </ProjectHeader.Tech>
      <ProjectBody className="w-full">
        {project.excerpt}
      </ProjectBody>
    </ProjectRoot>
  );
}
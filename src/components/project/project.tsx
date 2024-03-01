import { Project } from "contentlayer/generated";
import { ProjectRootProps, ProjectRoot } from "./project-root";
import { ProjectHeader } from "./project-header";
import { ProjectLinks } from "./project-links";
import { ProjectBody } from "./project-body";

export type ProjectProps = Omit<ProjectRootProps, 'children'> & {
  project: Project
}

export function Project(props: ProjectProps) {
  const { project, ...rootProps } = props;

  return (
    <ProjectRoot {...rootProps}>
      <ProjectHeader>
        <ProjectHeader.Title>{project.title}</ProjectHeader.Title>
        <ProjectHeader.Links>
          {project.demoUrl && (
            <ProjectHeader.Links.Link href={project.demoUrl} target='_blank'>Demo</ProjectHeader.Links.Link>
          )}
          {project.githubUrl && (
            <ProjectHeader.Links.Link href={project.githubUrl} target='_blank'>Repo</ProjectHeader.Links.Link>
          )}
        </ProjectHeader.Links>
      </ProjectHeader>
      <ProjectHeader.Tech>
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </ProjectHeader.Tech>
      <ProjectBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
        diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
        urna. Suspendisse eros nunc, gravida in sapien in, ultrices
        ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
        Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
      </ProjectBody>
    </ProjectRoot>
  );
}
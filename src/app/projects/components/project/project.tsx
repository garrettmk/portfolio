import { Panel, PanelProps } from "@/components/panel";
import { ProjectMeta } from "../../lib";
import Link from "next/link";

export type ProjectProps<T extends keyof JSX.IntrinsicElements = 'div'> = PanelProps<T> & {
  project: ProjectMeta
}

export function Project<T extends keyof JSX.IntrinsicElements>(props: ProjectProps<T>) {
  const { project, ...panelProps } = props;

  return (
    // @ts-ignore TS chokes on this
    <Panel {...panelProps}>
      <Link href={`/projects/${project.slug}`}>
        <Panel.Header>
          <Panel.Title>
            {project.title}
          </Panel.Title>
          <Panel.Subtitle>
            {project.tech.join(' | ')}
          </Panel.Subtitle>
        </Panel.Header>
        <Panel.Content>
          {project.excerpt}
          <p className="mt-4 text-sm text-green-300 underline decoration-dotted underline-offset-4">
            Read more...
          </p>
        </Panel.Content>
      </Link>
    </Panel>
  );
}

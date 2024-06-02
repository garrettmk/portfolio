import { Hero } from "@/components/hero";
import { Page } from '@/components/page';
import { ProjectList } from './components/project-list';
import { getAllMetas } from "./lib";
import { Panel } from "@/components/panel";

export default async function ProjectsPage() {
  const { data: projects } = await getAllMetas();

  return (
    <Page>
      <Hero>
        <Hero.Title>Projects</Hero.Title>
      </Hero>

      <Page.Content>
        <Page.Paragraph>
          I am a paragraph.
        </Page.Paragraph>
        <Panel>
          <Panel.Title>Projects</Panel.Title>
          I am a panel.
        </Panel>
        <ProjectList projects={projects} />
      </Page.Content>
    </Page>
  );
}

import { Hero } from "@/components/hero";
import { Page } from '@/components/page';
import { ProjectList } from './components/project-list';
import { getAllMetas } from "./lib";

export default async function ProjectsPage() {
  const { data: projects } = await getAllMetas();

  return (
    <Page>
      <Hero>
        <Hero.Title>Projects</Hero.Title>
      </Hero>

      <Page.Content>
        <Page.Paragraph className="mb-24">
          Here you&apos;ll find some of the projects I&apos;ve worked on. This section is still under construction - currently these are all projects
          I&apos;ve worked on in my free time, so I&apos;m going back and documenting things as I have time (ha!).
        </Page.Paragraph>
        <ProjectList projects={projects}/>
      </Page.Content>
    </Page>
  );
}

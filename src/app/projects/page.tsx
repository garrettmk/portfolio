import { Page } from '@/components/page';
import { Hero } from "@/components/hero";
import { PanelList } from "@/components/panel-list";
import { Project } from "./components/project";
import { getAllMetas } from "./lib";

export default async function ProjectsPage() {
  const { data: projects } = await getAllMetas();

  return (
    <Page>
      <Hero>
        <Hero.Title>Projects</Hero.Title>
      </Hero>

      <Page.Content>
        <PanelList className="-m-12">
          {projects.map(project => (
            <PanelList.Item 
              key={project.slug}
              className="p-12"
            >
              <Project 
                className="max-w-2xl"
                project={project} 
              />
            </PanelList.Item>
          ))}
        </PanelList>
      </Page.Content>
    </Page>
  );
}

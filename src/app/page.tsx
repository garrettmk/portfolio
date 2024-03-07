import { Project } from "@/app/projects/components/project";
import { Hero } from "@/components/hero";
import { Page } from "@/components/page";
import { PanelList } from "@/components/panel-list";
import Link from "next/link";
import { getAllMetas as getAllProjectMetas } from "./projects/lib";
import { getAllMetas as getAllPostMetas } from "./posts/lib";
import { PostList } from "./posts/components/post-list";

export default async function Home() {
  const { data: projects } = await getAllProjectMetas({ limit: 3 });
  const { data: posts } = await getAllPostMetas({ limit: 3 });

  return (
    <Page>
      <Hero>
        <Hero.Subtitle>hi! my name is</Hero.Subtitle>
        <Hero.Title>Garrett Myrick</Hero.Title>
        <Hero.Subtitle className="text-right">i build things</Hero.Subtitle>
      </Hero>

      <Page.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
          urna. Suspendisse eros nunc, gravida in sapien in, ultrices
          ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
          Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
          urna. Suspendisse eros nunc, gravida in sapien in, ultrices
          ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
          Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
      </Page.Content>

      <Page.Section>
        <Page.Section.Subtitle>
          check out my
        </Page.Section.Subtitle>
        <Page.Section.Title>
          Projects
        </Page.Section.Title>
      </Page.Section>
      
      <Page.Content>
        <PanelList className="-m-12 space-y-12">
          {projects.map(project => (
            <PanelList.Item 
              key={project.slug}
              className="p-12"
            >
              <Project project={project} />
            </PanelList.Item>
          ))}
        </PanelList>
        <Link className="block pt-12 font-bold text-lg underline text-green-300" href="/projects">All Projects...</Link>
      </Page.Content>

      <Page.Section orientation="left">
        <Page.Section.Subtitle>
          read some
        </Page.Section.Subtitle>
        <Page.Section.Title>
          Posts
        </Page.Section.Title>
      </Page.Section>
      
      <Page.Content>
        <PostList 
          className="-m-12 space-y-12"
          posts={posts}
        />
        <Link className="block pt-12 font-bold text-lg underline text-green-300" href="/posts">All Posts...</Link>
      </Page.Content>

      <Page.Section>
        <Page.Section.Subtitle>
          how to
        </Page.Section.Subtitle>
        <Page.Section.Title>
          Contact Me
        </Page.Section.Title>
      </Page.Section>
      
      <Page.Content as='p'>
        This is coming soon!
      </Page.Content>
    </Page>
  );
}

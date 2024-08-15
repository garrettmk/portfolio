import { Hero } from "@/components/hero";
import { Page } from "@/components/page";
import Link from "next/link";
import { PostList } from "./posts/components/post-list";
import { getAllMetas as getAllPostMetas } from "./posts/lib";
import { ProjectList } from "./projects/components/project-list";
import { getAllMetas as getAllProjectMetas } from "./projects/lib";
import { Panel } from "@/components/panel";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { GithubIcon } from "@/components/icons/github";
import { ExternalLinkIcon } from "@/components/icons/external-link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

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
        <Page.Paragraph>
          <strong>Hi!</strong> My name is Garrett, and I&apos;m a software engineer based in beautiful Bend, Oregon. I currently work for a large dental company,
          building analytics software to help dentists run their practices more efficiently. I&apos;m passionate about building software that helps people, and I&apos;m always
          looking for new opportunities to learn and grow as an engineer.
        </Page.Paragraph>
        <Page.Paragraph>
          Here you&apos;ll find some of the projects I&apos;ve worked on, as well as some of my thoughts on software development and other topics. Feel free to reach out if you have
          any questions or just want to chat!
        </Page.Paragraph>
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
        <ProjectList projects={projects} />
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
        <PostList posts={posts}/>
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
      
      <Page.Content className="w-full">
        <Panel id="contact">
          <Panel.Content className="flex flex-row items-center justify-center gap-12 underline decoration-dotted underline-offset-4">
            <a className="flex flex-row items-center gap-3" href="https://www.linkedin.com/in/garrettmk" target="_blank">
              <LinkedinIcon 
                className="w-8 h-8 text-green-300"
              />
              LinkedIn
              <ExternalLinkIcon className="w-4 h-4"/>
            </a>
            <a className="flex flex-row items-center gap-3" href="https://github.com/garrettmk" target="_blank">
              <GithubIcon className="w-8 h-8 text-green-300"/>
              GitHub
              <ExternalLinkIcon className="w-4 h-4"/>
            </a>
            <a className="flex flex-row items-center gap-3" href="mailto:garrett@garrettmyrick.dev" target="_blank">
              <EnvelopeIcon className="w-8 h-8 text-green-300"/>
              Email
              <ExternalLinkIcon className="w-4 h-4"/>
            </a>
          </Panel.Content>
        </Panel>
      </Page.Content>
    </Page>
  );
}

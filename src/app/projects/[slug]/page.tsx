import { Hero } from "@/components/hero";
import { MDX } from "@/components/mdx";
import { Page } from "@/components/page";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getAllContentSlugs, getContent } from "../lib";
import { Panel } from "@/components/panel";
import { CodeBracketIcon, DocumentTextIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { ExternalLinkIcon } from "@/components/icons/external-link";

export async function generateStaticParams() {
  const contentSlugs = getAllContentSlugs();
  return contentSlugs.map(slug => ({ slug }));
}

export default async function ProjectPage(args: { 
  params: {
    slug: string;
  }
}) {
  const { params: { slug } } = args;
  const { code, meta } = await getContent(slug);
  
  return (
    <Page className="flex flex-col">
      <Hero>
        <Hero.Subtitle href="/projects" className="flex flex-row items-center gap-2">
          <ChevronLeftIcon className="w-6 h-6 mb-1"/> All Projects
        </Hero.Subtitle>
        <Hero.Title>
          {meta.title}
        </Hero.Title>
        <Hero.Subtitle className="flex flex-row space-x-4 justify-end">
          {meta.tech.map(tech => (
            <span key={tech}>{tech}</span>
          ))}          
        </Hero.Subtitle>
      </Hero>
      <Page.Content>
        <Panel>
          <Panel.Header shade className="flex flex-row justify-between items-center gap-4">
            <Panel.Title className="basis-full">Project Links</Panel.Title>
            <RocketLaunchIcon className="w-12 h-12 text-green-300"/>
            <DocumentTextIcon className="w-12 h-12 text-green-300"/>
            <CodeBracketIcon className="w-12 h-12 text-green-300"/>
          </Panel.Header>
          <Panel.Content className="flex flex-wrap gap-12 justify-center underline decoration-dotted underline-offset-4">
              {meta.urls.demo && (
                <Link href={meta.urls.demo} target="_blank" className="flex flex-row items-center gap-2">
                  <RocketLaunchIcon className="inline-block w-6 h-6 text-green-300"/>
                  See the demo
                  <ExternalLinkIcon className="inline-block w-4 h-4"/>
                </Link>
              )}
              {meta.urls.docs && (
                <Link href={meta.urls.docs} target="_blank" className="flex flex-row items-center gap-2">
                  <DocumentTextIcon className="inline-block w-6 h-6 text-green-300"/>
                  Read the docs
                  <ExternalLinkIcon className="inline-block w-4 h-4"/>
                </Link>
              )}
              {meta.urls.source && (
                <Link href={meta.urls.source} target="_blank" className="flex flex-row items-center gap-2">
                  <CodeBracketIcon className="inline-block w-6 h-6 text-green-300"/>
                  View the source
                  <ExternalLinkIcon className="inline-block w-4 h-4"/>
                </Link>
              )}
          </Panel.Content>
        </Panel>
        <Panel>
          <Panel.Content>
            <MDX code={code}/>
          </Panel.Content>
        </Panel>
      </Page.Content>
    </Page>
  )
}


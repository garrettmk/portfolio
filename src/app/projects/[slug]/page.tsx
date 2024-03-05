import { Hero } from "@/components/hero";
import { MDX } from "@/components/mdx";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getAllContentSlugs, getContent } from "../lib";
import { Panel } from "@/components/panel";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

export async function generateStaticParams() {
  const contentSlugs = getAllContentSlugs();
  return contentSlugs.map(slug => ({ slug }));
}

export default async function Page(args: { 
  params: {
    slug: string;
  }
}) {
  const { params: { slug } } = args;
  const { code, meta } = await getContent(slug);
  
  return (
    <article className="flex flex-col">
      <Hero>
        <Link href="/projects">
          <Hero.Subtitle className="flex flex-row items-center gap-2">
            <ChevronLeftIcon className="w-6 h-6 mb-1"/> All Projects
          </Hero.Subtitle>
        </Link>
        <Hero.Title>{meta.title}</Hero.Title>
        <Hero.Subtitle className="flex flex-row space-x-4 justify-end">
          {meta.tech.map(tech => (
            <span key={tech}>{tech}</span>
          ))}          
        </Hero.Subtitle>
      </Hero>
      <div className="max-w-2xl self-center mx-12">
        <Panel 
          className="p-12 -mx-12 my-12 flex justify-between flex-wrap gap-2 text-xl text-green-300"
        >
          {meta.urls.demo && (
            <Link href={meta.urls.demo} target="_blank">
              See the demo <ArrowTopRightOnSquareIcon className="inline-block w-6 h-6 mb-1.5"/>
            </Link>
          )}
          {meta.urls.docs && (
            <Link href={meta.urls.docs} target="_blank">
              Read the docs <ArrowTopRightOnSquareIcon className="inline-block w-6 h-6 mb-1.5"/>
            </Link>
          )}
          {meta.urls.source && (
            <Link href={meta.urls.source} target="_blank">
              View the source <ArrowTopRightOnSquareIcon className="inline-block w-6 h-6 mb-1.5"/>
            </Link>
          )}
        </Panel>
        <MDX code={code}/>
      </div>
    </article>
  )
}


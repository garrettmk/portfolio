import { Hero } from "@/components/hero";
import { MDX } from "@/components/mdx";
import { Page } from "@/components/page";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getAllContentSlugs, getContent } from "../lib";
import { Panel } from "@/components/panel";

export async function generateStaticParams() {
  const contentSlugs = getAllContentSlugs();
  return contentSlugs.map(slug => ({ slug }));
}

export default async function PostPage(args: { 
  params: {
    slug: string;
  }
}) {
  const { params: { slug } } = args;
  const { code, meta } = await getContent(slug);
  
  return (
    <Page>
      <Hero>
        <Link href="/posts">
          <Hero.Subtitle className="flex flex-row items-center gap-2">
            <ChevronLeftIcon className="w-6 h-6 mb-1"/> All Posts
          </Hero.Subtitle>
        </Link>
        <Hero.Title>{meta.title}</Hero.Title>
        <Hero.Subtitle className="flex flex-row justify-end">
          {meta.description}
        </Hero.Subtitle>
      </Hero>
      <Page.Content>
        <Panel>
          <Panel.Content>
            <MDX code={code}/>
          </Panel.Content>
        </Panel>
      </Page.Content>
    </Page>
  )
}


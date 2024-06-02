import { Hero } from "@/components/hero";
import { Page } from "@/components/page";
import { PostList } from "./components/post-list";
import { getAllMetas } from "./lib";


export default async function PostsPage() {
  const { data: posts } = await getAllMetas();

  return (
    <Page>
      <Hero>
        <Hero.Title>Posts</Hero.Title>
      </Hero>

      <Page.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
          urna. Suspendisse eros nunc, gravida in sapien in, ultrices
          ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
          Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
        
        <hr className="border-slate-800"/>
        
        <PostList posts={posts} />

        <hr className="border-slate-800"/>

        <p>
          That&apos;s it, you&apos;ve reached the end. Thanks for reading! Come back soon for new content.
        </p>
      </Page.Content>
    </Page>
  );
}

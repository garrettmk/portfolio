import Hero from "@/components/hero";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "./post-card";
import { PostList } from "./post-list";



export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <Hero>
        <Hero.Title>Posts</Hero.Title>
      </Hero>
      <div className="max-w-3xl py-8 mx-auto">
        <PostList posts={posts} />
      </div>
    </>
  );
}

import Hero from "@/components/hero";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "./post-card";



export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <Hero>
        <span className="block text-xl font-bold text-green-300 mb-2">
        </span>
        <h1 className="text-8xl font-bold">
          <span className="special-highlight">P</span>osts
        </h1>
        <span className="block text-xl text-right font-bold text-green-300 mt-2">
        </span>
      </Hero>
      <div className="max-w-xl py-8 mx-auto">
        {posts.map((post, idx) => (
          <PostCard className="mb-12" key={idx} post={post} />
        ))}
      </div>
    </>
  );
}

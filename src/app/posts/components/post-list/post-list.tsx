import clsx from "clsx";
import { HTMLAttributes } from "react";
import { PostMeta } from "../../lib";
import { Post } from "../post";

export type PostListProps = HTMLAttributes<HTMLUListElement> & {
  posts: PostMeta[];
}

export function PostList(props: PostListProps) {
  const { className, posts, ...ulProps } = props;

  return (
    <ul className={clsx("relative flex flex-col space-y-12", className)} {...ulProps}>
      {posts.map(post => (
        <Post
          as='li'
          key={post.slug}
          post={post}
        />
      ))}
    </ul>
  );
}
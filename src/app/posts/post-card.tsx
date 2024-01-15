import React, { HTMLAttributes } from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import clsx from "clsx";

export type PostCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  post: Post;
};

export function PostCard(props: PostCardProps) {
  const { className, post, ...divProps } = props;
  const Content = getMDXComponent(post.body.code);

  return (
    <div className={clsx(className)} {...divProps}>
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-sm text-green-300">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-md">
        <Content />
      </div>
    </div>
  );
}
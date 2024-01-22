import clsx from "clsx";
import { Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { ArrowTopRightOnSquareIcon as NewTabIcon } from "@heroicons/react/16/solid";
import { format, parseISO } from "date-fns";

export type PostListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  post: Post
};

export function PostListItem(props: PostListItemProps) {
  const { className, post, ...liProps } = props;
  const Content = getMDXComponent(post.body.code);

  return (
    <li
      className={clsx(
        'relative group/post-list-item',
        'transition-all duration-300 ease-in-out',
        'p-12 hover:backdrop-brightness-[.85] hover:backdrop-blur-[2px]',
        'border border-transparent hover:border-slate-800 rounded-xl',
        'group-hover/post-list:[filter:opacity(.5)]', 
        'hover:![filter:opacity(1)]',
        'group-hover/post-list-item:backdrop-brightness-[.85]', 
        'group-hover/post-list-item:backdrop-blur-[2px]',
        'group-hover/post-list-item:border-slate-800',
        className
      )}
      {...liProps}
    >
      <h2 className="text-2xl mb-2">
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
      <div className="text-md mt-8">
        <Content />
      </div>
    </li>
  );
}


export type PostListProps = HTMLAttributes<HTMLUListElement> & {
  posts: Post[]
}

export function PostList(props: PostListProps) {
  const { className, posts, ...ulProps } = props;

  return (
    <ul 
      className={clsx(
        'group/post-list',
        'grid grid-cols-1 gap-6',
        className
      )}
      {...ulProps}
    >
      {posts.map((post, idx) => (
        <PostListItem post={post} key={idx}/>
      ))}
    </ul>
  );
}
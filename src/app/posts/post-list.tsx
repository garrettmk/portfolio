import PanelList, { PanelListItemProps, PanelListProps } from "@/components/panel-list";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

export type PostListProps = PanelListProps & {
  posts: Post[];
};

export function PostList(props: PostListProps) {
  const { posts, ...ulProps } = props;

  return (
    <PanelList {...ulProps}>
      {posts.map((post, idx) => (
        <PostListItem key={idx} post={post} />
      ))}
    </PanelList>
  );
}


export type PostListItemProps = PanelListItemProps & {
  post: Post;
};

export function PostListItem(props: PostListItemProps) {
  const { post, ...liProps } = props;
  const Content = getMDXComponent(post.body.code);

  return (
    <PanelList.Item {...liProps}>
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
    </PanelList.Item>
  );
}
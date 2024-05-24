import { PanelList, PanelListProps } from "@/components/panel-list";
import { PostMeta } from "../../lib";
import { Post } from "../post";
import Link from "next/link";

export type PostListProps = Omit<PanelListProps, 'children'> & {
  posts: PostMeta[];
}

export function PostList(props: PostListProps) {
  const { posts, ...listProps } = props;
  const postUrl = (post: PostMeta) => `/posts/${post.slug}`;

  return (
    <PanelList {...listProps}>
      {posts.map((post) => (
        <PanelList.Item key={post.slug}>
          <Link href={postUrl(post)} className="block p-12">
            <Post post={post} />
          </Link>
        </PanelList.Item>
      ))}
    </PanelList>
  );
}
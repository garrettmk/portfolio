import { PanelList, PanelListProps } from "@/components/panel-list";
import { PostMeta } from "../../lib";
import { Post } from "../post";

export type PostListProps = Omit<PanelListProps, 'children'> & {
  posts: PostMeta[];
}

export function PostList(props: PostListProps) {
  const { posts, ...listProps } = props;

  return (
    <PanelList {...listProps}>
      {posts.map((post) => (
        <PanelList.Item key={post.slug} className="p-12">
          <Post post={post} />
        </PanelList.Item>
      ))}
    </PanelList>
  );
}
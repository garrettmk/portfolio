import { Panel, PanelProps } from "@/components/panel";
import { PostMeta } from "../../lib";
import Link from "next/link";

export type PostProps<T extends keyof JSX.IntrinsicElements = 'div'> = PanelProps<T> & {
  post: PostMeta
}

export function Post<T extends keyof JSX.IntrinsicElements>(props: PostProps<T>) {
  const { post, ...panelProps } = props;

  return (
    // @ts-ignore TS chokes on this
    <Panel {...panelProps}>
      <Link href={`/posts/${post.slug}`}>
        <Panel.Header>
          <Panel.Title>
            {post.title}
          </Panel.Title>
          <Panel.Subtitle>
            {post.description}
          </Panel.Subtitle>
        </Panel.Header>
        <Panel.Content>
          {post.excerpt}
          <p className="mt-4 text-sm text-green-300 underline decoration-dotted underline-offset-4">
            Read more...
          </p>
        </Panel.Content>
      </Link>
    </Panel>
  );
}
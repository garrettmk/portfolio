import { getMDXComponent } from "mdx-bundler/client";
import { mdxComponents } from "./mdx-components";
import { MDXComponents } from "mdx/types";

export type MDXProps = {
  code: string;
  components?: MDXComponents
}

export function MDX(props: MDXProps) {
  const { code, components } = props;
  const ContentComponent = getMDXComponent(code);

  return (
    <ContentComponent components={{
      ...mdxComponents,
      ...components
    }} />
  )
}

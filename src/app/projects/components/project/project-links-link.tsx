import Link from "next/link";
import { ComponentProps } from 'react';

export type ProjectLinksLinkProps = ComponentProps<typeof Link>;


export function ProjectLinksLink(props: ProjectLinksLinkProps) {
  const { className, ...otherProps } = props;

  return (
    <Link
      className="underline decoration-dotted underline-offset-4 decoration-1 whitespace-nowrap"
      target="_blank"
      {...otherProps}
    />
  );
}
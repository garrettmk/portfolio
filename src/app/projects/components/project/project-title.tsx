import { HTMLAttributes } from "react";

export type ProjectTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function ProjectTitle(props: ProjectTitleProps) {
  const { className, ...hProps } = props;

  return (
    <h2 className="text-5xl mb-2" {...hProps} />
  );
}
import { HTMLAttributes } from "react";

function p(props: HTMLAttributes<HTMLParagraphElement>) {
  const { className, ...rest } = props;
  return <p className="p-12" {...rest} />
}

function hr(props: HTMLAttributes<HTMLHRElement>) {
  const { className, ...rest } = props;
  return <hr className="my-12 border-slate-700" {...rest} />
}

export const mdxComponents = {
  // p,
  hr,
} as const;
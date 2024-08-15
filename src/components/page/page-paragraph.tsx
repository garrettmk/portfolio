import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PageParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function PageParagraph(props: PageParagraphProps) {
  const { className, ...rest } = props;

  return (
    <p 
      className={clsx("max-w-2xl my-12 self-center text-lg", className)}
      {...rest}
    />
  );
}
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { PageParagraph } from "./page-paragraph";
import { PageContent } from "./page-content";
import { PageSection } from "./page-section";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export function Page(props: PageProps) {
  const { className, ...otherProps } = props;

  return (
    <main
      className={clsx(
        "flex flex-col",
        className
      )}
      {...otherProps}
    />
  )
}

Page.Section = PageSection;
Page.Paragraph = PageParagraph;
Page.Content = PageContent;
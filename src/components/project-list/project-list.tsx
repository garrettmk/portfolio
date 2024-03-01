import { PanelList, PanelListProps } from "@/components/panel-list";
import clsx from "clsx";
import React from "react";
import { ProjectListItem } from "./project-list-item";


export type ProjectListProps = PanelListProps & {
  children?: React.ReactNode;
}


export function ProjectList(props: ProjectListProps) {
  const { className, ...ulProps } = props;

  return (
    <PanelList
      className={clsx(
        'group/project-list',
        className
      )}
      {...ulProps}
    />
  );
}


ProjectList.Item = ProjectListItem;
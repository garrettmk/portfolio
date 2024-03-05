import { ArrowTopRightOnSquareIcon as NewTabIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { ProjectLinksLink } from "./project-links-link";


export type ProjectLinksProps = HTMLAttributes<HTMLDivElement>;

export function ProjectLinks(props: ProjectLinksProps) {
  const { className, children, ...divProps } = props;

  return (
    <div 
      className={clsx(
        "flex items-center space-x-4 text-sm text-green-300",
        "px-4 pt-2 pb-3 rounded-md",
        'transition-all duration-300 ease-in-out',
        'group-hover/panel-list-item:bg-slate-800',
      )}
      {...divProps}
    >
      <div className={clsx(
        "transition-all duration-300 ease-in-out",
        "flex space-x-4 max-w-[0px] overflow-hidden opacity-0",
        "group-hover/panel-list-item:max-w-[150px]",
        "group-hover/panel-list-item:opacity-100"
      )}>
        {children}
      </div>
      <NewTabIcon className='w-6 h-6' />
    </div>
  );
}

ProjectLinks.Link = ProjectLinksLink;
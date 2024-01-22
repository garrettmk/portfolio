import clsx from "clsx";
import { Project } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { ArrowTopRightOnSquareIcon as NewTabIcon } from "@heroicons/react/16/solid";

export type ProjectListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  project: Project
};

export function ProjectListItem(props: ProjectListItemProps) {
  const { className, project, ...liProps } = props;
  const Content = getMDXComponent(project.body.code);

  return (
    <li
      className={clsx(
        'relative group/project-list-item',
        'transition-all duration-300 ease-in-out',
        'p-12 hover:backdrop-brightness-[.85] hover:backdrop-blur-[2px]',
        'border border-transparent hover:border-slate-800 rounded-xl',
        'group-hover/project-list:[filter:opacity(.5)]', 
        'hover:![filter:opacity(1)]',
        'group-hover/project-list-item:backdrop-brightness-[.85]', 
        'group-hover/project-list-item:backdrop-blur-[2px]',
        'group-hover/project-list-item:border-slate-800',
        className
      )}
      {...liProps}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-5xl mb-2">
          {project.title}
        </h2>
        <div className={clsx(
          "flex items-center space-x-4 text-sm text-green-300",
          "px-4 pt-2 pb-3 rounded-md",
          'transition-all duration-300 ease-in-out',
          'group-hover/project-list-item:bg-slate-800',
        )}>
          <div className={clsx(
            "transition-all duration-300 ease-in-out",
            "flex space-x-4 max-w-[0px] overflow-hidden opacity-0",
            "group-hover/project-list-item:max-w-[150px]",
            "group-hover/project-list-item:opacity-100"
          )}>
            {project.demoUrl && (
              <Link 
                href={project.demoUrl}
                className='underline decoration-dotted underline-offset-4 decoration-1 whitespace-nowrap'
                target='_blank'
              >
                Demo
              </Link>
            )}
            {project.documentationUrl && (
              <Link 
                href={project.documentationUrl}
                className='underline decoration-dotted underline-offset-4 decoration-1 whitespace-nowrap'
                target='_blank'
              >
                Docs
              </Link>
            )}
            {project.githubUrl && (
              <Link 
                href={project.githubUrl}
                className='underline decoration-dotted underline-offset-4 decoration-1 whitespace-nowrap'
                target='_blank'
              >
                Source
              </Link>
            )}
          </div>  
          <NewTabIcon className='w-6 h-6'/>
        </div>
      </div>
      <div className="flex space-x-4 text-sm text-green-300">
        {project.tech.map((tech, idx) => (
          <span key={idx}>
            {tech}
          </span>
        ))}
        <div className="flex-grow"/>
      </div>

      {/* <hr className="border-slate-800 mt-4 mb-6"/> */}
      <div className="text-md mt-8">
        <Content />
      </div>
    </li>
  );
}


export type ProjectListProps = HTMLAttributes<HTMLUListElement> & {
  projects: Project[]
}

export function ProjectList(props: ProjectListProps) {
  const { className, projects, ...ulProps } = props;

  return (
    <ul 
      className={clsx(
        'group/project-list',
        'grid grid-cols-1 gap-6',
        className
      )}
      {...ulProps}
    >
      {projects.map((project, idx) => (
        <ProjectListItem project={project} key={idx}/>
      ))}
    </ul>
  );
}
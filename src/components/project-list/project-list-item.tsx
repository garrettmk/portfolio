import clsx from "clsx";
import { Project } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { PanelList, PanelListItemProps } from "@/components/panel-list";
import { ArrowTopRightOnSquareIcon as NewTabIcon } from "@heroicons/react/16/solid";


export type ProjectListItemProps = PanelListItemProps & {
  // project: Project
}

export function ProjectListItem(props: ProjectListItemProps) {
  const { className, ...liProps } = props;
  // const Content = getMDXComponent(project.body.code);

  return (
    <PanelList.Item 
      className={clsx(
        "flex flex-col items-center",
        "rounded-none border-l-0 border-r-0",
        "lg:mx-auto lg:rounded-xl lg:border-l lg:border-r",
        "p-12 pt-[calc(2.5rem)]",
        className
      )}
      {...liProps}
    >
      {/* <div className="max-w-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl mb-2">
            {project.title}
          </h2>
          <div className={clsx(
            "flex items-center text-sm text-green-300",
            "px-4 pt-2 pb-3 rounded-md",
            'transition-all duration-300 ease-in-out',
            'group-hover/panel-list-item:bg-slate-800',
          )}>
            <div className={clsx(
              "transition-all duration-300 ease-in-out",
              "flex space-x-4 max-w-[0px] overflow-hidden opacity-0",
              "group-hover/panel-list-item:max-w-[150px]",
              "group-hover/panel-list-item:opacity-100",
              "group-hover/panel-list-item:mr-4"
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
            <NewTabIcon className='w-6 h-6' />
          </div>
        </div>
        <div className="flex space-x-4 text-sm text-green-300">
          {project.tech.map((tech, idx) => (
            <span key={idx}>
              {tech}
            </span>
          ))}
          <div className="flex-grow" />
        </div>
        <div className="text-md mt-8">
          <Content />
        </div>
      </div> */}
    </PanelList.Item>
  );
}

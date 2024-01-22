import Hero from "@/components/hero";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ProjectList } from "./project-list";


export default function Posts() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <Hero>
        <Hero.Title>Projects</Hero.Title>
      </Hero>
      <div className="max-w-3xl py-8 mx-auto">
        <p className="mb-12 p-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu urna ac turpis lacinia varius. Nulla vehicula pulvinar rhoncus. Ut ullamcorper velit id diam viverra porta. Vivamus eu orci efficitur ante congue blandit et nec quam. Suspendisse diam mi, posuere sit amet ipsum quis, accumsan gravida tortor. Fusce blandit posuere erat vitae sagittis. Quisque at tempor tellus. Etiam sollicitudin cursus ullamcorper. Aliquam consectetur odio orci, et porttitor metus mattis eu. Praesent a metus vel turpis fermentum porttitor. Nam quis felis ante. Donec quam odio, commodo vitae lectus non, placerat ultricies risus.
        </p>
        <ProjectList projects={projects} />
      </div>
    </>
  );
}

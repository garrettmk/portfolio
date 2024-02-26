import { Content } from "@/components/content";
import { Hero } from "@/components/hero";
import PanelList from "@/components/panel-list";
import { ProjectList } from "@/components/project-list";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <Hero>
        <Hero.Subtitle>hi! my name is</Hero.Subtitle>
        <Hero.Title>Garrett Myrick</Hero.Title>
        <Hero.Subtitle className="text-right">i build things</Hero.Subtitle>
      </Hero>
      <Content>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
          urna. Suspendisse eros nunc, gravida in sapien in, ultrices
          ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
          Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
      </Content>
      <SectionHeader className="my-12">
        <SectionHeader.Subtitle>
          check out my
        </SectionHeader.Subtitle>
        <SectionHeader.Title>
          Projects
        </SectionHeader.Title>
      </SectionHeader>
      <Content>
        <ProjectList projects={projects} />
      </Content>
      <SectionHeader orientation="left" className="my-12">
        <SectionHeader.Subtitle>
          let me show you my
        </SectionHeader.Subtitle>
        <SectionHeader.Title>
          Experience
        </SectionHeader.Title>
      </SectionHeader>
      <Content>
        <Timeline className="min-h-[1000px]">
          <Timeline.Dot open>
            Present
          </Timeline.Dot>

          <Timeline.Duration emphasis>
            <Timeline.Duration.Title>
              Henry Schein One
            </Timeline.Duration.Title>
            <Timeline.Duration.Subtitle>
              Software Engineer
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
          </Timeline.Duration>
          
          <Timeline.Dot>
            April 2020
          </Timeline.Dot>

          <Timeline.Duration emphasis>
            <Timeline.Duration.Title>
              Square Practice
            </Timeline.Duration.Title>
            <Timeline.Duration.Subtitle>
              Software Engineer
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
            <Timeline.Duration.Subtitle className="mt-0 group-hover/timeline-item:mt-8">
              Technical Support Specialist
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
          </Timeline.Duration>
          
          <Timeline.Dot>
            April 2018
          </Timeline.Dot>
          
          <Timeline.Duration quiet>
            <Timeline.Duration.Body quiet>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
          </Timeline.Duration>

          <Timeline.Dot>
            June 2015
          </Timeline.Dot>

          <Timeline.Duration emphasis>
            <Timeline.Duration.Title>
              Efinancial
            </Timeline.Duration.Title>
            <Timeline.Duration.Subtitle>
              Life Insurance Agent
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
          </Timeline.Duration>
          
          <Timeline.Dot>
            April 2018
          </Timeline.Dot>

          <Timeline.Duration emphasis>
            <Timeline.Duration.Title>
              DataSphere, LLC
            </Timeline.Duration.Title>
            <Timeline.Duration.Subtitle>
              Sales Associate
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
              aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
            </Timeline.Duration.Body>
          </Timeline.Duration>
          
          <Timeline.Dot>
            April 2018
          </Timeline.Dot>
        </Timeline>
      </Content>
    </main>
  );
}

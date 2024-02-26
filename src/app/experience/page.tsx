import { Hero } from "@/components/hero";
import Timeline from "./timeline";

export default function Experience() {
  return (
    <>
      <Hero>
        <Hero.Title>Experience</Hero.Title>
      </Hero>
      <div className="max-w-xl py-8 mx-auto min-h-[1500px]">
        <Timeline>
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
      </div>
    </>
  )
}
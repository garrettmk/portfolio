import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Experience() {
  return (
    <>
      <Hero>
        <Hero.Title>Experience</Hero.Title>
      </Hero>
      <div className="max-w-xl py-8 mx-auto min-h-[1500px]">
      <Timeline className="mt-12 min-h-[1000px]">
          <Timeline.Dot open>
            Present
          </Timeline.Dot>

          <Timeline.Duration emphasis open>
            <div className="flex justify-between items-center">
            <Timeline.Duration.Title>
              Henry Schein One
            </Timeline.Duration.Title>
            <h4 className="flex flex-row items-center font-semibold text-green-300">
              <CheckBadgeIcon className="inline w-6 h-6 mr-2 translate-y-[-2px]"/>
              Current!
            </h4>
            </div>
            <Timeline.Duration.Subtitle>
              Software Engineer
            </Timeline.Duration.Subtitle>
            <Timeline.Duration.Body open>
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
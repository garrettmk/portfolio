import Hero from "@/components/hero";
import Timeline from "./timeline";

export default function Experience() {
  return (
    <>
      <Hero>
        <Hero.Title>Experience</Hero.Title>
      </Hero>
      <div className="max-w-xl py-8 mx-auto">
        <Timeline>
          <Timeline.Item>
            <Timeline.Item.Dot open>
              Present
            </Timeline.Item.Dot>
            <Timeline.Item.Duration emphasis>
              <Timeline.Item.Title>
                Henry Schein One
              </Timeline.Item.Title>
              <Timeline.Item.Subtitle>
                Software Engineer
              </Timeline.Item.Subtitle>
              <Timeline.Item.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
                aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
              </Timeline.Item.Body>
            </Timeline.Item.Duration>
            <Timeline.Item.Dot>
              April 2020
            </Timeline.Item.Dot>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Item.Duration emphasis>
              <Timeline.Item.Title>
                Square Practice
              </Timeline.Item.Title>
              <Timeline.Item.Subtitle>
                Software Engineer
              </Timeline.Item.Subtitle>
              <Timeline.Item.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
                aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
              </Timeline.Item.Body>
            </Timeline.Item.Duration>
            <Timeline.Item.Dot>
              April 2018
            </Timeline.Item.Dot>
          </Timeline.Item>
          
          <Timeline.Item>
            <Timeline.Item.Duration quiet>
              <Timeline.Item.Body quiet>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
                aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
              </Timeline.Item.Body>
            </Timeline.Item.Duration>
            <Timeline.Item.Dot>
              June 2015
            </Timeline.Item.Dot>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Item.Duration emphasis>
              <Timeline.Item.Title>
                Efinancial
              </Timeline.Item.Title>
              <Timeline.Item.Subtitle>
                Life Insurance Agent
              </Timeline.Item.Subtitle>
              <Timeline.Item.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
                aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
              </Timeline.Item.Body>
            </Timeline.Item.Duration>
            <Timeline.Item.Dot>
              April 2018
            </Timeline.Item.Dot>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Item.Duration emphasis>
              <Timeline.Item.Title>
                DataSphere, LLC
              </Timeline.Item.Title>
              <Timeline.Item.Subtitle>
                Sales Associate
              </Timeline.Item.Subtitle>
              <Timeline.Item.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar, nunc vel tempor aliquam, massa sapien aliquet velit, eu
                aliquam diam risus ac nunc. Donec tempor, nulla vitae molestie
              </Timeline.Item.Body>
            </Timeline.Item.Duration>
            <Timeline.Item.Dot>
              April 2018
            </Timeline.Item.Dot>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  )
}
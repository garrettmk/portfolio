import Hero from "@/components/hero";
import PanelList from "@/components/panel-list";

export default function Home() {
  return (
    <>
      <Hero>
        <Hero.Subtitle>hi! my name is</Hero.Subtitle>
        <Hero.Title>Garrett Myrick</Hero.Title>
        <Hero.Subtitle className="text-right">i build things</Hero.Subtitle>
      </Hero>
      <div className="max-w-xl py-8 mx-auto">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          diam at ante vehicula feugiat id vitae urna. Pellentesque nec faucibus
          urna. Suspendisse eros nunc, gravida in sapien in, ultrices
          ullamcorper massa. Praesent et pellentesque enim, sed volutpat ante.
          Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
        <PanelList className="mt-12">
          <PanelList.Item>
            First item
          </PanelList.Item>
          <PanelList.Item>
            Second item
          </PanelList.Item>
          <PanelList.Item>
            Third item
          </PanelList.Item>
        </PanelList>
      </div>
    </>
  );
}

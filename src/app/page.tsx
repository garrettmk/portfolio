import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="h-80 px-8 grid justify-items-start content-center place-content-center">
          <span className="text-xl font-bold text-green-300 mb-2">
            hi! my name is
          </span>
          <h1 className="text-8xl font-bold">
            <span className="special-highlight">G</span>arrett{" "}
            <span className="special-highlight">M</span>yrick
          </h1>
          <span className="block text-xl font-bold text-green-300 mt-2 place-self-end">
            i build things
          </span>
        </div>
      </Hero>
      <div className="max-w-xl py-8 mx-auto">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed diam at ante vehicula feugiat id vitae urna. Pellentesque
          nec faucibus urna. Suspendisse eros nunc, gravida in sapien in, ultrices ullamcorper massa. Praesent et pellentesque enim,
          sed volutpat ante. Quisque eleifend mollis odio, sit amet commodo mauris mattis ac.
        </p>
      </div>
    </>
  );
}

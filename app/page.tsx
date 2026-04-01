import Image from "next/image";
import Navbar from "./components/Navbar";
import BackgroundBlobs from "./components/BackgroundBlobs";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative h-screen overflow-hidden">
        <div className="relative z-1 m-auto flex h-full max-w-4xl flex-col items-center justify-center">
          <div className="mb-14 flex h-8 items-center gap-2 rounded-full border border-white/20 bg-white/15 px-6 shadow-md">
            <div className="size-2 rounded-full bg-[#49E83E]"></div>
            <span className="text-sm leading-none">
              Version 2.3 now in beta!
            </span>
          </div>
          <div className="flex flex-col items-center gap-16">
            <div className="text-center font-medium text-shadow-[0_0px_10px_rgb(0_0_0/0.15)]">
              <h1 className="mb-9 text-7xl leading-[110%]">
                The last payment gateway you’ll ever need.
              </h1>
              <p>
                Cut through the noise. Give your business fiscal clarity to
                focus on growth.
              </p>
            </div>
            <div className="flex items-center gap-4 font-medium">
              <a
                className="flex h-11 w-40.75 items-center justify-center rounded-lg bg-white px-3 py-2.5 leading-none text-[#060606]"
                href=""
              >
                Get Started
              </a>
              <a
                className="flex h-11 w-40.75 items-center justify-center"
                href=""
              >
                Contact our Team
              </a>
            </div>
          </div>
        </div>
        <BackgroundBlobs />
      </section>
    </>
  );
}

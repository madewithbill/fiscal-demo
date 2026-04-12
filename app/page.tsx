import styles from "@/app/index.module.css";

import BackgroundBlobs from "./components/BackgroundBlobs";

export default function Home() {
  return (
    <>
      <section className="relative h-screen overflow-hidden px-4">
        <div className="relative z-1 m-auto flex h-full max-w-4xl flex-col items-center justify-center text-center font-medium">
          <div
            className={`${styles.animateIn} mb-6 flex h-8 items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 shadow-sm`}
          >
            <div className="size-2 animate-pulse rounded-full bg-[#49E83E]"></div>
            <span className="text-sm leading-none font-normal">
              Version 2.3 now in beta
            </span>
          </div>

          <h1
            className={`${styles.animateIn} mb-8 text-[2.75rem] leading-[105%] md:text-7xl`}
          >
            The last payment gateway you’ll ever need.
          </h1>
          <p
            className={`${styles.animateIn} text-lg] mb-12 max-w-120 font-normal`}
          >
            Secure checkouts, instant authorizations, and clarity to scale.
          </p>

          <div
            className={`${styles.animateIn} flex w-full flex-col items-stretch gap-4 font-medium sm:w-auto sm:flex-row sm:items-center`}
          >
            <a
              className="flex h-11 w-40.75 flex-none items-center justify-center rounded-lg bg-white px-3 py-2.5 leading-none text-black max-sm:w-full"
              href=""
            >
              Get Started
            </a>
            <a
              className="flex h-11 w-40.75 items-center justify-center text-nowrap max-md:w-full"
              href=""
            >
              Contact Our Team
            </a>
          </div>
        </div>
        <BackgroundBlobs />
      </section>
    </>
  );
}

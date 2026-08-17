"use client";
import { m } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-sand pt-40 pb-28">
      {/* Soft coastal glows */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-seafoam/40 blur-[120px] rounded-full pointer-events-none"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-rope/30 blur-[120px] rounded-full pointer-events-none"
      />

      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center"
      >
        <m.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-rope-deep mb-6"
        >
          Okaloosa County, FL
        </m.p>

        <m.h1
          variants={item}
          className="font-display text-5xl sm:text-7xl leading-[1.02] tracking-tight text-navy"
        >
          A house on the water
          <br />
          is never <span className="italic text-rope">just a house.</span>
        </m.h1>

        <m.p
          variants={item}
          className="mt-8 text-base sm:text-xl leading-relaxed text-navy/60 max-w-xl mx-auto"
        >
          Flood zones, dock permitting, wind mitigation, and the insurance
          math that catches buyers off guard — explained plainly, before
          it becomes a surprise at closing.
        </m.p>

        <m.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#guide"
            className="inline-block rounded-full bg-navy px-8 py-4 text-sm font-semibold text-cream hover:bg-navy-soft transition-colors"
          >
            Read the Guide
          </a>
          <a
            href="#calculator"
            className="inline-block rounded-full border border-navy/20 px-8 py-4 text-sm font-semibold text-navy hover:border-navy transition-colors"
          >
            Estimate My Costs
          </a>
        </m.div>
      </m.div>

      {/* Wave divider into the next section */}
      <svg
        viewBox="0 0 1440 80"
        className="absolute bottom-0 left-0 w-full text-sand-deep"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}

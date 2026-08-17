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
      {/* Soft coastal glows — gentle continuous drift */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 1.6, ease: "easeOut" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-seafoam/40 blur-[120px] rounded-full pointer-events-none"
      />
      <m.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          opacity: { duration: 1.6, ease: "easeOut", delay: 0.2 },
          x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        }}
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
          <m.a
            href="#guide"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="inline-block rounded-full bg-navy px-8 py-4 text-sm font-semibold text-cream hover:bg-navy-soft transition-colors"
          >
            Read the Guide
          </m.a>
          <m.a
            href="#calculator"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="inline-block rounded-full border border-navy/20 px-8 py-4 text-sm font-semibold text-navy hover:border-navy transition-colors"
          >
            Estimate My Costs
          </m.a>
        </m.div>

        <m.a
          variants={item}
          href="#storm-prep"
          className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-rope-deep hover:text-rope transition-colors"
        >
          Or jump to the Hurricane Prep Checklist &rarr;
        </m.a>

        <m.div
          variants={item}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 text-navy/30"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mx-auto"
            aria-hidden="true"
          >
            <path
              d="M4 7l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </m.div>
      </m.div>

      {/* Wave divider into the next section */}
      <m.svg
        viewBox="0 0 1440 80"
        className="absolute bottom-0 left-0 w-full text-sand-deep"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </m.svg>
    </section>
  );
}

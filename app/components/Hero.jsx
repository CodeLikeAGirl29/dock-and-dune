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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="charcoal-section relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-reef blur-[130px] rounded-full pointer-events-none"
      />

      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <m.p
          variants={item}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel mb-6"
        >
          Okaloosa County, FL
        </m.p>

        <m.h1
          variants={item}
          className="font-display text-4xl font-bold text-foreground sm:text-6xl leading-[0.95] tracking-tight"
        >
          A house on the water
          <br />
          is never <span className="italic text-reef">just a house.</span>
        </m.h1>

        <m.p
          variants={item}
          className="mt-8 font-sans text-base text-foreground/60 sm:text-xl/relaxed max-w-xl mx-auto"
        >
          Flood zones, dock permitting, wind mitigation, and the insurance
          math that catches buyers off guard — explained plainly, before
          it becomes a surprise at closing.
        </m.p>

        <m.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#guide"
            className="inline-block rounded-md bg-reef px-8 py-4 text-sm font-bold text-background hover:opacity-90 transition"
          >
            Read the Guide
          </a>
          <a
            href="#calculator"
            className="frame inline-block px-8 py-4 text-sm font-bold text-foreground hover:text-reef transition-colors"
          >
            Estimate My Costs
          </a>
        </m.div>
      </m.div>
    </section>
  );
}

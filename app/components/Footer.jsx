"use client";
import { m } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8 px-6">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <h3 className="font-display text-2xl text-cream">
          Dock <span className="italic text-rope">&amp;</span> Dune
        </h3>
        <p className="mt-3 text-cream/50 text-sm max-w-md mx-auto leading-relaxed">
          A guide from Lindsey Howard — Florida Real Estate Sales Associate, eXp
          Realty, serving Fort Walton Beach, Destin &amp; Okaloosa County.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6">
          <li className="flex items-center gap-2">
            <FaEnvelope className="size-3.5 text-seafoam" />
            <m.a
              href="mailto:lindsey.k.howard@exprealty.com"
              whileHover={{ y: -1 }}
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              lindsey.k.howard@exprealty.com
            </m.a>
          </li>
          <li className="flex items-center gap-2">
            <FaPhone className="size-3.5 text-seafoam" />
            <m.a
              href="tel:+18505335877"
              whileHover={{ y: -1 }}
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              +1 (850) 533-5877
            </m.a>
          </li>
        </ul>

        <m.a
          href="https://www.lhrealestate.cc"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mt-6 inline-block rounded-full border border-cream/15 px-5 py-2 text-xs font-medium text-cream/70 hover:border-rope hover:text-rope transition-colors"
        >
          &larr; Back to Home, Handled.
        </m.a>

        <div className="rope-dots mt-10 opacity-40" />

        <p className="mt-6 text-[10px] uppercase tracking-widest text-cream/30">
          &copy; {currentYear} Lindsey Howard. Estimates are illustrative only
          and not a substitute for a licensed insurance quote.
        </p>
      </m.div>
    </footer>
  );
}

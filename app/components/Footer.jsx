"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-display text-2xl text-cream">
          Dock <span className="italic text-rope">&amp;</span> Dune
        </h3>
        <p className="mt-3 text-cream/50 text-sm max-w-md mx-auto leading-relaxed">
          A guide from Lindsey Howard — Florida Real Estate Sales Associate,
          eXp Realty, serving Fort Walton Beach, Destin &amp; Okaloosa County.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6">
          <li className="flex items-center gap-2">
            <FaEnvelope className="size-3.5 text-seafoam" />
            <a
              href="mailto:lindsey.howard.re@outlook.com"
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              lindsey.howard.re@outlook.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaPhone className="size-3.5 text-seafoam" />
            <a
              href="tel:+18505335877"
              className="text-cream/70 text-sm hover:text-cream transition-colors"
            >
              +1 (850) 533-5877
            </a>
          </li>
        </ul>

        <a
          href="https://www.lindseyhoward.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full border border-cream/15 px-5 py-2 text-xs font-medium text-cream/70 hover:border-rope hover:text-rope transition-colors"
        >
          &larr; Back to Home, Handled.
        </a>

        <div className="rope-dots mt-10 opacity-40" />

        <p className="mt-6 text-[10px] uppercase tracking-widest text-cream/30">
          &copy; {currentYear} Lindsey Howard. Estimates are illustrative
          only and not a substitute for a licensed insurance quote.
        </p>
      </div>
    </footer>
  );
}

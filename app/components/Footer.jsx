"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="charcoal-section pt-16 pb-8 px-4 border-t border-muted/10">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold text-foreground">
          Dock <span className="text-reef">&amp;</span> Dune
        </h3>
        <p className="mt-3 text-foreground/50 text-sm max-w-md mx-auto leading-relaxed">
          A guide from Lindsey Howard — Florida Real Estate Sales Associate,
          eXp Realty, serving Fort Walton Beach, Destin &amp; Okaloosa County.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-6">
          <li className="flex items-center gap-2 font-medium">
            <FaEnvelope className="size-3.5 text-steel" />
            <a
              href="mailto:lindsey.howard.re@outlook.com"
              className="text-foreground/70 text-sm hover:text-reef transition-colors"
            >
              lindsey.howard.re@outlook.com
            </a>
          </li>
          <li className="flex items-center gap-2 font-medium">
            <FaPhone className="size-3.5 text-steel" />
            <a
              href="tel:+18505335877"
              className="text-foreground/70 text-sm hover:text-reef transition-colors"
            >
              +1 (850) 533-5877
            </a>
          </li>
        </ul>

        <a
          href="https://www.lindseyhoward.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-steel hover:text-reef transition-colors"
        >
          &larr; Back to Home, Handled.
        </a>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted/50">
          &copy; {currentYear} Lindsey Howard. Estimates are illustrative
          only and not a substitute for a licensed insurance quote.
        </p>
      </div>
    </footer>
  );
}

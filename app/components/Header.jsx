"use client";
import { m } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Header() {
  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-sand/85 backdrop-blur-md py-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-navy">
            Dock <span className="italic text-rope">&amp;</span> Dune
          </span>
        </a>

        <a
          href="https://www.lindseyhoward.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-xs font-medium text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors"
        >
          By Lindsey Howard <FaArrowUpRightFromSquare className="size-2.5" />
        </a>
      </nav>
    </m.header>
  );
}

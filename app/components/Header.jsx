"use client";
import { m } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Header() {
  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/10 py-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tighter text-foreground"
        >
          DOCK <span className="text-reef">&amp;</span> DUNE
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-steel align-middle">
            Waterfront Ownership Guide
          </span>
        </a>

        <a
          href="https://www.lindseyhoward.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="frame flex items-center gap-2 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-steel hover:text-reef transition-colors"
        >
          By Lindsey Howard <FaArrowUpRightFromSquare className="size-2.5" />
        </a>
      </nav>
    </m.header>
  );
}

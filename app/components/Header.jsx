"use client";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        paddingTop: scrolled ? "0.75rem" : "1rem",
        paddingBottom: scrolled ? "0.75rem" : "1rem",
        boxShadow: scrolled
          ? "0 8px 24px -16px rgba(22, 35, 63, 0.18)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-sand/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <m.span
            whileHover={{ letterSpacing: "0.01em" }}
            transition={{ duration: 0.3 }}
            className="font-display text-xl font-semibold tracking-tight text-navy"
          >
            Dock <span className="italic text-rope">&amp;</span> Dune
          </m.span>
        </a>

        <m.a
          href="https://www.lindseyhoward.dev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-xs font-medium text-navy hover:bg-navy hover:text-cream hover:border-navy transition-colors"
        >
          By Lindsey Howard <FaArrowUpRightFromSquare className="size-2.5" />
        </m.a>
      </nav>
    </m.header>
  );
}

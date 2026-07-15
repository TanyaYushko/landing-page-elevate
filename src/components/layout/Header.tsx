"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT US", href: "#about", accent: true },
  { label: "PROJECTS", href: "#projects" },
  { label: "WORK STAGES", href: "#advantages" },
  { label: "PRICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"UA" | "ENG">("ENG");
  const shouldReduceMotion = useReducedMotion();

  const fadeDown = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -16 };

  const fadeDownTransition = {
    duration: 0.65,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(86,86,86,0.52)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1512px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="#top" className="flex shrink-0 items-center gap-1.5">
          <span className="font-sans text-[15px] tracking-[0.04em] text-cream sm:text-[16px]">
            elevate
          </span>
          <span className="relative h-[42px] w-[52px] sm:h-[52px] sm:w-[64px]">
            <Image
              src="/images/logo-mark.svg"
              alt="Elevate interior logo mark"
              fill
              className="object-contain"
            />
          </span>
          <span className="hidden font-sans text-[15px] tracking-[0.04em] text-cream sm:inline sm:text-[16px]">
            interior
          </span>
        </Link>

        <motion.nav
          initial={fadeDown}
          animate={{ opacity: 1, y: 0 }}
          transition={fadeDownTransition}
          className="hidden items-center gap-8 lg:flex xl:gap-12"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[15px] tracking-[0.04em] transition-colors hover:text-accent xl:text-[16px] ${
                link.accent ? "text-accent" : "text-fg"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div
          initial={fadeDown}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...fadeDownTransition, delay: 0.16 }}
          className="hidden items-center gap-5 pr-1 lg:flex"
        >
          <button
            onClick={() => setLang("UA")}
            className={`text-[16px] tracking-[0.04em] transition-colors hover:text-accent ${
              lang === "UA" ? "text-accent" : "text-fg"
            }`}
          >
            UA
          </button>
          <button
            onClick={() => setLang("ENG")}
            className={`text-[16px] tracking-[0.04em] transition-colors hover:text-accent ${
              lang === "ENG" ? "text-accent" : "text-fg"
            }`}
          >
            ENG
          </button>
        </motion.div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col justify-center gap-1.5 p-2 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-fg transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-fg transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-fg transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[#040404] transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-5 pb-6 pt-2 sm:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[16px] tracking-[0.04em] ${
                link.accent ? "text-accent" : "text-fg"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-2">
            <button
              onClick={() => setLang("UA")}
              className={`text-[16px] ${lang === "UA" ? "text-accent" : "text-fg"}`}
            >
              UA
            </button>
            <button
              onClick={() => setLang("ENG")}
              className={`text-[16px] ${lang === "ENG" ? "text-accent" : "text-fg"}`}
            >
              ENG
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

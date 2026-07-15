"use client";

import Image from "next/image";
import { useState } from "react";

export default function AccordionItem({ question }: { question: string }) {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive((v) => !v)}
      aria-pressed={active}
      className={`flex w-full items-center justify-between gap-6 border-b-2 py-3 text-left transition-colors duration-300 ${
        active ? "border-accent" : "border-accent-dark"
      }`}
    >
      <span
        className={`text-[16px] font-bold uppercase leading-[1.4] tracking-[0.04em] transition-colors duration-300 sm:text-[20px] lg:text-[24px] ${
          active ? "text-accent" : "text-fg"
        }`}
      >
        {question}
      </span>
      <Image
        src="/icons/arrow-down-s-line.svg"
        alt=""
        width={42}
        height={42}
        className={`size-[28px] shrink-0 transition-transform duration-300 sm:size-[36px] lg:size-[42px] ${
          active ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

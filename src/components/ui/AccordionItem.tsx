"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type AccordionItemProps = {
  question: string;
  answer: string;
  active: boolean;
  onToggle: () => void;
};

export default function AccordionItem({
  question,
  answer,
  active,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="overflow-hidden rounded-sm border-b border-accent-dark">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={active}
        className={`flex w-full items-center justify-between gap-6 bg-transparent px-1 py-4 text-left transition-colors duration-300 ${
          active ? "border-accent text-accent" : "border-transparent text-fg"
        }`}
      >
        <span className="text-[16px] font-bold uppercase leading-[1.4] tracking-[0.04em] transition-colors duration-300 sm:text-[20px] lg:text-[24px]">
          {question}
        </span>

        <motion.span
          animate={{ rotate: active ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="size-[28px] shrink-0 sm:size-[36px] lg:size-[42px]"
        >
          <Image
            src="/icons/arrow-down-s-line.svg"
            alt=""
            width={42}
            height={42}
            className="size-full"
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {active ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="px-1 pb-5 text-[15px] leading-[1.6] tracking-[0.04em] text-fg/80 sm:text-[16px]"
            >
              {answer}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

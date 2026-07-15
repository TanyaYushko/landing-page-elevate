"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import AccordionItem from "@/components/ui/AccordionItem";
import Reveal from "@/components/ui/Reveal";

const QUESTIONS = [
  {
    question: "can i order only plans or visuals?",
    answer:
      "Yes — you can order only plans or visuals depending on your needs. Every package is designed to stay flexible and premium. ",
  },
  {
    question: "do we take money for the first visit to the facility?",
    answer:
      "The first consultation is included, and we discuss your vision before any fees are confirmed. Our process is transparent and client-first.",
  },
  {
    question: "is it possible to make edits and is the price changing from this?",
    answer:
      "Minor edits are always part of the process. If revisions require significant changes, we will review the scope together and keep you informed.",
  },
  {
    question: "is it possible to make a design only for several rooms?",
    answer:
      "Absolutely. We can design individual rooms or an entire home — each solution is curated with the same premium attention to detail.",
  },
  {
    question: "if the square area of the room is large, will the price increase in connection with this?",
    answer:
      "Pricing reflects the complexity and scope rather than just the area. We tailor each proposal to your project size and desired finish level.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading>popular questions</SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative aspect-[289/221] w-full overflow-hidden sm:w-[62%]">
                <Image
                  src="/images/faq-drafting.jpg"
                  alt="Designer hand drafting an interior floor plan"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 1024px) 22vw, 60vw"
                />
              </div>
              <div className="relative aspect-[464/494] w-full overflow-hidden sm:hidden">
                <Image
                  src="/images/faq-team.jpg"
                  alt="Design team collaborating at a desk"
                  fill
                  className="object-cover opacity-80"
                  sizes="90vw"
                />
              </div>
            </div>
            <Reveal className="mt-6">
              <ArrowLink href="#contact">contact us</ArrowLink>
            </Reveal>
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <div className="relative aspect-[464/494] w-full overflow-hidden">
              <Image
                src="/images/faq-team.jpg"
                alt="Design team collaborating at a desk"
                fill
                className="object-cover opacity-80"
                sizes="30vw"
              />
            </div>
          </div>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {QUESTIONS.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  active={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

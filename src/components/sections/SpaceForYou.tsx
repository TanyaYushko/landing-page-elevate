"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

const SLIDES = ["/01", "/02", "/03"];

export default function SpaceForYou() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4 lg:order-1">
            <p className="max-w-[260px] text-[15px] font-extrabold uppercase leading-[1.3] tracking-[0.04em] text-fg sm:text-[16px] lg:text-[18px]">
              aesthetics above gives us a foundation
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8 lg:order-2">
            <SectionHeading className="lg:text-right">
              our space for you!
            </SectionHeading>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <h3 className="text-[32px] uppercase leading-[1.3] tracking-[0.06em] sm:text-[40px] lg:text-[48px]">
              design
            </h3>
            <div className="relative mt-6 aspect-[771/491] w-full overflow-hidden">
              <Image
                src="/images/space-living-room.png"
                alt="Cozy designed living room with warm lighting"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col">
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-[32px] uppercase leading-[1.3] tracking-[0.06em] sm:text-[40px] lg:text-[48px]">
                projects
              </h3>
            </div>

            <p className="mt-6 max-w-[344px] text-justify text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
              At elevate interiors studio - we bealive that every space has
              the potential to tell a story!
            </p>

            <ArrowLink href="#projects" className="mt-8 self-start">
              view cataloge
            </ArrowLink>

            <div className="mt-10 flex items-end gap-4 sm:gap-6">
              <div className="relative aspect-[222/230] w-[160px] shrink-0 overflow-hidden sm:w-[200px] lg:w-[222px]">
                <Image
                  src="/images/space-kitchen-detail.jpg"
                  alt="Detail shot of a designed kitchen counter"
                  fill
                  className="object-cover"
                  sizes="222px"
                />
              </div>
              <div className="flex h-[160px] items-center gap-3 sm:h-[200px] lg:h-[222px]">
                <div className="flex flex-col items-end gap-3">
                  {SLIDES.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => setActive(i)}
                      className={`font-extrabold uppercase tracking-[0.04em] transition-colors ${
                        active === i
                          ? "text-[18px] text-fg"
                          : "text-[16px] text-fg/50 hover:text-fg/80"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <span className="h-full w-px bg-fg/40" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

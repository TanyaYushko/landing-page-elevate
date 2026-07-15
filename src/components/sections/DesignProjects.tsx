"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

export default function DesignProjects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <Reveal>
            <SectionHeading>Our design projects</SectionHeading>
          </Reveal>
          <Reveal delay={80} className="hidden shrink-0 items-center gap-4 sm:flex">
            <CarouselArrows />
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[464/500] w-full overflow-hidden">
              <Image
                src="/images/project-grey-apartment.jpg"
                alt="Grey Apartment bedroom design project"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes="(min-width: 1024px) 38vw, 90vw"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">
              <p>Year: 2024</p>
              <p>Location: Odesa</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="relative aspect-[287/250] w-full overflow-hidden sm:w-[55%]">
                <Image
                  src="/images/project-residence-mone.jpg"
                  alt="Residence Mone dining area with marble table"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(min-width: 1024px) 20vw, 90vw"
                />
              </div>
              <div>
                <p className="text-[20px] font-bold uppercase tracking-[0.04em] text-accent sm:text-[24px]">
                  Residence mone
                </p>
                <p className="mt-1 text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">
                  Premium redesigne
                </p>
              </div>
            </div>
            <p className="mt-6 text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">
              Grey Apartment
            </p>
            <ArrowLink href="#contact" className="mt-6">
              view project
            </ArrowLink>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3">
            <p className="text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
              We listen to your needs, understand your lifestyle and create
              designs that reflect who you are. With a focus on quality,
              sustainability and aesthetics, we ensure every project feels
              special and unique
            </p>
            <div className="relative mt-6 aspect-[343/250] w-full overflow-hidden">
              <Image
                src="/images/project-elevating-spaces.jpg"
                alt="Elevating Spaces bathroom design detail"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes="(min-width: 1024px) 22vw, 90vw"
              />
            </div>
            <p className="mt-4 text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">
              Elevating Spaces, Inspiring Lives!
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center sm:hidden">
          <CarouselArrows />
        </Reveal>
      </Container>
    </section>
  );
}

function CarouselArrows() {
  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="Previous project"
        className="rounded-full p-1 transition-transform duration-300 hover:-translate-x-0.5 hover:opacity-80"
      >
        <Image src="/icons/chevron-left.svg" alt="" width={36} height={36} />
      </button>
      <button
        aria-label="Next project"
        className="rounded-full p-1 transition-transform duration-300 hover:translate-x-0.5 hover:opacity-80"
      >
        <Image src="/icons/chevron-right.svg" alt="" width={36} height={36} />
      </button>
    </div>
  );
}

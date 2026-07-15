"use client";

import Image from "next/image";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import Reveal from "@/components/ui/Reveal";

const REVIEWS = [
  {
    name: "Samuel Jons",
    date: "18.07.2024",
    avatar: "/images/avatar-samuel.png",
    quote:
      "We worked together on a 1 bedroom apartment, and from the apartment’s design to the support they offered me, I am extremely pleased. They are patient, customer-oriented, experienced and they save you a lot of time and effort. I highly recommend them! Congratulations on the energy and speed you show.",
  },
  {
    name: "Dilan Makkalen",
    date: "23.01.2024",
    avatar: "/images/avatar-dilan.png",
    quote:
      "What a great team! I worked with them last year on my project, and the final result was a place I can call HOME! Yes, the home I had been dreaming of for some time became a reality with their help. They had good ideas and were always available to answer our questions. I highly recommend them!",
  },
  {
    name: "Sandra Walls",
    date: "07.04.2024",
    avatar: "/images/avatar-sandra.png",
    quote:
      "I love my new cosy apartment! Thank you guys, for the attention you paid to my family’s needs, for the fact that you made the most out of the limited space and for the fact that you stuck to the budget! Whenever I hear of someone who is in need of an interior designer, I always recommend your team! Keep up the good work.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <Reveal>
            <SectionHeading>Client reviews</SectionHeading>
          </Reveal>
          <Reveal delay={80} className="flex shrink-0 items-center gap-4">
            <button
              aria-label="Previous review"
              onClick={() => scroll(-1)}
              className="rounded-full p-1 transition-transform duration-300 hover:-translate-x-0.5 hover:opacity-80"
            >
              <Image src="/icons/chevron-left.svg" alt="" width={36} height={36} />
            </button>
            <button
              aria-label="Next review"
              onClick={() => scroll(1)}
              className="rounded-full p-1 transition-transform duration-300 hover:translate-x-0.5 hover:opacity-80"
            >
              <Image src="/icons/chevron-right.svg" alt="" width={36} height={36} />
            </button>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={trackRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 lg:mt-14 lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-auto"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

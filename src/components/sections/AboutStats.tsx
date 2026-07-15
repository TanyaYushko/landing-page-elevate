import Image from "next/image";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "7", label: "Years of expirience" },
  { value: "108", label: "Completed projects" },
  { value: "27", label: "Press and media appearances" },
  { value: "8,563", label: "Square metres" },
];

export default function AboutStats() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-y-10 text-center uppercase sm:grid-cols-4 sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3">
                <p className="font-sans text-[26px] tracking-[0.03em] text-accent sm:text-[32px]">
                  {stat.value}
                </p>
                <p className="max-w-[220px] text-[15px] font-extrabold leading-[1.3] tracking-[0.04em] text-fg sm:text-[16px] lg:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <h3 className="text-[32px] uppercase leading-[1.3] tracking-[0.06em] sm:text-[40px] lg:text-[48px]">
              about us
            </h3>
            <div className="mt-6 max-w-[562px] text-justify text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
              <p>
                Our journey began with a passion for transforming ordinary
                spaces into extraordinary experiences. With over a decade of
                experience in the industry, our team of creative designers,
                architects, and artisans is dedicated to crafting interiors
                that reflect your personality and lifestyle. From concept to
                completion, we focus on every detail to ensure that your
                space is not only beautiful but also functional and
                timeless.
              </p>
            </div>
            <ArrowLink href="#services" className="mt-8">
              read more
            </ArrowLink>
          </Reveal>

          <div className="relative aspect-[661/312] w-full overflow-hidden">
            <Image
              src="/images/about-collage.png"
              alt="Collage of six interior design projects"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <Reveal delay={120}>
            <p className="mt-3 text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">
              &quot;2024 Interior Design Trends to Watch&quot;
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

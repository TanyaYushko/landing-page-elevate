import Image from "next/image";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-[130px] sm:pb-20 sm:pt-[150px] lg:pb-24 lg:pt-[180px]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-x-8 lg:grid-cols-[1fr_363px] lg:gap-x-10">
          <Reveal className="lg:col-start-1 lg:row-start-1">
            <p className="whitespace-nowrap font-script text-[15vw] leading-[1.15] tracking-[0.02em] text-fg sm:text-[64px] md:text-[92px] lg:text-[110px] xl:text-[130px]">
              the{" "}
              <span className="font-sans font-medium uppercase">elevate</span>
            </p>
          </Reveal>

          <Reveal
            delay={80}
            className="lg:col-start-1 lg:row-start-2 lg:-mt-2"
          >
            <p className="font-script text-[16vw] leading-[1.15] tracking-[0.02em] text-fg sm:text-[68px] md:text-[98px] lg:text-[110px] xl:text-[130px]">
              studio
            </p>
          </Reveal>

          <div className="relative lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:self-stretch">
            <Reveal delay={160} className="mt-6 lg:mt-0 lg:h-full">
              <div className="relative aspect-[363/440] w-full max-w-[363px] overflow-hidden bg-[#d9d9d9] lg:h-full lg:max-w-none">
                <Image
                  src="/images/hero-lamps.jpg"
                  alt="Brass pendant lamps hanging in a warm interior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 363px, 90vw"
                />
              </div>
              <p className="mt-3 max-w-[280px] text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
                Discover the art of interior design tailored to your unique
                style
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="mt-2 lg:col-start-1 lg:row-start-3 lg:-mt-1"
          >
            <p className="font-sans text-[13vw] font-medium uppercase leading-[1.15] tracking-[0.02em] text-fg sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[130px]">
              design
            </p>
          </Reveal>

          <Reveal
            delay={200}
            className="mt-8 lg:col-start-1 lg:row-start-4 lg:mt-10"
          >
            <ArrowLink href="#projects">view more</ArrowLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

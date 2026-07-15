import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import AccordionItem from "@/components/ui/AccordionItem";
import Reveal from "@/components/ui/Reveal";

const QUESTIONS = [
  "can i order only plans or visuals?",
  "do we take money for the first visit to the facility?",
  "is it possible to make edits and is the price changing from this?",
  "is it possible to make a design only for several rooms?",
  "if the square area of the room is large, will the price increase in connection with this?",
];

export default function Faq() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading>popular questions</SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
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
            <ArrowLink href="#contact" className="mt-6">
              contact us
            </ArrowLink>
          </Reveal>

          <Reveal delay={80} className="hidden lg:col-span-3 lg:block">
            <div className="relative aspect-[464/494] w-full overflow-hidden">
              <Image
                src="/images/faq-team.jpg"
                alt="Design team collaborating at a desk"
                fill
                className="object-cover opacity-80"
                sizes="30vw"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {QUESTIONS.map((q) => (
                <AccordionItem key={q} question={q} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

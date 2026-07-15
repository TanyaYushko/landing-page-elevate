import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ADVANTAGES = [
  {
    number: "01",
    title: "modern desigh solution",
    description:
      "Aestethic interior desigh is our job, we want you to feel beauty when you find youreslf in your new home!",
  },
  {
    number: "02",
    title: "Design technology",
    description:
      "We work with a 3D model of housing, therefore the drawings, calculation and specifications in the project are clear",
  },
  {
    number: "03",
    title: "detaled design of the project",
    description:
      "In the project we develop joints and junctions of the materials,so that the project is completed perfectly",
  },
  {
    number: "04",
    title: "specialists of difference profile",
    description:
      "Several are working on the project specialists: arhitect, desihner, visualizer and also in our team electrical engineer",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading>advantages in work</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-2 lg:gap-y-20">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.number} delay={i * 80}>
              <div className="flex items-start gap-6 sm:gap-10">
                <p className="font-script text-[76px] leading-[1.2] tracking-[0.02em] text-accent transition-transform duration-500 hover:-translate-y-1 sm:text-[110px] lg:text-[140px]">
                  {item.number}
                </p>
                <div className="pt-3 sm:pt-6">
                  <p className="text-[22px] uppercase leading-[1.4] tracking-[0.04em] text-fg sm:text-[28px] lg:text-[32px]">
                    {item.title}
                  </p>
                  <p className="mt-4 max-w-[420px] text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

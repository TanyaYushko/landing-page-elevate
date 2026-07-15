import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PriceCard from "@/components/ui/PriceCard";
import Reveal from "@/components/ui/Reveal";

const PLANS = [
  {
    title: "Light",
    priceFrom: "$20",
    includesLabel: "The Light package includes:",
    items: [
      "Room measurements",
      "Defining the style and color scheme of the interior",
      "Planning solut ions",
      "3D interior rendering",
    ],
  },
  {
    title: "Standard",
    priceFrom: "$30",
    includesLabel: "Standard package includes:",
    items: [
      "Room measurements",
      "Defining the style and color scheme of the interior",
      "Planning solutions",
      "3D interior rendering",
      "Detailed draft for civil works",
      "Drawings of designer furniture",
    ],
  },
  {
    title: "Premium",
    priceFrom: "$40",
    includesLabel: "Premium package includes:",
    items: [
      "Room measurements",
      "Defining the style and color scheme of the interior",
      "Planning solutions",
      "3D interior rendering",
      "Detailed draft for civil works",
      "Drawings of designer furniture",
      "Author's supervision",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading>Our services</SectionHeading>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-8 border border-accent p-6 sm:p-8 md:grid-cols-3 lg:mt-14 lg:gap-10 lg:p-10">
            {PLANS.map((plan) => (
              <PriceCard key={plan.title} {...plan} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

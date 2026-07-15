import ArrowLink from "@/components/ui/ArrowLink";

export type PriceCardProps = {
  title: string;
  priceFrom: string;
  includesLabel: string;
  items: string[];
};

export default function PriceCard({
  title,
  priceFrom,
  includesLabel,
  items,
}: PriceCardProps) {
  return (
    <div className="flex h-full flex-col items-center gap-6 border border-accent-dark px-4 pb-6 pt-3 text-center transition-colors duration-300 hover:border-accent">
      <p className="text-[28px] uppercase tracking-[0.04em] sm:text-[32px]">
        {title}
      </p>
      <p className="font-script text-[22px] leading-[1.3] tracking-[0.02em] sm:text-[24px]">
        from {priceFrom}
        <br />
        per m²
      </p>
      <span className="h-px w-full bg-accent-dark" />
      <div className="w-full flex-1 text-left">
        <p className="text-[20px] font-bold uppercase leading-[1.4] tracking-[0.04em] sm:text-[24px]">
          {includesLabel}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="h-px w-full bg-accent-dark/70" />
      <ArrowLink href="#contact">order</ArrowLink>
    </div>
  );
}

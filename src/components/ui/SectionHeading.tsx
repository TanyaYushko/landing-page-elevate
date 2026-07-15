import type { ReactNode } from "react";

export default function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[36px] sm:text-[52px] md:text-[64px] lg:text-[86px] leading-[1.3] tracking-[0.05em] uppercase font-normal ${className}`}
    >
      {children}
    </h2>
  );
}

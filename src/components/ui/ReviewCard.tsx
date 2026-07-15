import Image from "next/image";

export type ReviewCardProps = {
  quote: string;
  avatar: string;
  name: string;
  date: string;
};

export default function ReviewCard({
  quote,
  avatar,
  name,
  date,
}: ReviewCardProps) {
  return (
    <div className="flex h-full flex-col gap-5 border-2 border-accent-dark px-3 py-4 transition-colors duration-300 hover:border-accent sm:px-4">
      <Image
        src="/icons/double-quotes-l.svg"
        alt=""
        width={24}
        height={24}
        className="size-6"
      />
      <p className="flex-1 text-justify text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
        {quote}
      </p>
      <span className="h-px w-[139px] bg-fg/40" />
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full sm:size-[90px]">
          <Image src={avatar} alt={name} fill className="object-cover" sizes="90px" />
        </div>
        <p className="text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">{name}</p>
        <p className="text-[15px] tracking-[0.04em] text-fg sm:text-[16px]">/{date}</p>
      </div>
    </div>
  );
}

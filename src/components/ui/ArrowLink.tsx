import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ArrowLinkProps = {
  children: string;
  href?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

export default function ArrowLink({
  children,
  href = "#",
  className = "",
  ...rest
}: ArrowLinkProps) {
  return (
    <Link href={href} className={`link-arrow ${className}`} {...rest}>
      <span>{children}</span>
      <Image
        src="/icons/arrow-outward.svg"
        alt=""
        width={20}
        height={20}
        className="size-[18px] sm:size-[22px]"
        aria-hidden
      />
    </Link>
  );
}

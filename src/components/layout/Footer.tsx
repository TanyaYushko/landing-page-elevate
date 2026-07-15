import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";

const NAV_LINKS = [
  { label: "home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "prices", href: "#services" },
];

const SOCIALS = [
  { icon: "/icons/facebook.svg", label: "Facebook" },
  { icon: "/icons/instagram.svg", label: "Instagram" },
  { icon: "/icons/pinterest.svg", label: "Pinterest" },
  { icon: "/icons/telegram.svg", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-[761px] text-[24px] uppercase leading-[1.4] tracking-[0.04em] sm:text-[28px] lg:text-[32px]">
            Are you ready to design your future home?
          </h2>
          <ArrowLink href="#contact" className="self-start sm:self-auto">
            free consultation
          </ArrowLink>
        </div>

        <div className="mt-10 h-px w-full bg-fg/50 lg:mt-14" />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          <ul className="flex flex-col gap-3 text-[15px] tracking-[0.04em] sm:text-[16px]">
            <li className="flex flex-wrap gap-3">
              <span className="font-extrabold uppercase tracking-[0.04em] text-fg">
                • Phone:
              </span>
              <span className="font-light text-fg">+123-456-7890</span>
            </li>
            <li className="flex flex-wrap gap-3">
              <span className="font-extrabold uppercase tracking-[0.04em] text-fg">
                • Email:
              </span>
              <span className="font-light text-fg">
                contact@elevantstudiodesign.com
              </span>
            </li>
            <li className="flex flex-wrap gap-3">
              <span className="font-extrabold uppercase tracking-[0.04em] text-fg">
                • Address:
              </span>
              <span className="font-light text-fg">
                456 Design Street, Suite 789, Design City, DC 12345
              </span>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[15px] font-extrabold uppercase tracking-[0.04em] text-fg transition-colors hover:text-accent sm:text-[16px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <p className="text-[15px] font-extrabold uppercase tracking-[0.04em] text-fg sm:text-[16px] lg:text-[18px]">
              Lets start to know each user
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-6 items-center justify-center transition-transform duration-300 hover:scale-110 hover:opacity-80"
                >
                  <Image src={social.icon} alt="" width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-[15px] tracking-[0.04em] text-fg sm:text-[16px] lg:mt-20">
          © 2024 Elevate Interiors. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

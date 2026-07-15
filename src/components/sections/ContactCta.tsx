"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

export default function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto w-full max-w-[888px] bg-black/55 px-6 py-8 sm:px-10 sm:py-12">
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-7">
              <h2 className="text-[32px] uppercase leading-[1.3] tracking-[0.06em] sm:text-[40px] lg:text-[48px]">
                Ready to elevate your space?
              </h2>
              <p className="text-[15px] font-extrabold uppercase leading-[1.3] tracking-[0.04em] text-fg sm:text-[18px]">
                We&apos;d love to hear from you. Whether you have a question,
                want to book a consultation or just need some design advice,
                reach out to us!&quot;
              </p>

              <FormField label="Full Name" name="fullName" />
              <FormField label="Phone" name="phone" type="tel" />
              <FormField label="E-mail" name="email" type="email" />

              <label className="flex items-center gap-5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="size-5 shrink-0 accent-accent"
                />
                <span className="text-[15px] tracking-[0.04em] text-cream sm:text-[16px]">
                  Accept our privacy police
                </span>
              </label>
            </div>

            <ArrowLink href="#top" className="self-start">
              send a request
            </ArrowLink>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="border-b border-fg pb-2.5 transition-colors duration-300 focus-within:border-accent">
      <input
        type={type}
        name={name}
        placeholder={label}
        className="w-full bg-transparent text-[15px] tracking-[0.04em] text-cream placeholder:text-cream focus:outline-none sm:text-[16px]"
      />
    </div>
  );
}

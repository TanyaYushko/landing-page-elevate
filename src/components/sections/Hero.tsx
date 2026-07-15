"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const MotionImage = motion(Image);

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-[130px] sm:pb-20 sm:pt-[150px] lg:pb-24 lg:pt-[180px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-x-8 lg:grid-cols-[1fr_363px] lg:gap-x-10">
          <motion.p
            custom={0}
            variants={textVariant}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="lg:col-start-1 lg:row-start-1 whitespace-nowrap font-script text-[15vw] leading-[1.15] tracking-[0.02em] text-fg sm:text-[64px] md:text-[92px] lg:text-[110px] xl:text-[130px]"
          >
            <motion.span
              custom={0}
              variants={textVariant}
              className="inline-block"
            >
              the
            </motion.span>{" "}
            <motion.span
              custom={0.18}
              variants={textVariant}
              className="inline-block font-sans font-medium uppercase"
            >
              elevate
            </motion.span>
          </motion.p>

          <motion.p
            custom={0.35}
            variants={textVariant}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="lg:col-start-1 lg:row-start-2 lg:-mt-2 font-script text-[16vw] leading-[1.15] tracking-[0.02em] text-fg sm:text-[68px] md:text-[98px] lg:text-[110px] xl:text-[130px]"
          >
            studio
          </motion.p>

          <motion.div
            custom={0.45}
            variants={imageVariant}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="relative lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:self-stretch"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -6, 0, 6, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 1.15,
                    }
              }
              className="relative"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
                className="relative aspect-[363/440] w-full max-w-[363px] overflow-hidden bg-[#d9d9d9] lg:h-full lg:max-w-none"
              >
                <MotionImage
                  src="/images/hero-lamps.jpg"
                  alt="Brass pendant lamps hanging in a warm interior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 363px, 90vw"
                />
              </motion.div>
            </motion.div>
            <p className="mt-3 max-w-[280px] text-[15px] leading-[1.4] tracking-[0.04em] text-fg sm:text-[16px]">
              Discover the art of interior design tailored to your unique style
            </p>
          </motion.div>

          <motion.p
            custom={0.55}
            variants={textVariant}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="mt-2 lg:col-start-1 lg:row-start-3 lg:-mt-1 font-sans text-[13vw] font-medium uppercase leading-[1.15] tracking-[0.02em] text-fg sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[130px]"
          >
            design
          </motion.p>

          <motion.div
            custom={0.7}
            variants={textVariant}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="mt-8 lg:col-start-1 lg:row-start-4 lg:mt-10"
          >
            <ArrowLink href="#projects">view more</ArrowLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

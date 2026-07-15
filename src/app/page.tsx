import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SpaceForYou from "@/components/sections/SpaceForYou";
import AboutStats from "@/components/sections/AboutStats";
import Services from "@/components/sections/Services";
import DesignProjects from "@/components/sections/DesignProjects";
import Advantages from "@/components/sections/Advantages";
import Faq from "@/components/sections/Faq";
import ContactCta from "@/components/sections/ContactCta";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SpaceForYou />
        <AboutStats />
        <Services />
        <DesignProjects />
        <Advantages />
        <Faq />
        <ContactCta />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

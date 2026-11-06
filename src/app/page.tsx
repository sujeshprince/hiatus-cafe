import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Story } from "@/components/home/story";
import { MenuSection } from "@/components/home/menu-section";
import { Gallery } from "@/components/home/gallery";
import { WhyHiatus } from "@/components/home/why-hiatus";
import { Experiences } from "@/components/home/experiences";
import { Testimonials } from "@/components/home/testimonials";
import { Location } from "@/components/home/location";
import { ReservationSection } from "@/components/home/reservation-section";
import { ReservationProvider } from "@/components/reservation/reservation-provider";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ReservationProvider>
        <Hero />
        <Marquee />
        <Story />
        <MenuSection />
        <Gallery />
        <WhyHiatus />
        <Experiences />
        <Testimonials />
        <Location />
        <ReservationSection />
      </ReservationProvider>
    </>
  );
}

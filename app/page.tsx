import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
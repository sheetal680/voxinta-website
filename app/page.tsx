import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ComingSoon from "@/components/ComingSoon";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <ComingSoon />
      <Demo />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ComingSoon from "@/components/ComingSoon";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <HowItWorks />
      <Divider />
      <ComingSoon />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
      <Contact />
      <Divider />
      <Team />
      <Footer />
    </main>
  );
}

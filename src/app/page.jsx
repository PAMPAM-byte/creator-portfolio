import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <FeaturedWork />
      <Services />
      <Skills />
      <Process />
      <Contact />
    </main>
  );
}

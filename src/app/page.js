import About from "@/components/pages/home/about";
import Contact from "@/components/pages/home/contact";
import Hero from "@/components/pages/home/hero";
import Portfolio from "@/components/pages/home/portfolio";
import Services from "@/components/pages/home/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

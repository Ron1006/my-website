import Image from "next/image";
import Hero from "./components/Hero";
import ClientSuccess from "./components/ClientSuccess";
import Services from "./components/Services";
import AboutMe from "./components/About";
import About from "./components/About";
import Insights from "./components/Insights";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[#050505]">
      {/* Hero Section (Top of page) */}
      <Hero />

      {/* Clients Section */}
      <ClientSuccess />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Insight Section */}
      <Insights />

    </main>
  );
}

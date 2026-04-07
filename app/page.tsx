import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section (Top of page) */}
      <section className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h1 className="text-5xl font-bold">Crafting Digital Experiences</h1>
      </section>

      {/* Clients Section */}
      <section className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h1 className="text-5xl font-bold">Our Happy Clients</h1>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h2 className="text-4xl font-bold">Services Section</h2>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h2 className="text-4xl font-bold">About Me Section</h2>
      </section>

      {/* Pricing Section (Optional/TBD) */}
      <section id="pricing" className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h2 className="text-4xl font-bold">Pricing Section</h2>
      </section>

      {/* Insight Section */}
      <section id="insight" className="min-h-screen flex items-center justify-center w-full border-b border-gray-800">
        <h2 className="text-4xl font-bold">Insight Section</h2>
      </section>
    </main>
  );
}
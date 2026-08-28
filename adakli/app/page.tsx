import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
import { sections } from "@/data/sections";

export default function Home() {
  return (
    <>
      <Header />
      <SideNav />

      <main>
        <Hero />

        {sections.map((section, i) => (
          <ProductSection
            key={section.id}
            section={section}
            flipped={i % 2 === 1}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

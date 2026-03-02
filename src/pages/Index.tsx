import { NavBar, HeroSection, AboutSection } from "@/components/sections/TopSections";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { AdvantagesSection, CasesSection, DeliverySection, ContactsSection, Footer } from "@/components/sections/BottomSections";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <AdvantagesSection />
      <CasesSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

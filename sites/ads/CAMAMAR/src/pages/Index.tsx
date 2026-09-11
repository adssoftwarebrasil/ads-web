import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import ProductsSection from "@/components/ProductsSection";
import SobreSection from "@/components/SobreSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import GaleriaSection from "@/components/GaleriaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <SobreSection />
      <ProductsSection />
      <DiferenciaisSection />
      <GaleriaSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;

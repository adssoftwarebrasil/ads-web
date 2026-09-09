import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductModal from "./components/ProductModal.jsx";
import WhatsAppLink from "./components/WhatsAppLink.jsx";
import Hero from "./sections/Hero.jsx";
import Catalog from "./sections/Catalog.jsx";
import CustomMade from "./sections/CustomMade.jsx";
import Restoration from "./sections/Restoration.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  const [category, setCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  function selectCategory(nextCategory) {
    setCategory(nextCategory);
    document
      .getElementById("catalogo")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero
          onCategorySelect={selectCategory}
          onProductOpen={setSelectedProduct}
        />
        <Catalog
          category={category}
          onCategoryChange={setCategory}
          onProductOpen={setSelectedProduct}
        />
        <CustomMade />
        <Restoration />
        <Contact />
      </main>
      <Footer />
      <WhatsAppLink
        className="floating-whatsapp"
        aria-label="Conversar com a Wilson Estofados no WhatsApp"
      >
        <span>Vamos conversar?</span>
      </WhatsAppLink>
      {selectedProduct && (
        <ProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import ProductCategories from "./sections/ProductCategories";
import CatalogShowcase from "./sections/CatalogShowcase";
import RecommendationGallery from "./sections/RecommendationGallery";
import ProjectJourney from "./sections/ProjectJourney";
import StoreContact from "./sections/StoreContact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ProductCategories />
        <CatalogShowcase />
        <RecommendationGallery />
        <ProjectJourney />
        <StoreContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

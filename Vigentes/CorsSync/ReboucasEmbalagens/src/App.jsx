import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Audiences from "./sections/Audiences";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import ProductCatalog from "./sections/ProductCatalog";
import Story from "./sections/Story";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Audiences />
      <ProductCatalog />
      <Highlights />
      <Story />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

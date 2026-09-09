import Header from "./components/Header";
import Hero from "./sections/Hero";
import Films from "./sections/Films";
import Care from "./sections/Care";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Films />
        <Care />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

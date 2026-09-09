import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Solutions from "./sections/Solutions.jsx";
import Audience from "./sections/Audience.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import About from "./sections/About.jsx";
import Faq from "./sections/Faq.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Solutions />
        <Audience />
        <Portfolio />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

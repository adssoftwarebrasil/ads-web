import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Solutions from "./sections/Solutions";
import Story from "./sections/Story";
import WorkInMotion from "./sections/WorkInMotion";

function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Solutions />
        <Projects />
        <WorkInMotion />
        <Story />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

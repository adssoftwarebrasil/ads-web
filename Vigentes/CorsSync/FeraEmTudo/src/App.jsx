import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import Categories from './sections/Categories.jsx'
import About from './sections/About.jsx'
import Gallery from './sections/Gallery.jsx'
import Contact from './sections/Contact.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="topline" aria-label="Informações rápidas">
        <div className="container topline__inner">
          <span>Região Noroeste de Goiânia</span>
          <span aria-hidden="true">•</span>
          <span>Atendimento das 08h às 19h</span>
        </div>
      </div>
      <Header />
      <main id="conteudo">
        <Hero />
        <Categories />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

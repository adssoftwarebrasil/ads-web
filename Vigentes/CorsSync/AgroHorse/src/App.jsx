import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import ProductUniverse from './sections/ProductUniverse.jsx'
import Story from './sections/Story.jsx'
import Lookbook from './sections/Lookbook.jsx'
import Values from './sections/Values.jsx'
import Visit from './sections/Visit.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ProductUniverse />
        <Story />
        <Lookbook />
        <Values />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

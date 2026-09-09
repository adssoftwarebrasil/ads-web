import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import About from './sections/About.jsx'
import Categories from './sections/Categories.jsx'
import Hero from './sections/Hero.jsx'
import ProductGallery from './sections/ProductGallery.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Visit from './sections/Visit.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Categories />
        <ProductGallery />
        <About />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

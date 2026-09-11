import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Hero from './sections/Hero.jsx'
import Products from './sections/Products.jsx'
import Story from './sections/Story.jsx'
import ServiceExperience from './sections/ServiceExperience.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Products />
        <Story />
        <ServiceExperience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}


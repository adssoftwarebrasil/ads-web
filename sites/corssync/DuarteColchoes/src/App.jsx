import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import ProductExplorer from './sections/ProductExplorer'
import Showcase from './sections/Showcase'
import Story from './sections/Story'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
      <Header />
      <Hero />
      <TrustBar />
      <ProductExplorer />
      <Showcase />
      <Story />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}


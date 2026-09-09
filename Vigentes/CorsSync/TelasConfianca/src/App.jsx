import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Differentials } from './sections/Differentials'
import { Solutions } from './sections/Solutions'
import { Company } from './sections/Company'
import { Gallery } from './sections/Gallery'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Differentials />
        <Solutions />
        <Company />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}


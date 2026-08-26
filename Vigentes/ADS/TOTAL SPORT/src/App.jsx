import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Servicos from './components/Servicos.jsx'
import Processo from './components/Processo.jsx'
import Sobre from './components/Sobre.jsx'
import Galeria from './components/Galeria.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import FAQ from './components/FAQ.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Servicos />
        <Processo />
        <Sobre />
        <Galeria />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

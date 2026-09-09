import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import QuickFacts from './sections/QuickFacts'
import Services from './sections/Services'
import ModuleRemap from './sections/ModuleRemap'
import Fleets from './sections/Fleets'
import Capabilities from './sections/Capabilities'
import Workshop from './sections/Workshop'
import CustomerCare from './sections/CustomerCare'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Segunda a sexta • 8h às 18h</span>
          <a href="tel:+554535253044">(45) 3525-3044</a>
        </div>
      </div>
      <Header />
      <main id="conteudo">
        <Hero />
        <QuickFacts />
        <Services />
        <ModuleRemap />
        <Fleets />
        <Capabilities />
        <Workshop />
        <CustomerCare />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  )
}

export default App

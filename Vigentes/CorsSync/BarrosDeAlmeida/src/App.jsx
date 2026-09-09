import Header from './components/Header.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import BreadsAndSavories from './sections/BreadsAndSavories.jsx'
import DailyCraft from './sections/DailyCraft.jsx'
import Delights from './sections/Delights.jsx'
import Footer from './sections/Footer.jsx'
import Gallery from './sections/Gallery.jsx'
import Hero from './sections/Hero.jsx'
import Story from './sections/Story.jsx'
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
        <Story />
        <Delights />
        <BreadsAndSavories />
        <DailyCraft />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

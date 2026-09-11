import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Solutions from './sections/Solutions'
import Inventory from './sections/Inventory'
import Story from './sections/Story'
import Gallery from './sections/Gallery'
import Coverage from './sections/Coverage'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Inventory />
        <Story />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

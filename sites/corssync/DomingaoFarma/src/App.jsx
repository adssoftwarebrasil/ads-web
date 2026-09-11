import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { useReveal } from './hooks/useReveal'
import { Categories } from './sections/Categories'
import { Delivery } from './sections/Delivery'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { PromoGallery } from './sections/PromoGallery'
import { Story } from './sections/Story'
import { Visit } from './sections/Visit'

function App() {
  useReveal()

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <PromoGallery />
      <Delivery />
      <Story />
      <Visit />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

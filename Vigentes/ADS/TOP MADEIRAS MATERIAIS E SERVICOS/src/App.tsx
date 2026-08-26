import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

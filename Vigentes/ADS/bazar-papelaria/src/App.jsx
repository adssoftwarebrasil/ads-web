import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Categories />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

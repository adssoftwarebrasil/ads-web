import { ArrowDown, MapPin, MessageCircle } from 'lucide-react'
import heroImage from '../assets/images/fachada-hero-noturna.jpg'
import toastImage from '../assets/images/brinde-canecas.jpg'
import facadeImage from '../assets/images/fachada-barzin.jpg'
import { contact } from '../data/siteData.js'

const tickerItems = ['Chopp Brahma', 'Almoço executivo', 'Petiscos de boteco', 'Brasa & chapa']

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grain" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Barzin de Trindade, GO</p>
          <h1>A mesa tá posta.<br /><em>E o chopp,</em><br />trincando.</h1>
          <p className="hero__lead">
            Comida de boteco, almoço executivo e aquele clima bom para encontrar os amigos, assistir ao jogo e ficar sem pressa.
          </p>
          <div className="hero__actions">
            <a className="button button--red" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" /> Pedir o cardápio
            </a>
            <a className="button button--ghost" href={contact.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin size={19} aria-hidden="true" /> Como chegar
            </a>
          </div>
          <a className="hero__scroll" href="#cardapio">
            <ArrowDown size={17} aria-hidden="true" /> Descubra o Barzin
          </a>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__photo-frame">
            <img src={heroImage} alt="Fachada iluminada do Barzin de Esquina à noite" />
            <div className="hero__since"><strong>Desde</strong><span>jun · 2026</span></div>
          </div>
          <div className="hero__mini hero__mini--toast">
            <img src={toastImage} alt="Brinde com canecas geladas no Barzin" />
          </div>
          <div className="hero__mini hero__mini--facade">
            <img src={facadeImage} alt="Fachada vermelha do Barzin de Esquina" />
          </div>
          <p className="hero__handwritten">vai ver se eu tô<br />na esquina.</p>
        </div>
      </div>

      <div className="ticker" aria-label="Destaques do cardápio">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b aria-hidden="true">✦</b></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

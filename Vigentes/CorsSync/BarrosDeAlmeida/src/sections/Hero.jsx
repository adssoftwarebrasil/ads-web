import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { assets, contact } from '../data/siteData.js'

const ribbonItems = ['Pão francês', 'Pão de queijo', 'Pão quente', 'Doces', 'Sonhos', 'Pudins']

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grain" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span aria-hidden="true">✦</span>
            Tradição de família há mais de 43 anos
          </p>
          <h1>
            Tem coisa que o tempo só deixa <em>mais gostosa.</em>
          </h1>
          <p className="hero__lead">
            Receitas próprias, ingredientes selecionados e o cuidado de quem transforma cada fornada em
            memória boa.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Pedir pelo WhatsApp
            </a>
            <a className="button button--text" href="#delicias">
              Ver nossas delícias
              <ArrowDown size={19} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero__proofs" aria-label="Diferenciais da Padaria A Moderna">
            <li>Sem pré-misturas</li>
            <li>Produção artesanal</li>
            <li>Feito diariamente</li>
          </ul>
        </div>

        <div className="hero__visual" aria-label="Delícias preparadas pela Padaria A Moderna">
          <div className="hero__image hero__image--main">
            <img src={assets.sonhoCremeChocolate} alt="Sonho artesanal recheado com creme e chocolate" />
          </div>
          <div className="hero__image hero__image--accent">
            <img src={assets.paoFrances} alt="Pães franceses dourados preparados pela Padaria A Moderna" />
          </div>
          <div className="hero__stamp" aria-label="Aberto de segunda a sexta a partir das 5h30">
            <small>Portas abertas</small>
            <strong>5h30</strong>
            <span>seg — sex</span>
          </div>
          <a
            className="hero__address"
            href={contact.mapsHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver endereço da Padaria A Moderna no mapa"
          >
            <span>{contact.address}</span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="flavor-ribbon" aria-label="Produtos da padaria">
        <div className="flavor-ribbon__track">
          {[...ribbonItems, ...ribbonItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i aria-hidden="true">◆</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

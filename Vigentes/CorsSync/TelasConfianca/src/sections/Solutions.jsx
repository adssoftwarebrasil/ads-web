import { ArrowRight, CheckCircle2 } from 'lucide-react'
import malha from '../assets/malha-ondulada.jpeg'
import telasRurais from '../assets/telas-rurais.jpeg'
import { contact, solutions } from '../data'
import { Reveal } from '../components/Reveal'

export function Solutions() {
  return (
    <section className="solutions section" id="solucoes">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--blue"><span /> Soluções para cercar e proteger</p>
            <h2>Do arame ao cercamento completo.</h2>
          </div>
          <p>Uma linha completa para diferentes aplicações, com orientação de quem conhece o produto e entende a necessidade de cada projeto.</p>
        </div>

        <div className="solutions__grid">
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} className={`solution-card${index === 0 ? ' solution-card--featured' : ''}`} delay={(index % 4) * 60}>
                <span className="solution-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="icon-box"><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            )
          })}
        </div>

        <div className="product-focus">
          <div className="product-focus__image product-focus__image--main">
            <img src={telasRurais} alt="Rolos de telas galvanizadas disponíveis na Telas Confiança" loading="lazy" />
          </div>
          <div className="product-focus__content">
            <p className="eyebrow eyebrow--light"><span /> Escolha com segurança</p>
            <h2>Resistência certa para cada aplicação.</h2>
            <p>Da área urbana ao campo, a equipe ajuda você a identificar o tipo de tela, arame ou acabamento mais adequado para o seu projeto.</p>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> Soluções residenciais e comerciais</li>
              <li><CheckCircle2 aria-hidden="true" /> Cercamentos industriais e rurais</li>
              <li><CheckCircle2 aria-hidden="true" /> Produtos e acessórios em um só lugar</li>
            </ul>
            <a className="text-link" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Conversar com um especialista <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="product-focus__image product-focus__image--detail">
            <img src={malha} alt="Detalhe de malha metálica comercializada pela Telas Confiança" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}


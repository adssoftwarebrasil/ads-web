import { ArrowRight, MapPin } from 'lucide-react'
import fachada from '../assets/fachada.png'
import producao from '../assets/producao-telas.jpeg'
import { audiences, contact } from '../data'
import { Reveal } from '../components/Reveal'

export function Company() {
  return (
    <section className="company section" id="empresa">
      <div className="container company__grid">
        <Reveal className="company__visual">
          <div className="company__photo company__photo--facade">
            <img src={fachada} alt="Fachada da Telas e Arames Confiança na Rua Castro Alves, em Maringá" loading="lazy" />
          </div>
          <div className="company__photo company__photo--production">
            <img src={producao} alt="Produção de telas na fábrica da Telas Confiança" loading="lazy" />
          </div>
          <div className="company__since"><strong>2002</strong><span>o início de uma história de confiança</span></div>
        </Reveal>

        <Reveal className="company__content" delay={120}>
          <p className="eyebrow eyebrow--blue"><span /> Empresa local, experiência real</p>
          <h2>Confiança que se constrói há mais de duas décadas.</h2>
          <p>A Telas e Arames Confiança nasceu em Maringá em 2002 e reúne fabricação, variedade de produtos e atendimento próximo para cercamentos de diferentes portes.</p>
          <p>Da orientação inicial à entrega, o objetivo é facilitar cada escolha com soluções resistentes e excelente custo-benefício.</p>
          <a className="location-card" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            <span className="icon-box"><MapPin aria-hidden="true" /></span>
            <span><small>Visite nossa loja</small><strong>{contact.address}</strong><span>{contact.postalCode}</span></span>
            <ArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <div className="container audiences">
        <p>Atendimento para</p>
        <div className="audiences__list">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>
      </div>
    </section>
  )
}


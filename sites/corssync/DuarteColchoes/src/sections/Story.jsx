import { ArrowRight, BriefcaseBusiness, CalendarDays } from 'lucide-react'
import Reveal from '../components/Reveal'
import { createWhatsAppLink, storyImages } from '../data/siteData'

export default function Story() {
  return (
    <section className="story" id="historia">
      <div className="container story__grid">
        <Reveal className="story__visual">
          <div className="story__image story__image--main">
            <img src={storyImages.store} alt="Interior da Duarte Colchões com modelo Petrus Premium em exposição" loading="lazy" />
          </div>
          <div className="story__image story__image--detail">
            <img src={storyImages.bedroom} alt="Colchão em quarto aconchegante" loading="lazy" />
          </div>
          <div className="story__stamp" aria-hidden="true">
            <span>feito para</span>
            <strong>descansar</strong>
          </div>
        </Reveal>

        <Reveal className="story__content" delay={80}>
          <p className="eyebrow">Experiência que virou propósito</p>
          <h2>Conhecimento de mercado. Atendimento de dono.</h2>
          <p className="story__lead">
            A Duarte Colchões nasceu da decisão de transformar uma longa experiência no setor em um negócio próprio, próximo e transparente.
          </p>
          <p>
            Antes de abrir a empresa, o fundador trabalhou por 12 anos na Ortobom — primeiro como representante comercial e depois na supervisão de equipes. Hoje, coloca esse repertório a serviço de cada cliente.
          </p>
          <div className="story__facts">
            <div>
              <BriefcaseBusiness size={22} aria-hidden="true" />
              <strong>12 anos</strong>
              <span>de experiência anterior no setor</span>
            </div>
            <div>
              <CalendarDays size={22} aria-hidden="true" />
              <strong>Mais de 3 anos</strong>
              <span>construindo a história da Duarte</span>
            </div>
          </div>
          <a className="text-link" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            Converse com quem entende
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}


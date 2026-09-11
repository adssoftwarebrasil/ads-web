import { ArrowRight, CheckCircle2, Factory, MessageCircle } from 'lucide-react'
import fabrica from '../assets/fabrica-ampla.jpeg'
import { contact } from '../data'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow"><span /> Desde 2002 em Maringá</p>
          <h1>Soluções completas em <em>Telas, Alambrados e Arames</em> para Maringá e região.</h1>
          <p className="hero__lead">
            Atendimento especializado, produtos de alta resistência e agilidade para cercamentos residenciais, empresariais, industriais e rurais.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar orçamento <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
            </a>
          </div>
          <div className="hero__proof" aria-label="Diferenciais em destaque">
            <span><CheckCircle2 aria-hidden="true" /> Atendimento especializado</span>
            <span><CheckCircle2 aria-hidden="true" /> Entrega rápida</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img src={fabrica} alt="Interior da fábrica da Telas e Arames Confiança em Maringá" />
          </div>
          <div className="hero__stat hero__stat--years">
            <strong>20<span>+</span></strong>
            <span>anos de<br />experiência</span>
          </div>
          <div className="hero__stat hero__stat--factory">
            <Factory aria-hidden="true" />
            <span><strong>Fabricação local</strong> em Maringá/PR</span>
          </div>
        </div>
      </div>
    </section>
  )
}


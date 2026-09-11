import { ArrowUpRight, Check, PhoneCall } from 'lucide-react'
import Reveal from '../components/Reveal'
import heroImage from '../assets/fachada-casa-das-oficinas.jpg'
import { whatsappUrl } from '../data/siteData'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__stripe" aria-hidden="true" />
      <div className="container hero__grid">
        <Reveal className="hero__content">
          <p className="eyebrow"><span /> Autopeças · distribuição · serviços</p>
          <h1>Peça certa.<br />Serviço bem feito.<br /><em>Seu carro em frente.</em></h1>
          <p className="hero__lead">
            Do balcão ao box, a Casa das Oficinas reúne variedade de autopeças,
            atendimento para oficinas e cuidado automotivo em Feira de Santana.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Encontrar uma peça <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button--text" href="tel:+557536148613">
              <PhoneCall aria-hidden="true" /> Ligar agora
            </a>
          </div>

          <div className="hero__checks" aria-label="Diferenciais">
            <span><Check aria-hidden="true" /> Nacionais e importados</span>
            <span><Check aria-hidden="true" /> Varejo e distribuição</span>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={140}>
          <div className="hero__photo-frame">
            <img
              src={heroImage}
              alt="Fachada da Casa das Oficinas em Feira de Santana"
              fetchPriority="high"
            />
            <div className="hero__photo-overlay" aria-hidden="true" />
          </div>
          <div className="hero__since">
            <strong>Desde</strong>
            <span>1999</span>
          </div>
          <div className="hero__caption">
            <span className="hero__caption-number">01</span>
            <span>Rua Carlos Valadares, 110<br />Centro · Feira de Santana</span>
          </div>
        </Reveal>
      </div>

      <div className="hero__rail" aria-label="Principais soluções">
        <div className="container hero__rail-inner">
          <span>Peças no varejo</span>
          <span>Distribuição para oficinas</span>
          <span>Manutenção e reparos</span>
        </div>
      </div>
    </section>
  )
}

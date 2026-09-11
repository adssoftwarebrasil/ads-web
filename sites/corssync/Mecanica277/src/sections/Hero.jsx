import { ArrowDownRight, ArrowRight, CheckCircle2, Gauge, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import { contact, heroImage } from '../data/siteData'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal>
            <p className="hero__kicker"><span>8 anos de experiência</span> em Foz do Iguaçu</p>
            <h1>Precisão na oficina.<br /><em>Confiança</em> na estrada.</h1>
            <p className="hero__copy">
              Manutenção completa para veículos leves, pick-ups, SUVs, importados, vans e linha pesada — com diagnóstico moderno, agilidade e cuidado em cada etapa.
            </p>
            <div className="hero__actions">
              <a className="button button--yellow" href={contact.whatsapp} target="_blank" rel="noreferrer">
                Solicitar atendimento <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#servicos">Conhecer os serviços <ArrowDownRight aria-hidden="true" /></a>
            </div>
          </Reveal>
          <Reveal className="hero__proof" delay={130}>
            <span><ShieldCheck aria-hidden="true" /> 90 dias de garantia</span>
            <span><Gauge aria-hidden="true" /> Diagnóstico preciso</span>
            <span><CheckCircle2 aria-hidden="true" /> Peças de procedência</span>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={90}>
          <div className="hero__image-wrap">
            <img src={heroImage} alt="Fachada grafite e amarela da Mecânica 277 em Foz do Iguaçu" />
            <span className="hero__image-index">277</span>
            <div className="hero__image-caption">
              <span className="status-dot" />
              <div><strong>Oficina multimarcas</strong><small>Estrutura para diferentes portes</small></div>
            </div>
          </div>
          <div className="hero__badge" aria-label="Atendimento com garantia">
            <strong>90</strong><span>dias de<br />garantia</span>
          </div>
        </Reveal>
      </div>
      <a className="hero__scroll" href="#diferenciais" aria-label="Rolar para os diferenciais">
        <span>Explore</span><ArrowDownRight />
      </a>
    </section>
  )
}

export default Hero

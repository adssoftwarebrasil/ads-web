import { ArrowDown, ArrowUpRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react'
import heroImage from '../assets/images/seguranca-integrada.webp'
import goldBadge from '../assets/images/twa-revenda-ouro.png'
import { createWhatsAppUrl } from '../data/siteData'

const trustItems = [
  { icon: ShieldCheck, label: 'Revenda Ouro Intelbras' },
  { icon: Building2, label: 'Projetos para construção civil' },
  { icon: CheckCircle2, label: 'Atendimento para condomínios' },
]

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy" data-reveal>
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Tecnologia e confiança desde 2009
          </div>

          <h1>
            Tecnologia que integra.
            <span> Tranquilidade que permanece.</span>
          </h1>

          <p className="hero-description">
            Sistemas eletrônicos, automação e telecom com equipamentos de qualidade, instalação
            precisa e uma equipe preparada para entregar a melhor solução em cada projeto.
          </p>

          <div className="hero-actions">
            <a
              className="button button--accent button--large"
              href={createWhatsAppUrl('Olá! Gostaria de solicitar um orçamento com a TWA Tecnologia.')}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="button button--ghost button--large" href="#servicos">
              Ver soluções
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-trust-list" aria-label="Destaques da TWA Tecnologia">
            {trustItems.map(({ icon: Icon, label }) => (
              <div className="hero-trust-item" key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src={heroImage}
              alt="Central integrada de monitoramento e segurança eletrônica"
              fetchPriority="high"
            />
            <div className="hero-image-overlay" aria-hidden="true" />

            <div className="hero-live-card">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>Sistemas integrados</strong>
                <small>Projeto personalizado</small>
              </div>
            </div>

            <div className="hero-location-card">
              <strong>BC + região</strong>
              <span>Atendimento técnico especializado</span>
            </div>
          </div>

          <img
            className="hero-gold-badge"
            src={goldBadge}
            alt="TWA Tecnologia — Revenda Ouro Intelbras"
          />
        </div>
      </div>

      <div className="container hero-metrics" data-reveal>
        <div>
          <strong>2009</strong>
          <span>ano de fundação</span>
        </div>
        <div>
          <strong>80+</strong>
          <span>obras entregues</span>
        </div>
        <div>
          <strong>4 cidades</strong>
          <span>na área de atendimento</span>
        </div>
        <div>
          <strong>3 frentes</strong>
          <span>empresas, condomínios e obras</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

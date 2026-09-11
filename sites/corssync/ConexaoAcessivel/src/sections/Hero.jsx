import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import heroImage from '../assets/hero-conexao-acessivel.png'
import { whatsappUrl } from '../data/siteData'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-route" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Consultoria especializada em acessibilidade arquitetônica</p>
          <h1>Acessibilidade começa no projeto. E se comprova em cada percurso.</h1>
          <p className="hero-lead">
            Soluções técnicas para transformar edificações e projetos em espaços mais seguros, autônomos e inclusivos.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar uma análise <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#solucoes">
              Conhecer as soluções <ArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-proof" aria-label="Experiência da Conexão Acessível">
            <div><strong>15+</strong><span>anos de experiência da especialista</span></div>
            <div><strong>9</strong><span>anos de atuação da empresa</span></div>
            <div><strong>Brasil</strong><span>atendimento nacional</span></div>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-frame">
            <img
              src={heroImage}
              alt="Projeto de área externa com rota acessível, estacionamento, rampa e sinalização tátil"
            />
          </div>
          <div className="hero-note">
            <CheckCircle2 aria-hidden="true" />
            <div>
              <strong>Técnica que orienta escolhas</strong>
              <span>Do diagnóstico à solução aplicável.</span>
            </div>
          </div>
          <div className="hero-axis" aria-hidden="true"><span>01</span><span>rota acessível</span></div>
        </div>
      </div>

      <div className="container credibility-bar" data-reveal>
        <span>Projetos</span><i aria-hidden="true" /><span>Laudos</span><i aria-hidden="true" />
        <span>Consultoria</span><i aria-hidden="true" /><span>Treinamentos</span>
      </div>
    </section>
  )
}

export default Hero

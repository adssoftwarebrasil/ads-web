import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import motorImage from '../assets/media/motor-detalhado.webp'
import facadeImage from '../assets/media/fachada-flex-garagem.webp'

const proofPoints = ['Produtos profissionais', 'Técnicas avançadas', 'Acabamento minucioso']

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--lime">
              <span /> Estética automotiva · Barra Funda
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Cuidado que você <span>sente.</span>
              <br />
              Resultado que você <em>vê.</em>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="hero__lead">
              Detailing premium para renovar, proteger e valorizar o seu veículo — com técnica, precisão e atenção real a cada superfície.
            </p>
          </Reveal>
          <Reveal className="hero__actions" delay={220}>
            <a
              className="button button--lime button--featured"
              href="https://wa.me/5511911396107?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Flex%20Garagem."
              target="_blank"
              rel="noreferrer"
            >
              Quero cuidar do meu carro
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#servicos">
              Explorar serviços <ArrowDown aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="hero__checks" delay={290}>
            {proofPoints.map((item) => (
              <span key={item}>
                <Check aria-hidden="true" /> {item}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={120}>
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src={motorImage}
              alt="Motor de veículo após detalhamento técnico na Flex Garagem"
              fetchPriority="high"
            />
            <div className="hero__image-shade" aria-hidden="true" />
            <div className="hero__stamp">
              <strong>5+</strong>
              <span>anos de experiência</span>
            </div>
            <p className="hero__image-label">Precisão em cada detalhe</p>
          </div>
          <div className="hero__mini-card">
            <img src={facadeImage} alt="Fachada da Flex Garagem na Barra Funda" />
            <div>
              <span>Nossa casa</span>
              <strong>Barra Funda · SP</strong>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero__rail" aria-label="Informações da Flex Garagem">
        <div className="container hero__rail-inner">
          <p><strong>2020</strong><span>Fundação</span></p>
          <p><strong>3M</strong><span>Representante autorizado</span></p>
          <p><strong>Premium</strong><span>Detalhamento automotivo</span></p>
          <p><strong>Proteção</strong><span>Conservação e valorização</span></p>
        </div>
      </div>
    </section>
  )
}

export default Hero

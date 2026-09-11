import { ArrowDown, ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import rolamento from '../assets/rolamento-timken.png'
import graxa from '../assets/graxa-skf.png'
import fachada from '../assets/fachada-feira.png'

const whatsappUrl =
  'https://wa.me/557536250670?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__mechanical-ring" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--yellow">Empresa familiar · 60 anos de experiência</p>
            <h1 id="hero-title">
              Tudo em <span>movimento.</span>
            </h1>
            <p className="hero__lead">
              Rolamentos e componentes industriais com atendimento próximo, resposta ágil e a
              experiência de quem conhece cada detalhe.
            </p>
            <div className="hero__actions">
              <a
                className="button button--yellow"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" size={20} /> Solicitar orçamento
              </a>
              <a className="text-link text-link--light" href="#produtos">
                Ver linha de produtos <ArrowDown aria-hidden="true" size={18} />
              </a>
            </div>
            <ul className="hero__proof" aria-label="Diferenciais em destaque">
              <li>
                <Check aria-hidden="true" /> Atendimento personalizado
              </li>
              <li>
                <Check aria-hidden="true" /> Entrega com pontualidade
              </li>
              <li>
                <Check aria-hidden="true" /> Preço justo e competitivo
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="hero-collage" aria-label="Produtos e loja Feira Rolamentos">
          <Reveal className="hero-collage__main" delay={100}>
            <div className="hero-collage__label">
              <span>01</span>
              Rolamentos
            </div>
            <img src={rolamento} alt="Rolamento comercializado pela Feira Rolamentos" />
            <div className="hero-collage__arrow" aria-hidden="true">
              <ArrowUpRight />
            </div>
          </Reveal>
          <Reveal className="hero-collage__side" delay={180}>
            <div className="hero-collage__label hero-collage__label--dark">
              <span>02</span>
              Lubrificação
            </div>
            <img src={graxa} alt="Graxa para rolamentos" />
          </Reveal>
          <Reveal className="hero-collage__store" delay={240}>
            <img src={fachada} alt="Fachada da Feira Rolamentos em Feira de Santana" />
            <div className="hero-collage__store-caption">
              <span>Feira de Santana · BA</span>
              <strong>Conte com quem entende.</strong>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div>
          <span>Rolamentos</span><i />
          <span>Mancais</span><i />
          <span>Retentores</span><i />
          <span>Correias</span><i />
          <span>Correntes</span><i />
          <span>Lubrificantes</span>
        </div>
      </div>
    </section>
  )
}


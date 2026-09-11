import { ArrowDown, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import sandaliaBronze from '../assets/products/catalogo-agosto/sandalia-metalizada-bronze.png'
import rasteiraCaramelo from '../assets/products/catalogo-agosto/rasteira-caramelo-fivela-dourada.png'
import tenisOffWhite from '../assets/products/catalogo-agosto/tenis-casual-masculino-off-white.png'

const whatsappUrl =
  'https://wa.me/556492674193?text=Ol%C3%A1%2C%20Jud%C3%A1%20Cal%C3%A7ados!%20Quero%20ver%20as%20novidades.'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__ornament" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Calçados, roupas e acessórios</p>
          <h1>Estilo para acompanhar <em>cada passo.</em></h1>
          <p className="hero__lead">
            Qualidade, conforto e escolhas cheias de personalidade para toda a família, com atendimento próximo em Professor Jamil.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#novidades">
              Ver novidades <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button button--line" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Chamar no WhatsApp
            </a>
          </div>
          <div className="hero__facts" aria-label="Diferenciais da Judá Calçados">
            <span>Para toda a família</span>
            <span>Atendimento personalizado</span>
            <span>Novidades frequentes</span>
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__image hero__image--main">
            <img src={sandaliaBronze} alt="Sandália metalizada bronze da Judá Calçados" />
          </div>
          <div className="hero__image hero__image--top">
            <img src={tenisOffWhite} alt="Tênis casual masculino off-white da Judá Calçados" />
          </div>
          <div className="hero__image hero__image--bottom">
            <img src={rasteiraCaramelo} alt="Rasteira caramelo com fivela dourada da Judá Calçados" />
          </div>
          <a className="hero__seal" href="#novidades" aria-label="Ir para os modelos em destaque">
            <span>Veja as</span>
            novidades
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

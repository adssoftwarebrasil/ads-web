import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin, MessageCircle } from 'lucide-react'
import storefrontImage from '../assets/fachada-polipel-nova.png'
import { WHATSAPP_LINK } from '../data.js'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Papelaria + embalagens em Goiânia</p>
          <h1>Tudo para <em>embalar,</em> organizar e criar.</h1>
          <p className="hero__lead">
            Soluções para empresas, comércios, escritórios e para o seu dia a dia — com variedade, qualidade e atendimento próximo.
          </p>
          <div className="hero__actions">
            <a className="button button--yellow" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" /> Chamar no WhatsApp
            </a>
            <a className="text-link text-link--light" href="#produtos">
              Explorar produtos <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero__checks" aria-label="Destaques">
            <li><CheckCircle2 aria-hidden="true" /> Atendimento rápido</li>
            <li><CheckCircle2 aria-hidden="true" /> Preços justos</li>
            <li><CheckCircle2 aria-hidden="true" /> Produtos de qualidade</li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__photo-frame">
            <img
              src={storefrontImage}
              alt="Fachada da loja Polipel Papelaria e Embalagens em Goiânia"
              width="1280"
              height="720"
            />
            <div className="hero__location-card">
              <MapPin aria-hidden="true" />
              <span><small>Estamos no</small>Setor Centro-Oeste</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </div>
          <div className="hero__sticker" aria-hidden="true">Goiânia<br />e região</div>
        </div>
      </div>
    </section>
  )
}

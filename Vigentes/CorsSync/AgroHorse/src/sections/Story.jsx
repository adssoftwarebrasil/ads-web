import { ArrowRight, Sparkles } from 'lucide-react'
import { storyImages } from '../data/catalog.js'

function Story() {
  return (
    <section className="story section-space" id="historia" aria-labelledby="story-title">
      <div className="story-texture" aria-hidden="true" />
      <div className="shell story-grid">
        <div className="story-visual">
          <img className="story-main" src={storyImages.main} alt="Interior da loja com grande variedade de botas country" loading="lazy" />
          <img className="story-detail" src={storyImages.detail} alt="Fivelas western com diferentes acabamentos" loading="lazy" />
          <div className="story-number" aria-label="12 anos de história"><strong>12</strong><span>anos de<br />história</span></div>
        </div>

        <div className="story-copy">
          <p className="eyebrow eyebrow-light"><span /> Nossa essência</p>
          <h2 id="story-title">Não vendemos apenas esse estilo de vida. <em>Nós o vivemos.</em></h2>
          <p className="story-intro">
            A AgroHorse Western nasceu de uma paixão que sempre fez parte da nossa história:
            o campo, os cavalos e o rodeio.
          </p>
          <p>
            A loja surgiu para trazer a Caldas Novas produtos country de qualidade, com variedade
            e preço justo. Depois de desafios, muito trabalho e relações construídas com honestidade,
            seguimos fazendo o que sabemos: escolher cada peça com conhecimento e autenticidade.
          </p>
          <div className="story-meaning">
            <div><span>Agro</span><p>Nossas raízes no campo.</p></div>
            <div><span>Horse</span><p>A paixão pelos cavalos.</p></div>
            <div><span>Western</span><p>Tradição e autenticidade.</p></div>
          </div>
          <a className="story-link" href="#novidades">
            <Sparkles size={18} aria-hidden="true" /> Conheça o nosso universo <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Story

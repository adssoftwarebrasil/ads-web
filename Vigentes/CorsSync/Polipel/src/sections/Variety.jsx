import { ArrowUpRight } from 'lucide-react'
import pencilsImage from '../assets/lapis-multicolor.jpeg'
import paperImage from '../assets/papel-report-a4.jpeg'
import { WHATSAPP_LINK } from '../data.js'

export function Variety() {
  return (
    <section className="variety section" id="variedade" aria-labelledby="variety-title">
      <div className="container variety__inner">
        <div className="variety__copy" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Variedade Polipel</p>
          <h2 id="variety-title">Da folha em branco à entrega pronta.</h2>
          <p>
            Papel A4, itens de papelaria, materiais para escritório, sacolas, caixas e embalagens: escolha com a ajuda de quem entende da rotina de empresas e clientes de Goiânia.
          </p>
          <a className="button button--white" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Consultar disponibilidade <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="product-collage" data-reveal>
          <figure className="product-photo product-photo--paper">
            <img src={paperImage} alt="Pacotes de papel A4 disponíveis na Polipel" width="520" height="920" loading="lazy" />
            <figcaption><span>Escritório</span>Papel e produtividade</figcaption>
          </figure>
          <figure className="product-photo product-photo--color">
            <img src={pencilsImage} alt="Caixas de lápis de cor em diferentes paletas" width="913" height="812" loading="lazy" />
            <figcaption><span>Papelaria</span>Cor para suas ideias</figcaption>
          </figure>
          <div className="collage-note" aria-hidden="true">Escolha.<br />Leve.<br />Resolva.</div>
        </div>
      </div>
    </section>
  )
}

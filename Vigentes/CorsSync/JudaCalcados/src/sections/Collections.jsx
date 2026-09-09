import { ArrowUpRight } from 'lucide-react'
import sandaliaNude from '../assets/products/catalogo-agosto/sandalia-nude-tiras-trancadas.png'
import tenisPreto from '../assets/products/catalogo-agosto/tenis-casual-masculino-preto.png'
import sandaliaPrata from '../assets/products/catalogo-agosto/sandalia-metalizada-prata.png'

const collections = [
  {
    title: 'Feminino',
    text: 'Do conforto do dia a dia aos detalhes que iluminam a produção.',
    image: sandaliaNude,
    alt: 'Sandália feminina nude com tiras trançadas',
  },
  {
    title: 'Masculino',
    text: 'Modelos casuais para unir conforto, qualidade e personalidade.',
    image: tenisPreto,
    alt: 'Tênis casual masculino preto com acabamento caramelo',
  },
  {
    title: 'Ocasiões especiais',
    text: 'Metalizados e acabamentos marcantes para completar produções especiais.',
    image: sandaliaPrata,
    alt: 'Sandália feminina metalizada prata com salto bloco',
  },
]

export default function Collections() {
  return (
    <section className="section collections" id="para-voce">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Para todos os estilos</p>
            <h2>Escolhas que combinam com o seu momento.</h2>
          </div>
          <p>Variedade para encontrar conforto, personalidade e aquele detalhe especial em um só lugar.</p>
        </div>

        <div className="collections__grid">
          {collections.map((collection, index) => (
            <a className="collection-card" href="#novidades" key={collection.title} data-reveal>
              <img src={collection.image} alt={collection.alt} loading="lazy" />
              <div className="collection-card__overlay" />
              <div className="collection-card__index">0{index + 1}</div>
              <div className="collection-card__content">
                <h3>{collection.title}</h3>
                <p>{collection.text}</p>
              </div>
              <span className="collection-card__arrow"><ArrowUpRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

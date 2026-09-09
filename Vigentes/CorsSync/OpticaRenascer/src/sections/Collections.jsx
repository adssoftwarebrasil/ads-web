import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import framesPair from '../assets/products/frames-pair.jpg'
import solarGold from '../assets/products/solar-gold-angle.jpg'
import solarBlue from '../assets/products/solar-blue-angle.jpg'
import { links } from '../data/siteData.js'

const collections = [
  {
    kicker: 'Conforto + personalidade',
    title: 'Óculos de grau',
    text: 'Armações femininas, masculinas e infantis para diferentes estilos e necessidades.',
    image: framesPair,
    alt: 'Armação de grau metálica e óculos de sol disponíveis na Óptica Renascer',
  },
  {
    kicker: 'Proteção + presença',
    title: 'Óculos de sol',
    text: 'Modelos clássicos, marcantes, esportivos e polarizados para acompanhar sua rotina.',
    image: solarGold,
    alt: 'Óculos de sol aviador dourado com lentes em degradê',
  },
  {
    kicker: 'Tendências para você',
    title: 'Armações com atitude',
    text: 'Cores, formatos e acabamentos para transformar os óculos em parte do seu estilo.',
    image: solarBlue,
    alt: 'Óculos de sol aviador dourado com lentes azuis',
  },
]

function Collections() {
  return (
    <section className="collections section" id="oculos">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Escolha o que combina com você"
            title="Um modelo para cada versão sua."
            text="Da armação discreta ao solar que vira protagonista, encontre opções para todas as idades, rotinas e estilos."
          />
        </div>

        <div className="collections__grid">
          {collections.map((item, index) => (
            <article className="collection-card" key={item.title} data-reveal style={{ '--delay': index * 90 + 'ms' }}>
              <div className="collection-card__photo">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="collection-card__content">
                <p>{item.kicker}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
                <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label={'Consultar ' + item.title + ' pelo WhatsApp'}>
                  Quero conhecer
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="brand-note" data-reveal>
          <span>Modelos selecionados para diferentes estilos</span>
          <div aria-label="Marcas e categorias disponíveis">
            <strong>Ray-Ban</strong>
            <i aria-hidden="true" />
            <strong>Oakley</strong>
            <i aria-hidden="true" />
            <strong>Feminino</strong>
            <i aria-hidden="true" />
            <strong>Masculino</strong>
            <i aria-hidden="true" />
            <strong>Infantil</strong>
          </div>
          <small>Consulte a disponibilidade de modelos na loja.</small>
        </div>
      </div>
    </section>
  )
}

export default Collections

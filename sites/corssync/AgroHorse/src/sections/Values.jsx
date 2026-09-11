import { BadgeCheck, Handshake, PackageCheck } from 'lucide-react'
import { editorialImages } from '../data/catalog.js'

const values = [
  {
    icon: BadgeCheck,
    title: 'Escolha com conhecimento',
    text: 'Cada produto passa pelo olhar de quem conhece de verdade a rotina e a cultura country.',
  },
  {
    icon: PackageCheck,
    title: 'Variedade com qualidade',
    text: 'Produtos nacionais e importados de marcas reconhecidas, pensados para durar e acompanhar você.',
  },
  {
    icon: Handshake,
    title: 'Atendimento de confiança',
    text: 'Conversa direta, orientação honesta e cuidado para encontrar a peça certa para o seu estilo.',
  },
]

function Values() {
  return (
    <section className="values" aria-labelledby="values-title">
      <div className="values-photo" aria-hidden="true">
        <img src={editorialImages.belts} alt="" loading="lazy" />
      </div>
      <div className="values-content">
        <div className="values-inner">
          <p className="eyebrow eyebrow-light"><span /> O que guia a gente</p>
          <h2 id="values-title">Raiz de verdade.<br />Qualidade em cada escolha.</h2>
          <div className="value-list">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <span className="value-index">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values

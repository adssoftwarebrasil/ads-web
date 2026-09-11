import { Heart, Leaf, UtensilsCrossed } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { images } from '../data/siteData.js'

const qualities = [
  {
    icon: UtensilsCrossed,
    title: 'Sabor caseiro',
    text: 'Aquele almoço reconfortante que combina com todos os dias.',
  },
  {
    icon: Leaf,
    title: 'Sempre fresquinho',
    text: 'Preparações cuidadas para chegar bem à sua mesa.',
  },
  {
    icon: Heart,
    title: '13 anos de história',
    text: 'Experiência construída servindo Caldas Novas com excelência.',
  },
]

function Story() {
  return (
    <section className="story-section" id="historia">
      <div className="container story-grid">
        <Reveal className="story-visual">
          <div className="story-image-frame">
            <img
              src={images.serviceArea}
              alt="Área de buffet e atendimento do Restaurante Rodoviária"
              loading="lazy"
            />
            <div className="story-year-card">
              <strong>13</strong>
              <span>anos servindo com excelência</span>
            </div>
          </div>
        </Reveal>

        <div className="story-content">
          <Reveal>
            <SectionHeading
              eyebrow="Nossa história"
              title="Qualidade que se prova a cada almoço."
              text="O Restaurante Rodoviária nasceu para servir comida caseira de ótima qualidade. Há 13 anos, mantém o cuidado com o preparo fresquinho e o atendimento de quem recebe bem."
            />
          </Reveal>

          <div className="qualities-list">
            {qualities.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} className="quality-item" delay={index * 70}>
                <span className="quality-icon">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story

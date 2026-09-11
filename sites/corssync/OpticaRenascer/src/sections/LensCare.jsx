import { BookOpen, Eye, Layers3, MonitorSmartphone, Sparkles, SunMedium } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import solarGreen from '../assets/products/solar-green-angle.jpg'
import { lensSolutions, links } from '../data/siteData.js'

const lensIcons = [Layers3, MonitorSmartphone, Sparkles, SunMedium, Eye, BookOpen]

function LensCare() {
  return (
    <section className="lens-care section" id="lentes">
      <div className="container lens-care__grid">
        <div className="lens-care__intro" data-reveal>
          <SectionHeading
            light
            eyebrow="Lentes para a vida real"
            title="Clareza para cada momento do seu dia."
            text="A escolha certa considera sua receita, rotina e o que faz diferença no seu conforto visual."
          />
          <a className="text-link text-link--light" href={links.whatsapp} target="_blank" rel="noreferrer">
            Falar com nossa equipe
            <span aria-hidden="true">↗</span>
          </a>
          <div className="lens-care__photo">
            <img src={solarGreen} alt="Óculos de sol aviador dourado com lentes verdes" loading="lazy" />
          </div>
        </div>

        <div className="lens-care__cards">
          {lensSolutions.map((solution, index) => {
            const Icon = lensIcons[index]
            return (
              <article className="lens-card" key={solution.title} data-reveal style={{ '--delay': index * 70 + 'ms' }}>
                <div className="lens-card__icon">
                  <Icon aria-hidden="true" />
                </div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LensCare

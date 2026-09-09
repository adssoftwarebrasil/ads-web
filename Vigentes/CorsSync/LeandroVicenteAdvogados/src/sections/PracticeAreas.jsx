import { BriefcaseBusiness, FileText, Landmark, Scale, ShieldCheck, UsersRound } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { defaultWhatsAppLink, practiceAreas } from '../data/siteData'

const icons = {
  scale: Scale,
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
  landmark: Landmark,
  users: UsersRound,
  file: FileText,
}

export default function PracticeAreas() {
  return (
    <section id="areas" className="practice section section--navy">
      <div className="practice__lines" aria-hidden="true" />
      <div className="container">
        <div className="practice__heading-row">
          <SectionHeading
            light
            eyebrow="Áreas de atuação"
            title="Visão técnica para diferentes momentos da vida."
            text="Consultoria e atuação contenciosa conduzidas de acordo com as particularidades de cada demanda."
          />
          <a className="text-link text-link--light" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
            Falar sobre o seu caso
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="practice__grid">
          {practiceAreas.map((area, index) => {
            const Icon = icons[area.icon]
            return (
              <article
                className="practice-card"
                key={area.title}
                data-reveal
                style={{ '--delay': `${(index % 3) * 70}ms` }}
              >
                <div className="practice-card__top">
                  <span>{area.number}</span>
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

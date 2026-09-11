import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { plans, whatsappUrl } from '../data/siteData.js'

function Plans() {
  return (
    <section className="section plans" id="planos">
      <div className="container">
        <div className="plans__intro">
          <SectionHeading
            eyebrow="Escolha por quem você quer cuidar"
            title="Existe um plano para o seu momento"
            text="Conte o que você precisa. A CWB Saúde ajuda a entender as opções e encontrar uma contratação coerente com o seu perfil."
          />
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar com um consultor <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="plans__grid">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <article className="plan-card" data-reveal style={{ '--delay': `${index * 70}ms` }} key={plan.title}>
                <div className="plan-card__top">
                  <span className="plan-card__icon"><Icon aria-hidden="true" /></span>
                  <span className="plan-card__number">0{index + 1}</span>
                </div>
                <span className="plan-card__eyebrow">{plan.eyebrow}</span>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="plan-card__tags" aria-label="Perfis atendidos">
                  {plan.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Pedir cotação de ${plan.title}`}>
                  Pedir cotação <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Plans

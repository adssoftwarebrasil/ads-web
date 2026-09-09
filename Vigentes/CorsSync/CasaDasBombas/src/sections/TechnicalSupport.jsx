import { Activity, ShieldCheck, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { technicalServices } from '../data/site'

function TechnicalSupport() {
  return (
    <section className="section technical-support" id="assistencia">
      <div className="technical-line" aria-hidden="true" />
      <div className="container technical-layout">
        <div className="technical-summary">
          <SectionHeading
            eyebrow="Assistência técnica"
            title="Da bancada à instalação, um só parceiro técnico."
            description="Atendimento para recuperar, instalar e manter equipamentos essenciais ao seu dia a dia e à sua operação."
            inverse
          />

          <div className="technical-promise" data-reveal>
            <div className="technical-promise-icon" aria-hidden="true"><Activity size={29} /></div>
            <p>Mais eficiência, segurança e continuidade para a sua operação.</p>
          </div>

          <div className="technical-seal" data-reveal>
            <ShieldCheck size={25} aria-hidden="true" />
            <span>Atendimento orientado à necessidade do equipamento</span>
          </div>
        </div>

        <div className="technical-list">
          {technicalServices.map((service, itemIndex) => (
            <article
              className="technical-item"
              key={service.number}
              data-reveal
              style={{ '--reveal-delay': `${itemIndex * 80}ms` }}
            >
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <Wrench size={23} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSupport

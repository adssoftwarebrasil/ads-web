import { ArrowRight, Coffee, Snowflake, Sofa, UserRoundCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { careImages, contact } from '../data/siteData'

const comforts = [
  { icon: Sofa, label: 'Sala de espera confortável' },
  { icon: Snowflake, label: 'Ambientes climatizados' },
  { icon: UserRoundCheck, label: 'Atendimento personalizado' },
  { icon: Coffee, label: 'Apoio durante o atendimento' },
]

function CustomerCare() {
  return (
    <section className="care section">
      <div className="container care__grid">
        <div className="care__content">
          <Reveal>
            <SectionHeading
              eyebrow="Você também importa"
              title={<>Seu veículo recebe atenção. <em>Você recebe conforto.</em></>}
              description="Enquanto nossa equipe cuida do seu veículo, você conta com atendimento próximo e um espaço pensado para esperar com tranquilidade."
            />
          </Reveal>
          <div className="comfort-grid">
            {comforts.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal className="comfort-item" delay={index * 50} key={item.label}>
                  <Icon aria-hidden="true" /><span>{item.label}</span>
                </Reveal>
              )
            })}
          </div>
          <Reveal>
            <a className="text-link text-link--dark" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Agendar uma avaliação <ArrowRight />
            </a>
          </Reveal>
        </div>

        <Reveal className="care__collage" delay={100}>
          <figure className="care__image care__image--main"><img src={careImages.salaEspera} alt="Sala de espera climatizada da Mecânica 277" loading="lazy" /></figure>
          <figure className="care__image care__image--top"><img src={careImages.recepcao} alt="Recepção organizada da Mecânica 277" loading="lazy" /></figure>
          <figure className="care__image care__image--bottom"><img src={careImages.atendimento} alt="Equipe de atendimento da Mecânica 277" loading="lazy" /></figure>
        </Reveal>
      </div>
    </section>
  )
}

export default CustomerCare

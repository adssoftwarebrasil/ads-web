import { ArrowUpRight, BedDouble, HeartHandshake, UserRound } from 'lucide-react'
import accommodationApartment from '../assets/acomodacao-apartamento.png'
import humanizedCare from '../assets/acomodacao-atendimento-humanizado.png'
import accommodationWard from '../assets/acomodacao-enfermaria.png'
import SectionHeading from '../components/SectionHeading.jsx'
import { whatsappUrl } from '../data/siteData.js'

const accommodations = [
  {
    title: 'Atendimento humanizado',
    description: 'Acolhimento e dedicação todos os dias.',
    image: humanizedCare,
    alt: 'Material da CWB Saúde sobre atendimento humanizado em frente ao Hospital Jardim América',
    icon: HeartHandshake,
  },
  {
    title: 'Enfermaria',
    description: 'Conheça esta opção de acomodação conforme as condições do plano.',
    image: accommodationWard,
    alt: 'Acomodação Hapvida do tipo enfermaria',
    icon: UserRound,
  },
  {
    title: 'Apartamento',
    description: 'Conheça esta opção de acomodação conforme as condições do plano.',
    image: accommodationApartment,
    alt: 'Acomodação Hapvida do tipo apartamento',
    icon: BedDouble,
  },
]

function Accommodations() {
  return (
    <section className="section accommodations" id="acomodacoes">
      <div className="container">
        <div className="accommodations__header">
          <SectionHeading
            eyebrow="Acomodações"
            title="Opções para conhecer antes de escolher seu plano"
            text="Veja as acomodações apresentadas pela Hapvida e conte com a CWB Saúde para esclarecer as condições disponíveis em cada contratação."
          />

          <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar opções <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="accommodations__grid">
          {accommodations.map((item, index) => {
            const Icon = item.icon

            return (
              <figure className="accommodation-card" key={item.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                <div className="accommodation-card__media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <figcaption>
                  <span className="accommodation-card__icon"><Icon aria-hidden="true" /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <p className="accommodations__note">
          Tipos de acomodação e disponibilidade podem variar de acordo com o plano. Confirme os detalhes durante a cotação.
        </p>
      </div>
    </section>
  )
}

export default Accommodations

import { ArrowUpRight, Handshake, MessageSquareText, ScanSearch } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

const steps = [
  {
    icon: MessageSquareText,
    number: '01',
    title: 'Conte o que está acontecendo',
    description: 'Informe o tipo de equipamento e os sinais do problema. Se puder, envie fotos pelo WhatsApp.',
  },
  {
    icon: ScanSearch,
    number: '02',
    title: 'Identificamos a necessidade',
    description: 'A equipe orienta os próximos passos para peça, equipamento, manutenção ou atendimento técnico.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Combine a melhor solução',
    description: 'Alinhe os detalhes do serviço ou da compra diretamente com a Casa das Bombas e Compressores.',
  },
]

function ServiceFlow() {
  return (
    <section className="section service-flow" id="atendimento">
      <div className="container">
        <div className="flow-header">
          <SectionHeading
            eyebrow="Atendimento direto"
            title="Seu equipamento não precisa esperar."
            description="Comece pelo WhatsApp e facilite a identificação do que você precisa."
          />
          <a className="text-link" href={site.whatsappUrl} target="_blank" rel="noreferrer" data-reveal>
            Iniciar atendimento
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="flow-grid">
          {steps.map(({ icon: Icon, number, title, description }, itemIndex) => (
            <article className="flow-step" key={number} data-reveal style={{ '--reveal-delay': `${itemIndex * 90}ms` }}>
              <div className="flow-step-head">
                <span className="flow-icon" aria-hidden="true"><Icon size={25} /></span>
                <span className="flow-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFlow

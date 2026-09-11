import {
  Accessibility,
  Baby,
  Brain,
  Hand,
  Languages,
  MessageCircleMore,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { whatsappUrl } from '../data/contact.js'

const services = [
  {
    icon: MessageCircleMore,
    title: 'Fala, linguagem e aprendizagem',
    content: [
      'Fonoterapia com objetivos personalizados para desenvolver comunicação e habilidades ligadas à aprendizagem.',
    ],
    color: 'teal',
  },
  {
    icon: Languages,
    title: 'Comunicação Alternativa — CAA',
    content: [
      'Recursos de comunicação aumentativa e alternativa para ampliar autonomia e participação.',
    ],
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'Gagueira e distúrbios da comunicação',
    content: [
      'Avaliação e acompanhamento das disfluências e de outras dificuldades de comunicação.',
    ],
    color: 'pink',
  },
  {
    icon: Baby,
    title: 'Teste da linguinha e pós-frenectomia',
    content: [
      'Avaliação do frênulo lingual e fonoterapia após o procedimento, quando indicada.',
    ],
    color: 'purple',
  },
  {
    icon: Hand,
    title: 'Motricidade orofacial',
    content: [
      'Capacitação em técnicas específicas para adequar postura de movimentação de língua, eliminar hipotonia oral, ceceio anterior e lateral, dentre outras abordagens de acordo com a necessidade de cada paciente.',
    ],
    color: 'coral',
  },
  {
    icon: Accessibility,
    title: 'Abordagens e recursos terapêuticos',
    content: [
      'Pós Graduada em ABA, Análise do Comportamento Aplicada; Especialista em Distúrbios da comunicação e transtornos de aprendizagem, várias capacitações como, método PROMPT, multigestos, métodos das boquinhas, aplicação de bandagem, CAA — Comunicação Aumentativa Alternativa, instalação de fonemas dentre outras.',
      'Recursos especializados: Laser de baixa intensidade, trazendo mais energia para célula e trabalhando em pontos neurológicos específicos, para potencializar resultados em área da fala, aprendizagem, Seletividade alimentar, regulação do sono, foco, memória, hiperatividade, dentre outras necessidades apresentadas pelo paciente.',
    ],
    color: 'yellow',
  },
]

function Services() {
  return (
    <section className="services section" id="atendimentos" aria-labelledby="services-title">
      <div className="container">
        <div className="services-head">
          <SectionHeading
            eyebrow="Atendimento personalizado"
            title="Possibilidades de cuidado para cada necessidade"
            description="A avaliação orienta a escolha das estratégias e dos recursos mais adequados para cada paciente."
          />
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Conversar sobre uma necessidade
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, content, color }, index) => (
            <article className={`service-card service-card--${color}`} key={title}>
              <div className="service-card-top">
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <h3>{title}</h3>
              {content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

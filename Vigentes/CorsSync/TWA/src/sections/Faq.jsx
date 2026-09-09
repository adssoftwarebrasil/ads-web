import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/siteData'

function Faq() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div data-reveal>
          <SectionHeading
            eyebrow="Informação direta"
            title="Antes de começar o seu projeto."
            text="Respostas rápidas sobre atendimento, manutenção e como falar com a equipe TWA."
          />
          <div className="faq-aside-card">
            <span>Área de atendimento</span>
            <strong>Balneário Camboriú</strong>
            <p>Itajaí · Itapema · Camboriú</p>
          </div>
        </div>

        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <Plus aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

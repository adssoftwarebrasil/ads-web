import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { faqItems } from '../data/siteData.js'

function Faq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="container faq__grid">
        <div className="faq__intro">
          <SectionHeading
            eyebrow="Antes de contratar"
            title="Dúvidas frequentes, respostas diretas"
            text="As condições de cada plano podem variar. Nossa equipe confirma os detalhes durante sua cotação."
          />
          <div className="faq__note">
            <strong>Não encontrou sua dúvida?</strong>
            <span>Converse com a equipe no WhatsApp e receba uma orientação personalizada.</span>
          </div>
        </div>

        <div className="faq__items">
          {faqItems.map((item, index) => (
            <details data-reveal style={{ '--delay': `${index * 55}ms` }} key={item.question}>
              <summary>
                {item.question}
                <Plus aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

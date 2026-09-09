import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { faqItems } from '../data/siteData'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq-section" id="duvidas">
      <div className="container faq-layout">
        <div data-reveal>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Antes de adequar, é preciso compreender."
            text="Respostas diretas para começar uma conversa técnica com mais clareza."
          />
        </div>

        <div className="faq-list" data-reveal>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span><Plus aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" id={answerId} hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ

import { ChevronDown, ExternalLink, Star } from 'lucide-react'
import { contact, faqs } from '../data'

export function Faq() {
  return (
    <section className="faq section" id="duvidas">
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow eyebrow--light"><span /> Dúvidas frequentes</p>
          <h2>Informação para você decidir com confiança.</h2>
          <p>Se sua dúvida não estiver aqui, chame a equipe no WhatsApp e explique o que você precisa cercar ou proteger.</p>

          <div className="google-card">
            <span className="google-card__icon"><Star aria-hidden="true" /></span>
            <div>
              <small>Avaliações no Google</small>
              <strong>Conheça a experiência de outros clientes</strong>
              <a href={contact.mapsUrl} target="_blank" rel="noreferrer">Ver perfil no Google <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<ChevronDown aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}


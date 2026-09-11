import { Check, MessageCircle, PackageCheck, Truck } from 'lucide-react'
import { contact } from '../data/siteData'

export function Delivery() {
  return (
    <section className="delivery section">
      <div className="container delivery-card" data-reveal>
        <div className="delivery-icon-orbit" aria-hidden="true">
          <Truck size={44} />
        </div>
        <div className="delivery-copy">
          <span className="eyebrow">Mais praticidade</span>
          <h2>Seu cuidado pode chegar até você — sem taxa de entrega.</h2>
          <p>Envie sua lista pelo WhatsApp e confirme a disponibilidade com a nossa equipe.</p>
        </div>
        <div className="delivery-steps" aria-label="Como pedir">
          <span><MessageCircle size={20} aria-hidden="true" /> Chame no WhatsApp</span>
          <span><PackageCheck size={20} aria-hidden="true" /> Confirme seu pedido</span>
          <span><Check size={20} aria-hidden="true" /> Pronto</span>
        </div>
        <a className="button button--light" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Fazer um pedido
        </a>
      </div>
    </section>
  )
}

import { MessageCircle } from 'lucide-react'
import { site } from '../data/site'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar com a Casa das Bombas e Compressores pelo WhatsApp ${site.whatsappDisplay}`}
    >
      <MessageCircle size={26} strokeWidth={2.3} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

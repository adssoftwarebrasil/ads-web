import { MessageCircle } from 'lucide-react'
import { createWhatsAppUrl } from '../data/siteData'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a TWA Tecnologia pelo WhatsApp"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <MessageCircle aria-hidden="true" />
      <span className="whatsapp-label">Fale com a TWA</span>
    </a>
  )
}

export default WhatsAppButton

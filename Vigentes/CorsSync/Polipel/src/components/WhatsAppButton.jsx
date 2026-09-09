import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../data.js'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Polipel pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com a gente</span>
    </a>
  )
}


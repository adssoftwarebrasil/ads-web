import { MessageCircle } from 'lucide-react'
import { contact } from '../data'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Telas Confiança pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}


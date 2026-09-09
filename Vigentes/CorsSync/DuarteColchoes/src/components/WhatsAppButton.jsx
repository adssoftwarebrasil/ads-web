import { MessageCircle } from 'lucide-react'
import { createWhatsAppLink } from '../data/siteData'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Duarte Colchões no WhatsApp"
    >
      <MessageCircle size={27} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}


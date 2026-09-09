import { MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Domingão Farma pelo WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.2} aria-hidden="true" />
      <span>Fale com a gente</span>
    </a>
  )
}

import { MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Mecânica 277 pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

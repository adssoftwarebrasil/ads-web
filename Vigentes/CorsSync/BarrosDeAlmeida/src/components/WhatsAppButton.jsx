import { MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Padaria A Moderna pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

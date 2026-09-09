import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/contact.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com Wanessa pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

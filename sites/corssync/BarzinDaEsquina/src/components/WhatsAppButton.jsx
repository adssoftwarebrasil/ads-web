import { MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com o Barzin de Esquina no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Chama no Whats</span>
    </a>
  )
}

export default WhatsAppButton

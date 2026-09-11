import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/catalog.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink('Olá! Vim pelo site e gostaria de conhecer os produtos disponíveis.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a AgroHorse Western no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

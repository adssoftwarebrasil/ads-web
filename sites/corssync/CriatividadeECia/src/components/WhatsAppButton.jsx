import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Criatividade e Cia pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com a gente</span>
    </a>
  )
}

export default WhatsAppButton

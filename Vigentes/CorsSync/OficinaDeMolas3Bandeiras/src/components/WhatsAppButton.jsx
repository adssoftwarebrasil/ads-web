import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../constants.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o Posto de Molas 3 Bandeiras pelo WhatsApp"
    >
      <span>Fale com a oficina</span>
      <MessageCircle aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton

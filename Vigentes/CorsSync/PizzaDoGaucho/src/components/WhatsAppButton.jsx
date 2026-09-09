import { MessageCircle } from 'lucide-react'
import { links } from '../data/site'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Peça no WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton


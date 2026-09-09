import { MessageCircle } from 'lucide-react'
import { links } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Óptica Renascer pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

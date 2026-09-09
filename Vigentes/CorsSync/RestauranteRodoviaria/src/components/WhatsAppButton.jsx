import { MessageCircle } from 'lucide-react'
import { site } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com o Restaurante Rodoviária no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com a gente</span>
    </a>
  )
}

export default WhatsAppButton

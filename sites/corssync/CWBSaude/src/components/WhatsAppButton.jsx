import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a CWB Saúde pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com nosso corretor</span>
    </a>
  )
}

export default WhatsAppButton

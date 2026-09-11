import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Casa das Oficinas pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale conosco</span>
    </a>
  )
}

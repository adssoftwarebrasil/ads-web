import { MessageCircle } from 'lucide-react'
import { defaultWhatsAppLink } from '../data/siteData'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={defaultWhatsAppLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com o escritório pelo WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2} />
      <span>WhatsApp</span>
    </a>
  )
}

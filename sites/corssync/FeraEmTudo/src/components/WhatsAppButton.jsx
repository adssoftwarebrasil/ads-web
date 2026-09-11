import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/storeData.js'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Fera em Tudo pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com a loja</span>
    </a>
  )
}

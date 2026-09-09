import { MessageCircle } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/556492674193?text=Ol%C3%A1%2C%20Jud%C3%A1%20Cal%C3%A7ados!%20Gostaria%20de%20conhecer%20as%20novidades.'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Judá Calçados pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

import { MessageCircle } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/557536250670?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

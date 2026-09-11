import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/5511911396107?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Flex%20Garagem."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Flex Garagem pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

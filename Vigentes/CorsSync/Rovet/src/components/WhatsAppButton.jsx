import { MessageCircle } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5563999466901?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20veterin%C3%A1rio.'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Rovet pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Atendimento 24h</span>
    </a>
  )
}

export default WhatsAppButton


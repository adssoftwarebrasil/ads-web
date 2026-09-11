import { MessageCircle } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5562993342454?text=Ol%C3%A1%2C%20Alliviun!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar sessão pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Agendar pelo WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton


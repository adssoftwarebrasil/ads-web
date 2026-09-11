import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5562991073396?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20GRA%20e%20gostaria%20de%20atendimento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a GRA pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

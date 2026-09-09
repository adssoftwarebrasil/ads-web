import { MessageCircle } from 'lucide-react'

const primaryWhatsApp =
  'https://wa.me/5562981648938?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20JR%20Loca%C3%A7%C3%B5es.'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={primaryWhatsApp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a JR Locações pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Orçamento</span>
    </a>
  )
}

export default WhatsAppButton

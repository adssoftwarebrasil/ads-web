import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/content";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o Paris Apart Hotel pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Reservas</span>
    </a>
  );
}

export default WhatsAppButton;

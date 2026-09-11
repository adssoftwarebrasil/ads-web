import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/content";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Renova Clínica Integrada pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale conosco</span>
    </a>
  );
}

export default WhatsAppButton;

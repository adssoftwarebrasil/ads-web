import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../siteData";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a TJ Mix pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span>Fale com a gente</span>
    </a>
  );
}

export default WhatsAppButton;

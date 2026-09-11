import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/siteData";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a FRT Veículos no WhatsApp"
    >
      <span>Fale com a gente</span>
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/siteData";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Abreu Terraplenagem pelo WhatsApp"
    >
      <MessageCircle size={27} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;

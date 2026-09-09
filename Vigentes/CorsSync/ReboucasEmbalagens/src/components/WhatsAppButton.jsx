import { MessageCircleMore } from "lucide-react";
import { contact } from "../data/siteData";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Rebouças Embalagens no WhatsApp"
    >
      <MessageCircleMore aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;

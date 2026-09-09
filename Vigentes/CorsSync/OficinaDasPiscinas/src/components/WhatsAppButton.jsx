import { MessageCircle } from "lucide-react";
import { contact } from "../data/siteData";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Oficina das Piscinas pelo WhatsApp"
    >
      <MessageCircle size={25} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

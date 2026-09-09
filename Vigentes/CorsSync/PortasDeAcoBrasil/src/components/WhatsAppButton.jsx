import { contact } from "../data/contact";
import Icon from "./Icon";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chamar no WhatsApp: ${contact.phoneDisplay}`}
    >
      <Icon name="whatsapp" size={25} />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;

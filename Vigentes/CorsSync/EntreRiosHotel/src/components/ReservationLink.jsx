import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "../data/hotel";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ReservationLink({
  children = "Consultar disponibilidade",
  message,
  className = "",
  arrow = false,
}) {
  return (
    <a
      className={`button button-gold ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {!arrow && <WhatsAppIcon size={19} />}
      {children}
      {arrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </a>
  );
}

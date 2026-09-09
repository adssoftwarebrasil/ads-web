import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "../data/business";

export function WhatsAppIcon({ size = 21, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.6 11.7a8.6 8.6 0 0 1-12.8 7.5L3 20.6l1.4-4.7A8.6 8.6 0 1 1 20.6 11.7Z" />
      <path d="M8.3 7.6c-.5.2-.8.9-.7 1.5.4 2.8 3 5.4 5.8 6 .7.1 1.4-.2 1.8-.8l.3-.8-2-1-.7.8c-1.5-.5-2.7-1.7-3.2-3.1l.7-.8-.9-1.9Z" />
    </svg>
  );
}

export default function WhatsAppLink({
  children = "Solicitar orçamento",
  message,
  className = "",
  arrow = true,
  ...props
}) {
  return (
    <a
      className={`button button-red ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <WhatsAppIcon />
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight size={19} className="button-arrow" aria-hidden="true" />
      )}
    </a>
  );
}

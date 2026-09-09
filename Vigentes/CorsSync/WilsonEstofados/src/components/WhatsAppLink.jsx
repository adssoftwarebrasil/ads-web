import { whatsappUrl } from "../data/site.js";

export function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.4-4.8a8.4 8.4 0 1 1 16-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 7.6c.2-.3.4-.3.6-.3h.4c.2 0 .3.1.4.4l.8 1.8c.1.2.1.4 0 .5l-.7.9c-.1.1-.1.3 0 .5.7 1.1 1.6 1.9 2.8 2.4.2.1.4.1.5-.1l.8-1c.2-.2.3-.2.5-.1l1.9.9c.2.1.3.2.3.4 0 .6-.3 1.3-.8 1.6-.5.4-1.3.5-2 .3-1.2-.3-2.8-1-4.3-2.4-1.2-1.1-2.2-2.5-2.3-3.7-.1-.9.2-1.6.8-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WhatsAppLink({
  children = "Pedir um orçamento",
  message,
  className = "button button-primary",
  ...props
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

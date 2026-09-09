import { whatsappUrl } from '../data/site';

export function WhatsAppIcon({ size = 21 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a9 9 0 0 1-13.2 8L3 21l1.5-4.8A9 9 0 1 1 21 11.5Z" />
      <path d="m8 7 1.4 2.5-1 1c.6 1.7 1.9 3 3.6 3.6l1-1L15.5 15c.6.3.4 1.3-.1 1.7-2 1.5-6-1.2-7.7-3.6C6.4 11.3 6 9 6.8 8c.4-.5.9-1 1.2-1Z" />
    </svg>
  );
}

export default function WhatsAppLink({
  children = 'Fazer meu pedido',
  message,
  className = 'button button--yellow',
  icon = true,
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
      {icon && <WhatsAppIcon />}
      <span>{children}</span>
    </a>
  );
}

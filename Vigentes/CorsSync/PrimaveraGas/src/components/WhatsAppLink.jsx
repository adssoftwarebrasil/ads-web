import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../data/business';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppLink({
  children = 'Pedir pelo WhatsApp',
  message,
  className = '',
  arrow = false,
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      <span>{children}</span>
      {arrow && <ArrowUpRight size={19} aria-hidden="true" />}
    </a>
  );
}

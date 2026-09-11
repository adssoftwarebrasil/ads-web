import { IconWhatsapp } from './icons';

export default function WhatsappFloat() {
  return (
    <div
      className="whatsapp-float"
      onClick={() => window.open('https://wa.me/08005552569', '_blank')}
      role="button"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsapp />
    </div>
  );
}

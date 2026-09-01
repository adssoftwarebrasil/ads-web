import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996456124';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="float-wa"
      aria-label="Agendar pelo WhatsApp"
    >
      <span className="float-wa__ring" />
      <WhatsAppIcon size={28} />
      <span className="float-wa__tooltip">Agendar pelo WhatsApp</span>
    </a>
  );
}

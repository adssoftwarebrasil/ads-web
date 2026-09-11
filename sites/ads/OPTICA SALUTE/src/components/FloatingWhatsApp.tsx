import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href="http://wa.me/556135424555"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-green-400/30 opacity-100 translate-y-0"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-30 animate-ping"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      ></div>
      <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
    </a>
  );
}

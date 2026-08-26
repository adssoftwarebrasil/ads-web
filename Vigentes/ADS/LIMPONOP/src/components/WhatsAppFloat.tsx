import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/556697227511?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Limponop%20e%20gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/5566984369336"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-110 animate-fade-in animate-pulse-glow"
      aria-label="Fale pelo WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}

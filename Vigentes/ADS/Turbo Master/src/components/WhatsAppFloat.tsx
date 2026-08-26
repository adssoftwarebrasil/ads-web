import WhatsappIcon from './WhatsappIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5565992174220"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/50 transition-all duration-300 hover:scale-110 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40 group-hover:opacity-0"></span>
      <WhatsappIcon className="w-7 h-7 text-white relative z-10" />
    </a>
  );
}

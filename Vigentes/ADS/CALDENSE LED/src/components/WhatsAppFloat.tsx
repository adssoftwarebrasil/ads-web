import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/553530646373?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20iluminação%20LED."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group scale-100 opacity-100"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      <div className="absolute right-16 bg-[#010101] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
        Fale pelo WhatsApp
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#010101] rotate-45"></span>
      </div>
      <WhatsAppIcon className="w-7 h-7 relative z-10" />
    </a>
  );
}

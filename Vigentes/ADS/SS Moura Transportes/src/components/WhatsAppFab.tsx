import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <div className="bg-gray-900 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap animate-pulse-ring">
        Precisa de socorro? Fale agora!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[6px] w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
      </div>
      <a
        href="https://wa.me/553799568191?text=Ol%C3%A1!%20Preciso%20de%20um%20guincho.%20Pode%20me%20ajudar%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="whatsapp-fab-pulse w-14 h-14 bg-[#25d366] hover:bg-[#20b958] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
      >
        <WhatsAppIcon className="w-7 h-7" fill="white" />
      </a>
    </div>
  );
}

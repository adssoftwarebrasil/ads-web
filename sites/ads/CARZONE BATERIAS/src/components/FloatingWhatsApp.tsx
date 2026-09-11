import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <div className="group relative bg-[#000E27] text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl transition-all duration-300 whitespace-nowrap opacity-0 translate-x-4 pointer-events-none">
        <span className="text-[#F7EE30] font-bold">Atendemos até 21h!</span>
        <br />
        <span className="text-white/70 text-xs">Chame no WhatsApp</span>
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#000E27]"></div>
      </div>
      <a
        href="https://wa.me/556593448962?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20bateria."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <span className="absolute inset-0 rounded-full whatsapp-pulse"></span>
        <WhatsAppIcon className="w-8 h-8 relative z-10" fill="white" />
      </a>
    </div>
  );
}

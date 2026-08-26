import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <div className="relative group">
        <a
          href="http://wa.me/553488238723?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-xl shadow-green-900/40 hover:shadow-green-700/50 hover:scale-110 transition-all duration-300"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </a>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-[rgb(32,29,30)] text-[rgb(247,246,247)] text-xs font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Falar no WhatsApp
            <div className="absolute top-1/2 -translate-y-1/2 right-[-5px] border-4 border-transparent border-l-[rgb(32,29,30)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 mr-1 max-w-[220px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-0.5 transition-colors"
            aria-label="Fechar"
          >
            <X size={12} className="lucide lucide-x text-gray-600" />
          </button>
          <p className="text-gray-700 text-xs font-medium leading-snug">
            Precisa de um seguro? Fale agora com um especialista!
          </p>
          <div className="absolute bottom-3 right-[-6px] w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}
      <a
        href="http://wa.me/5584991089072"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chamar no WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.544 4.09 1.497 5.817L.057 23.885l6.24-1.637A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.006-1.371l-.358-.214-3.71.974.989-3.614-.234-.372A9.79 9.79 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"></path>
        </svg>
      </a>
    </div>
  );
}

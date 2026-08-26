import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="relative bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg max-w-[180px] text-center animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
          >
            <X size={10} className="lucide lucide-x " />
          </button>
          Fale conosco pelo WhatsApp!
          <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
        </div>
      )}
      <a
        href="https://wa.me/5514996487352?text=Ol%C3%A1%2C%20Scorpion%20Xpress!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20bateria%20automotiva."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#25d366] hover:bg-[#1ea952] shadow-lg hover:shadow-[#25d366]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={32} fill="white" />
      </a>
    </div>
  );
}

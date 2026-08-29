import { useState, useEffect } from 'react';

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative group">
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50" />
        )}
        <a
          href="https://wa.me/5519981211908?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+de+frete."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebc59] rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 hover:scale-110"
          aria-label="Falar no WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.857L.057 23.882a.75.75 0 0 0 .919.919l6.04-1.464A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-5.023-1.381l-.36-.215-3.733.905.93-3.638-.236-.374A9.818 9.818 0 1 1 12 21.818z" />
          </svg>
        </a>

        <div className="absolute bottom-full right-0 mb-3 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Falar no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

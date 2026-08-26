import { useState, useEffect } from 'react';

const WHATSAPP = 'http://wa.me/551235122848';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[rgb(186,213,51)] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative bg-[rgb(37,211,102)] hover:bg-[rgb(32,191,85)] p-4 rounded-full shadow-2xl transition-all group-hover:scale-110">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path
              d="M27.281 4.65C24.318 1.686 20.363 0 16.152 0C7.354 0 0.18 7.174 0.18 15.972c0 2.814.738 5.565 2.137 7.993L.043 32l8.282-2.172a15.94 15.94 0 007.822 1.993h.007c8.797 0 15.973-7.175 15.973-15.973 0-4.265-1.668-8.278-4.646-11.253zM16.152 29.183a13.257 13.257 0 01-6.76-1.852l-.486-.288-5.025 1.318 1.34-4.896-.317-.504a13.22 13.22 0 01-2.029-7.05c0-7.315 5.957-13.272 13.278-13.272 3.55 0 6.882 1.385 9.394 3.896 2.51 2.51 3.896 5.842 3.896 9.386-.007 7.322-5.965 13.272-13.279 13.272zm7.282-9.943c-.398-.2-2.358-1.165-2.724-1.297-.367-.133-.634-.2-.902.2-.266.399-1.031 1.297-1.265 1.564-.232.267-.465.3-.863.1-.399-.199-1.684-.62-3.209-1.98-1.186-1.058-1.989-2.365-2.222-2.763-.232-.399-.024-.614.175-.813.18-.179.399-.466.598-.698.2-.233.267-.4.4-.666.134-.266.067-.499-.033-.698-.1-.2-.902-2.176-1.236-2.98-.325-.784-.657-.678-.901-.69-.234-.012-.5-.014-.766-.014s-.7.1-1.065.498c-.367.399-1.398 1.365-1.398 3.333 0 1.967 1.431 3.868 1.631 4.135.199.266 2.814 4.296 6.815 6.023.952.411 1.696.657 2.276.84.956.304 1.825.261 2.512.159.766-.115 2.358-.965 2.691-1.897.334-.931.334-1.73.234-1.897-.1-.166-.366-.266-.766-.466z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[rgb(54,59,27)] px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="font-semibold">Fale conosco no WhatsApp!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-white"></div>
        </div>
      </div>
    </a>
  );
}

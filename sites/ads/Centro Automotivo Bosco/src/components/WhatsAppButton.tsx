import { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../constants';

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-[rgb(37,211,102)] rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-[rgb(37,211,102)] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 32 32" className="w-9 h-9 text-white" fill="currentColor">
            <path d="M16.002 0h-.004C7.164 0 0 7.164 0 16c0 3.5 1.128 6.744 3.044 9.384l-1.992 5.956 6.14-1.952C9.78 30.856 12.804 32 16.002 32 24.84 32 32 24.836 32 16S24.84 0 16.002 0zm9.476 22.72c-.396.996-2.312 1.852-3.188 1.972-.876.12-1.776.396-5.988-1.28-5.36-2.132-8.8-7.64-9.068-7.992-.268-.352-2.188-2.916-2.188-5.556s1.384-3.944 1.876-4.484c.492-.54 1.072-.676 1.432-.676.36 0 .72.004 1.036.02.332.016.776-.128 1.216.928.44 1.056 1.504 3.676 1.636 3.944.132.268.22.58.044.932-.176.352-.264.572-.528.88-.264.308-.556.688-.792.924-.264.264-.54.548-.232.976.308.428 1.368 2.256 2.936 3.652 2.02 1.796 3.72 2.356 4.244 2.624.524.268.832.224 1.14-.132.308-.356 1.324-1.54 1.676-2.068.352-.528.704-.44 1.188-.264.484.176 3.076 1.448 3.604 1.712.528.264.88.396.996.612.132.22.132 1.26-.264 2.256z"></path>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(204,53,49)] rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(204,53,49)] rounded-full border-2 border-white"></div>
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-[rgb(10,33,75)] px-4 py-2 rounded-lg shadow-xl font-semibold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp!
      </div>
    </a>
  );
}

export default WhatsAppButton;

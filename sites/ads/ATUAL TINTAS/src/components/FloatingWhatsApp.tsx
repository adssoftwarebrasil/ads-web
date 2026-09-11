import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <div
        className="relative px-4 py-2.5 rounded-xl text-sm font-medium text-white shadow-lg transition-all duration-300 whitespace-nowrap opacity-100 translate-x-0"
        style={{ backgroundColor: 'rgb(2, 2, 2)' }}
      >
        Solicite um orçamento grátis!
        <div
          className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid rgb(2, 2, 2)',
          }}
        ></div>
      </div>
      <a
        href="http://wa.me/5566996839888?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Conversar no WhatsApp"
        style={{
          backgroundColor: 'rgb(37, 211, 102)',
          boxShadow: 'rgba(37, 211, 102, 0.5) 0px 8px 32px',
        }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: 'rgb(37, 211, 102)' }}
        ></span>
        <WhatsAppIcon className="w-8 h-8 fill-white drop-shadow" />
      </a>
    </div>
  );
}

import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 opacity-100 translate-y-0">
      <a
        href="https://wa.me/5566992474531?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
        <span className="absolute right-full mr-3 bg-brand-dark text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}

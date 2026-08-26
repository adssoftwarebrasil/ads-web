import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/556696510268?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group opacity-100 translate-y-0"
      style={{ transition: '0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" ariaHidden />
      <span className="absolute right-full mr-3 bg-[#212121] text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale no WhatsApp
      </span>
    </a>
  );
}

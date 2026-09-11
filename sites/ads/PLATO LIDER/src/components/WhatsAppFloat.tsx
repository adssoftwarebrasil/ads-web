import WhatsAppIcon from './WhatsAppIcon';

const FLOAT_WHATSAPP =
  'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20embreagens.';

export default function WhatsAppFloat() {
  return (
    <a
      href={FLOAT_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true"></span>
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:scale-110">
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-brand-ink text-white text-sm font-medium px-3 py-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
        Fale conosco agora
      </span>
    </a>
  );
}

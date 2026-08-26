import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/556684469577?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white rounded-full shadow-2xl shadow-green-500/30 transition-all duration-500 translate-y-0 opacity-100 group"
      style={{ padding: '14px 20px 14px 16px' }}
    >
      <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
        Falar no WhatsApp
      </span>
    </a>
  );
}

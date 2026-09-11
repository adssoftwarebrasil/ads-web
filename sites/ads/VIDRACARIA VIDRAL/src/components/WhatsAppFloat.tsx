import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/556596603393?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 lg:bottom-6 lg:right-6 w-14 h-14 lg:w-[60px] lg:h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 animate-pulse-subtle"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
}

import WhatsappIcon from './WhatsappIcon';
import { waLink } from '../lib/site';

export default function WhatsappButton() {
  return (
    <a
      href={waLink('Olá! Gostaria de mais informações sobre os serviços.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsappIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
    </a>
  );
}

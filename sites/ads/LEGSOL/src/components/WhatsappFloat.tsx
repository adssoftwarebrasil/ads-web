import WhatsappIcon from './WhatsappIcon';
import { WHATSAPP_URL } from '../lib/utils';

export default function WhatsappFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => window.open(WHATSAPP_URL, '_blank')}
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white w-16 h-16 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Falar no WhatsApp"
        >
          <WhatsappIcon className="w-9 h-9" />
        </button>
      </div>
    </div>
  );
}

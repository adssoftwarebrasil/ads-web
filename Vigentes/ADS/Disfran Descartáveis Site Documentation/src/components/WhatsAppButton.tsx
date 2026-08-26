import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <button className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-whatsapp text-white border-none rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-[999] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)]">
      <MessageCircle className="lucide lucide-message-circle" width={32} height={32} />
      <div className="absolute w-full h-full border-[3px] border-whatsapp rounded-full animate-[pulse_2s_infinite] opacity-0"></div>
    </button>
  );
}

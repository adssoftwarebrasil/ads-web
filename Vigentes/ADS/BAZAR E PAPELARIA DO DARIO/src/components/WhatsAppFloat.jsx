import { MessageCircle } from 'lucide-react'

const WHATSAPP_INFO =
  'https://wa.me/5562984256606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_INFO}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand-black text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg whitespace-nowrap">
        Falar no WhatsApp
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-slow opacity-20 scale-110" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5e] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all duration-200 hover:scale-110">
          <MessageCircle size={26} className="text-white fill-white" />
        </div>
      </div>
    </a>
  )
}

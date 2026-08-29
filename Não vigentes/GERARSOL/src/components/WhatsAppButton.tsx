import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[rgb(37,211,102)] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Contate-nos pelo WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </a>
  )
}

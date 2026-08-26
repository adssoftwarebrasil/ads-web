import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/5541999600458"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[rgb(26,157,39)] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="lucide lucide-message-circle w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </a>
    </div>
  );
}

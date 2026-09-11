import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562998005803"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-subtle"></div>

        <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 animate-bounce-subtle">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#2c2c5b] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          <span className="text-sm font-semibold">Fale Conosco</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#2c2c5b]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.75;
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}

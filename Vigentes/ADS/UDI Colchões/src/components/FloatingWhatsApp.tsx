import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-vibrant flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UDI</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary">UDI Colchões</h3>
                  <p className="text-xs text-primary-medium">Geralmente responde rápido</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-accent-offwhite rounded-xl p-4 mb-4">
              <p className="text-sm text-primary-medium leading-relaxed">
                Olá! Como podemos ajudar você hoje? 😊
              </p>
              <p className="text-xs text-primary-medium/70 mt-2">
                Estamos prontos para tirar suas dúvidas sobre colchões!
              </p>
            </div>

            <a
              href="https://wa.me/5534996610265?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20ba59] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              Iniciar Conversa
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:shadow-3xl animate-bounce-gentle"
          aria-label="WhatsApp"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping-slow opacity-75"></div>
          <MessageCircle size={32} className="text-white relative z-10" />

          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </button>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}

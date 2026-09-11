import { X, MessageCircle, User } from 'lucide-react';
import { useWhatsAppModal, WHATSAPP_CONTACTS } from '../context/WhatsAppModalContext';
import { useEffect } from 'react';

const contacts = WHATSAPP_CONTACTS;

export default function WhatsAppModal() {
  const { isOpen, message, closeModal } = useWhatsAppModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#012d78] to-[#0298d2] p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Fale Conosco</h2>
              <p className="text-white/90 text-sm">Escolha um atendente</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Selecione com quem deseja falar via WhatsApp
          </p>

          <div className="space-y-3">
            {contacts.map((contact, index) => {
              // Variável criada no formato solicitado
              const linkWhatsapp = `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

              return (
                <a
                  key={index}
                  href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                  className="block w-full bg-[#f8f9fa] hover:bg-[#0298d2]/10 border-2 border-transparent hover:border-[#0298d2] rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] group cursor-pointer decoration-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0298d2]/10 group-hover:bg-[#0298d2] rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <User className="text-[#0298d2] group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-[#012d78] group-hover:text-[#0298d2] transition-colors">
                        {contact.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{contact.displayPhone}</p>
                    </div>
                    <MessageCircle className="text-[#25D366] group-hover:scale-110 transition-transform" size={24} />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              Você será redirecionado para o WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
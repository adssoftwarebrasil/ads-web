import { MessageCircle, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumbers = [
    {
      number: '5566984082396',
      display: '(66) 98408-2396',
      name: 'Comercial 1',
      type: 'whatsapp'
    },
    {
      number: '5566999383052',
      display: '(66) 99938-3052',
      name: 'Comercial 2',
      type: 'whatsapp'
    },
    {
      number: '5566996892350',
      display: '(66) 99689-2350',
      name: 'Comercial 3',
      type: 'whatsapp'
    },
    {
      number: '5566984080873',
      display: '(66) 98408-0873',
      name: 'Comercial 4',
      type: 'whatsapp'
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.type === 'whatsapp') {
      const message = encodeURIComponent('Olá! Vim do site e gostaria de mais informações sobre comercialização de grãos');
      window.open(`https://wa.me/${contact.number}?text=${message}`, '_blank', 'noopener noreferrer');
    } else if (contact.type === 'phone') {
      window.location.href = `tel:${contact.number}`;
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-[10000] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Fale conosco no WhatsApp"
      >
        {isHovered && (
          <div className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-[#383838] text-white px-4 py-2.5 rounded-lg text-[13px] whitespace-nowrap animate-fade-in shadow-lg">
            Fale conosco
            <div
              className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #383838'
              }}
            />
          </div>
        )}
        
        <div
          className="relative w-[70px] h-[70px] md:w-[70px] md:h-[70px] bg-[#fbbf1f] rounded-full flex items-center justify-center cursor-pointer animate-pulse-continuous hover:scale-115 transition-all duration-300 shadow-lg"
          style={{
            boxShadow: '0 6px 24px rgba(251, 191, 31, 0.5)'
          }}
        >
          <MessageCircle className="w-9 h-9 md:w-[38px] md:h-[38px] text-white" />
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[10001] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Título */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#fbbf1f] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Fale Conosco
                </h2>
              </div>
              <p className="text-gray-600 text-sm">
                Escolha uma opção para entrar em contato
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3">
              {whatsappNumbers.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(contact)}
                  className={`w-full ${
                    contact.type === 'phone' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-[#fbbf1f] to-[#f5b000] hover:from-[#f5b000] hover:to-[#fbbf1f]'
                  } text-white rounded-xl p-4 flex items-center justify-between transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      {contact.type === 'phone' ? (
                        <Phone className="w-5 h-5" />
                      ) : (
                        <MessageCircle className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{contact.name}</div>
                      <div className="text-sm opacity-90">{contact.display}</div>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
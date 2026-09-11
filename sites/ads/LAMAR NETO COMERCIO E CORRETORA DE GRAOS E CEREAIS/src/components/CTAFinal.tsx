import { MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function CTAFinal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contacts = [
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
    },
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
      <section
        className="relative py-[100px] md:py-[100px] px-5 md:px-10 text-center"
        style={{
          background: 'linear-gradient(135deg, #688631 0%, #324422 100%)'
        }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/lamarneto%2Fmilhho-01-1320x743.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="inline-block bg-[#fbbf1f] text-[#383838] px-6 py-2 rounded-full text-[13px] font-semibold mb-5">
            Atendimento Rápido
          </div>
          <h2 className="text-white text-3xl md:text-[44px] font-bold leading-tight mb-4">
            Pronto para Garantir Grãos de Qualidade?
          </h2>
          <p className="text-[#e6e6e6] text-lg max-w-[700px] mx-auto leading-relaxed mb-10">
            Entre em contato agora e receba um orçamento personalizado para suas necessidades. Nossa equipe está pronta para atendê-lo.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-[#fbbf1f] text-[#383838] px-12 py-5 rounded-full text-[17px] font-semibold hover:bg-[#faa431] button-hover shadow-lg"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-12 py-5 rounded-full text-[17px] font-semibold hover:bg-white hover:text-[#324422] transition-all duration-300"
              aria-label="Entrar em contato"
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </button>
          </div>
        </div>
      </section>

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
              {contacts.map((contact, index) => (
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
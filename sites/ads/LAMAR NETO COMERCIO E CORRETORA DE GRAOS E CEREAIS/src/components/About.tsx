import { Check, MessageCircle, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    'Empresa familiar com tradição desde 2009',
    'Experiência consolidada em comercialização de grãos',
    'Localização estratégica em Querência, MT',
    'Compromisso com qualidade e satisfação do cliente'
  ];

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
      <section id="sobre" className="bg-white py-[100px] md:py-[100px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lamarneto%2Ftrucks-graos-silo.webp"
                alt="Grãos de soja premium selecionados em colher de madeira - Lamar Neto"
                className="rounded-3xl w-full h-auto aspect-square object-cover card-hover"
                style={{ boxShadow: '0 8px 30px rgba(50, 68, 34, 0.15)' }}
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-[#688631] text-sm font-semibold uppercase mb-4" style={{ letterSpacing: '1px' }}>
                Quem Somos
              </div>
              <h2 className="text-[#324422] text-3xl md:text-[38px] font-semibold leading-tight mb-6">
                Lamar Neto Comércio de Grãos e Cereais LTDA
              </h2>
              <p className="text-[#666666] text-base leading-relaxed mb-5">
                A Lamar Neto Comércio de Grãos e Cereais LTDA é uma empresa familiar, fundada em 2009, que inicialmente atuava como agenciadora de cargas. Com o tempo, acumulamos experiência e conhecimento no mercado de grãos, migrando para a comercialização e transporte de grãos como soja, milho, milheto e sorgo.
              </p>
              <p
                className="text-[#383838] text-[17px] font-medium leading-relaxed mb-8 pl-5 border-l-4 border-[#fbbf1f]"
              >
                Nossa sede está localizada em Querência, MT, onde mantemos um compromisso constante com a qualidade e a satisfação dos nossos clientes.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#688631] flex-shrink-0 mt-0.5" />
                    <span className="text-[#383838] text-[15px]">{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 bg-[#fbbf1f] text-[#383838] px-9 py-4 rounded-full text-base font-semibold hover:bg-[#faa431] button-hover shadow-md"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
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
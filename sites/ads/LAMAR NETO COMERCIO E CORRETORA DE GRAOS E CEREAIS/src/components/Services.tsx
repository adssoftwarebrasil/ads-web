import { Sprout, Wheat, Circle, MessageCircle, X, Phone } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  image: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

function ServiceCard({ image, badge, badgeColor, icon, iconColor, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden card-hover" style={{ boxShadow: '0 4px 24px rgba(50, 68, 34, 0.1)' }}>
      <div className="relative h-[180px] md:h-[250px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute top-3 md:top-4 right-3 md:right-4 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-white text-[10px] md:text-xs font-semibold"
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </div>
      </div>

      <div className="p-5 md:p-8">
        <div className="mb-3 md:mb-4" style={{ color: iconColor }}>
          {icon}
        </div>

        <h3 className="text-[#324422] text-lg md:text-[22px] font-semibold mb-2 md:mb-3">
          {title}
        </h3>

        <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed mb-4 md:mb-5">
          {description}
        </p>

        
          <a href="#contato"
          className="text-[#688631] font-semibold text-xs md:text-sm hover:text-[#fbbf1f] transition-colors inline-flex items-center gap-1"
        >
          Saiba Mais
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
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
    }
  ];

  const handleContactClick = (contact: typeof contacts[0]) => {
    if (contact.type === 'whatsapp') {
      const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento personalizado');
      window.open(`https://wa.me/${contact.number}?text=${message}`, '_blank', 'noopener noreferrer');
    } else if (contact.type === 'phone') {
      window.location.href = `tel:${contact.number}`;
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="servicos" className="bg-[#f8f8f8] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="text-[#688631] text-xs md:text-sm font-semibold uppercase mb-3 md:mb-4" style={{ letterSpacing: '1px' }}>
              Nossos Serviços
            </div>
            <h2 className="text-[#324422] text-2xl md:text-3xl lg:text-[42px] font-semibold mb-3 md:mb-4 px-4">
              Comercialização de Grãos de Qualidade
            </h2>
            <p className="text-[#666666] text-sm md:text-base lg:text-lg max-w-[700px] mx-auto px-4">
              Oferecemos grãos de alta qualidade para atender às necessidades do mercado agroindustrial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <ServiceCard
              image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Fgraos-soja-colher.webp"
              badge="Alta Qualidade"
              badgeColor="#a2c145"
              icon={<Sprout className="w-10 md:w-12 h-10 md:h-12" />}
              iconColor="#688631"
              title="Compra de Soja para Industrialização"
              description="Produzido de forma responsável, com alto valor nutritivo e padrões rigorosos de qualidade para a indústria alimentícia e produção de óleo."
            />

            <ServiceCard
              image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Fmao-segurando-milho.webp"
              badge="Certificado"
              badgeColor="#fbbf1f"
              icon={<Wheat className="w-10 md:w-12 h-10 md:h-12" />}
              iconColor="#faa431"
              title="Compra de Milho para Fábricas"
              description="Ideal para alimentação animal, produção de ração e outras aplicações agrícolas. Grãos selecionados com umidade controlada."
            />

            <ServiceCard
              image="https://storage.lucasmendes.dev/site-sp/lamarneto%2Fcampo-sorgo-nublado.webp"
              badge="Alto Rendimento"
              badgeColor="#faa431"
              icon={<Circle className="w-10 md:w-12 h-10 md:h-12" />}
              iconColor="#324422"
              title="Milheto e Sorgo para Confinamento"
              description="Grãos selecionados para máxima eficiência na nutrição animal e confinamento bovino, garantindo ganho de peso otimizado."
            />
          </div>

          <div className="text-center px-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#fbbf1f] text-[#383838] px-6 md:px-11 py-3 md:py-[18px] rounded-full text-sm md:text-base font-semibold hover:bg-[#faa431] button-hover shadow-lg w-full sm:w-auto"
              aria-label="Solicitar orçamento personalizado via WhatsApp"
            >
              <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
              <span>Solicitar Orçamento Personalizado</span>
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
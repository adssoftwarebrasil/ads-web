import { MessageCircle } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Mecânica Pesada',
      description: 'Motor, câmbio, diferenciais e transmissões automáticas',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fcambio-manual-veiculo.webp',
      fallback: '🔧',
      icon: '🔧'
    },
    {
      title: 'Sistema Hidráulico',
      description: 'Embuchamentos, hidroar, válvulas e compressores',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fmesa-cilindros-hidraulicos.webp',
      fallback: '⚙️',
      icon: '⚙️'
    },
    {
      title: 'Freios e Suspensão',
      description: 'Manutenção completa de sistemas de freio e suspensão',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fmola-motor-valvulas.webp',
      fallback: '🛠️',
      icon: '🛠️'
    },
    {
      title: 'Diagnóstico Eletrônico',
      description: 'Aparelhos de diagnóstico para todas as marcas de caminhões',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MECANICA-CAMPOS%2Fdesvendando-os-misterios-o-diagnostico-eletronico-nos-automoveis-modernos.jpg&version_id=null',
      fallback: '💻',
      icon: '💻'
    },
    {
      title: 'Torno e Solda',
      description: 'Serviços especializados de usinagem e solda',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fmontagem-pecas-metalicas.webp',
      fallback: '🔨',
      icon: '🔨'
    },
    {
      title: 'Troca de Óleo',
      description: 'Troca de óleo e filtros com produtos de qualidade',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MECANICA-CAMPOS%2Fshutterstock_1126225445_Easy-Resize.com_.jpg&version_id=null',
      fallback: '🛢️',
      icon: '🛢️'
    },
    {
      title: 'Turbo e Compressores',
      description: 'Manutenção e reparo de turbocompressores',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Fturbocompressor-metalico-circular.webp',
      fallback: '⚡',
      icon: '⚡'
    },
    {
      title: 'Auto Socorro',
      description: 'Atendimento emergencial na região do Vale do Araguaia',
      image: 'https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Foficina-mecanica-pecas.webp',
      fallback: '🚨',
      icon: '🚨'
    }
  ];

  const handleWhatsAppClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${serviceTitle}.`);
    window.open(`https://wa.me/5566996460016?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#e1eff5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#152755] mb-4">
            Nossos Serviços Especializados
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para manutenção preventiva e corretiva com garantia e qualidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-[#152755] to-[#1a3366] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-7xl bg-gradient-to-br from-[#152755] to-[#1a3366]">${service.fallback}</div>`;
                    }
                  }}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#152755] mb-3 group-hover:text-[#FF6B35] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 min-h-[60px]">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a28] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 bg-gradient-to-r from-[#FF6B35] via-[#152755] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#152755] to-[#1a3366] rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Não encontrou o serviço que precisa?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco! Temos soluções personalizadas para todas as necessidades de manutenção da sua frota.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Mecânica Campos.');
              window.open(`https://wa.me/5566996460016?text=${message}`, '_blank');
            }}
            className="bg-[#FF6B35] hover:bg-[#e55a28] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Falar com Especialista</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
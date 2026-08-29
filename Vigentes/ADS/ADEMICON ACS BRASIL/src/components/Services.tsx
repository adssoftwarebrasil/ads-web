import { ArrowRight } from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const propertyPlans = [
    {
      title: 'Planeje a reforma de seu imóvel',
      credit: '100 mil',
      installment: 'R$ 337,37',
      icon: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg5%2FImagem%20do%20WhatsApp%20de%202025-11-07%20%C3%A0(s)%2009.09.17_6c12a29b.jpg&version_id=null'
    },
    {
      title: 'Construa sua casa',
      credit: '200 mil',
      installment: 'R$ 675,00',
      icon: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg5%2FImagem%20do%20WhatsApp%20de%202025-11-07%20%C3%A0(s)%2009.09.17_48944372.jpg&version_id=null'
    },
    {
      title: 'Compre sua casa',
      credit: '300 mil',
      installment: 'R$ 1.013,00',
      icon: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg3%2Facs_img_pais-e-filhos-sorridentes-de-perfil-completo_ultra.webp&version_id=null'
    },
    {
      title: 'Compre seu sítio ou casa na praia',
      credit: '500 mil',
      installment: 'R$ 1.800,00',
      icon: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg5%2FImagem%20do%20WhatsApp%20de%202025-11-07%20%C3%A0(s)%2009.09.17_a02806a7.jpg&version_id=null'
    },
    {
      title: 'Compre sua fazenda ou terra',
      credit: '1 milhão',
      installment: 'R$ 3.600,00',
      icon: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg%2Fbela-paisagem-com-pino-vermelho.jpg&version_id=null'
    }
  ];

  const carPlans = [
    {
      title: 'Compre sua moto',
      credit: '15 mil',
      installment: 'R$ 400,63',
      duration: 'até 50 meses',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg4%2Ffamilia-fofa-segurando-um-telhado-acima-da-cabeca_ultra.webp&version_id=null'
    },
    {
      title: 'Adquira seu carro seminovo',
      credit: '40 mil',
      installment: 'R$ 279,00',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg4%2Facs_img_jipe-offroader-dirigindo-na-estrada_ultra.webp&version_id=null'
    },
    {
      title: 'Adquira seu carro popular',
      credit: '80 mil',
      installment: 'R$ 558,00',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg%2FChatGPT%20Image%2024%20de%20out.%20de%202025%2C%2014_35_52.png&version_id=null'
    },
    {
      title: 'Compre seu SUV',
      credit: '150 mil',
      installment: 'R$ 1.046,00',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg4%2Facs_img_carro-3d-na-cidade-vibrante-a-noite_ultra.webp&version_id=null'
    },
    {
      title: 'Compre seu carro de luxo',
      credit: '350 mil',
      installment: 'R$ 2.034,00',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg4%2Facs_img_os-farois-e-o-capo-de-um-carro-preto-de-luxo_ultra.webp&version_id=null'
    }
  ];

  const truckPlans = [
    {
      title: 'Adquira seu caminhão',
      credit: 'R$ 421.289,29',
      installment: 'R$ 2.422,42',
      durationInfo: 'por 18 meses',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg2%2Fum-camiao-vermelho-conduzir-na-auto-estrada-ao-por-sol_ultra.webp&version_id=null'
    }
  ];

  const nauticalPlans = [
    {
      title: 'Adquira sua embarcação',
      credit: 'R$ 509.000,00',
      installment: 'R$ 2.957,29',
      durationInfo: 'por 24 meses',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg2%2Fvista-de-um-barco-na-agua_ultra.webp&version_id=null'
    }
  ];

  const agroPlans = [
    {
      title: 'Invista no seu agronegócio',
      credit: 'R$ 617.890,95',
      installment: 'R$ 3.552,88',
      durationInfo: 'até 18 meses',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg2%2Fvista-aerea-da-colheita-de-verao-colheitadeira-colhendo-grande-campo_ultra.webp&version_id=null'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Linha de Crédito 
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 id="imoveis" className="text-3xl font-bold text-center mb-4 text-gray-800">Carta de Crédito de Imóveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {propertyPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={plan.icon}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x208/eeeeee/333333?text=Imagem+Indisponível'; }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800 min-h-[56px]">{plan.title}</h4>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Crédito de</p>
                    <p className="text-3xl font-bold text-[rgb(87,168,45)]">{plan.credit}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Parcelas reduzidas de</p>
                    <p className="text-2xl font-bold text-[rgb(253,192,20)]">{plan.installment}*</p>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[rgb(87,168,45)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 italic mt-4">
            *Correção anual INCC. Parcelas reduzidas até a contemplação, momento que serão recalculadas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 id="veiculos" className="text-3xl font-bold text-center mb-4 text-gray-800">Automóveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {carPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 group"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x208/eeeeee/333333?text=Imagem+Indisponível'; }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">{plan.title}</h4>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Crédito de</p>
                    <p className="text-3xl font-bold text-[rgb(253,192,20)]">{plan.credit}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">{plan.credit === '15 mil' ? 'Parcelas de' : 'Parcelas reduzidas de'}</p>
                    <p className="text-2xl font-bold text-[rgb(87,168,45)]">{plan.installment}**</p>
                  </div>
                  {plan.duration && (
                    <p className="text-xs text-gray-500 mb-3">*Prazo de {plan.duration}</p>
                  )}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[rgb(253,192,20)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 italic mt-4">
            **Correção anual INPC. Parcelas reduzidas por até 24 meses para carro.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Outros Segmentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {agroPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 group"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x208/eeeeee/333333?text=Imagem+Indisponível'; }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800" id="agro">Agronegócio</h4>
                  <p className="font-semibold text-base mb-3 text-gray-700">{plan.title}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Crédito de</p>
                    <p className="text-3xl font-bold text-[rgb(253,192,20)]">{plan.credit}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Parcelas reduzidas de</p>
                    <p className="text-2xl font-bold text-[rgb(87,168,45)]">{plan.installment}***</p>
                  </div>
                  {plan.durationInfo && (
                    <p className="text-xs text-gray-500 mb-3">Parcelas {plan.durationInfo}</p>
                  )}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[rgb(253,192,20)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}

            {nauticalPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 group"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x208/eeeeee/333333?text=Imagem+Indisponível'; }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800" id="nautica">Náutica</h4>
                  <p className="font-semibold text-base mb-3 text-gray-700">{plan.title}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Crédito de</p>
                    <p className="text-3xl font-bold text-[rgb(253,192,20)]">{plan.credit}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Parcelas reduzidas de</p>
                    <p className="text-2xl font-bold text-[rgb(87,168,45)]">{plan.installment}***</p>
                  </div>
                  {plan.durationInfo && (
                    <p className="text-xs text-gray-500 mb-3">Parcelas {plan.durationInfo}</p>
                  )}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[rgb(253,192,20)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}

            {truckPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 group"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x208/eeeeee/333333?text=Imagem+Indisponível'; }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-800" id="caminhoes">Caminhões</h4>
                  <p className="font-semibold text-base mb-3 text-gray-700">{plan.title}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Crédito de</p>
                    <p className="text-3xl font-bold text-[rgb(253,192,20)]">{plan.credit}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Parcelas reduzidas de</p>
                    <p className="text-2xl font-bold text-[rgb(87,168,45)]">{plan.installment}***</p>
                  </div>
                  {plan.durationInfo && (
                    <p className="text-xs text-gray-500 mb-3">Parcelas {plan.durationInfo}</p>
                  )}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[rgb(253,192,20)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 italic mt-4">
            ***Correção anual INPC / Consultar Disponibilidade.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[rgb(87,168,45)] to-green-600 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
              <div className="h-64 overflow-hidden bg-white/90 flex items-center justify-center">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fcasanovafamilia.png"
                  alt="Consórcio Imobiliário"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x256/eeeeee/333333?text=Imagem+Indisponível'; }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Consórcio Imobiliário</h3>
                <p className="text-lg mb-6 text-white/90">
                  Planos de consórcio para imóveis a partir de R$ 80.000, com opções de contemplação por sorteio ou lance. Realize o sonho da casa própria de forma planejada e sem juros.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Comprar terrenos, sítios ou fazendas</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Construir ou reformar</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Comprar terrenos e imóveis no exterior</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Quitar financiamento imobiliário</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[rgb(87,168,45)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition w-full"
                >
                  Simule seu Consórcio Imobiliário
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[rgb(253,192,20)] to-yellow-600 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
              <div className="h-64 overflow-hidden bg-white/90 flex items-center justify-center">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fentragandochavedocarro.png"
                  alt="Consórcio Automóvel"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x256/eeeeee/333333?text=Imagem+Indisponível'; }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Consórcio Automóvel</h3>
                <p className="text-lg mb-6 text-white/90">
                  Consórcios para moto a partir de 15 mil e automóveis a partir de R$ 40.000, com diversas opções de lance. Adquira seu veículo novo ou seminovo de forma econômica.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Carros novos e seminovos</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Motos e veículos comerciais</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Caminhões e tratores</span>
                  </li>
                  <li className="flex items-start text-white">
                    <ArrowRight className="mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Jetski e lanchas</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[rgb(253,192,20)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition w-full"
                >
                  Simule seu Consórcio Automóvel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-[rgb(87,168,45)] via-green-700 to-[rgb(253,192,20)] rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
                Como você pode utilizar o crédito do consórcio
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { icon: '🏠', text: 'Comprar imóveis' },
                  { icon: '🏞️', text: 'Comprar terrenos' },
                  { icon: '💰', text: 'Investir' },
                  { icon: '🔨', text: 'Reformar' },
                  { icon: '🏭', text: 'Construir' },
                  { icon: '💵', text: 'Quitar financiamento' },
                  { icon: '🏖️', text: 'Aposentadoria Imobiliária' },
                  { icon: '☀️', text: 'Placas solares' },
                  { icon: '🌎', text: 'Imóveis no exterior' },
                  { icon: '💳', text: 'Venda da carta de crédito' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/25 backdrop-blur-sm rounded-xl p-4 hover:bg-white/35 transition-all transform hover:scale-105 cursor-pointer border border-white/30 shadow-lg animate-fade-in-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 text-center">{item.icon}</div>
                    <p className="font-bold text-white text-center text-sm md:text-base drop-shadow-md">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
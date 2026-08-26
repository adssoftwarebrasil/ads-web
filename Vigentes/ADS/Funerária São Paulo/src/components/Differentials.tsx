import { useEffect, useRef, useState } from 'react';
import { Truck, Heart, Package, CheckCircle, Clock, Award } from 'lucide-react';

export default function Differentials() {
  const [visibleBlocks, setVisibleBlocks] = useState<boolean[]>([false, false, false]);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([false, false, false]);
  const blockRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observers = blockRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const differentials = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Ffuneraria-sao-paulo.webp',
      title: 'Estrutura Completa e Moderna',
      description: 'Frota própria de veículos em excelente estado, instalações confortáveis e climatizadas, e toda infraestrutura necessária para garantir um atendimento de excelência em todos os momentos.',
      icon: Truck,
      color: '#009625',
      features: [
        'Frota própria renovada',
        'Instalações climatizadas',
        'Equipamentos modernos',
        'Acessibilidade completa'
      ],
      imagePosition: 'left',
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fflores-brancas-rosas.webp',
      title: 'Atendimento Humanizado 24 Horas',
      description: 'Equipe altamente capacitada e sensível, pronta para oferecer todo o suporte necessário durante o momento de luto, com agilidade, profissionalismo e, acima de tudo, respeito e empatia.',
      icon: Heart,
      color: '#dd9a25',
      features: [
        'Disponibilidade 24/7',
        'Equipe especializada',
        'Suporte psicológico',
        'Atendimento personalizado'
      ],
      imagePosition: 'right',
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fcaixoes-em-exposicao.webp',
      title: 'Variedade de Opções',
      description: 'Ampla seleção de produtos e serviços cuidadosamente escolhidos para atender as diferentes necessidades, preferências e tradições das famílias, sempre com qualidade garantida.',
      icon: Package,
      color: '#009625',
      features: [
        'Diversos modelos disponíveis',
        'Opções personalizáveis',
        'Produtos de qualidade',
        'Planos flexíveis'
      ],
      imagePosition: 'left',
    },
  ];

  return (
    <section id="diferenciais" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#009625] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#dd9a25] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 text-[#009625] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            <Award className="w-5 h-5" />
            Nossos Diferenciais
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#4A4A4A] font-bold mb-4">
            Por Que Escolher a Funerária São Paulo
          </h2>
          <p className="text-[#737373] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Mais de 30 anos de experiência cuidando de famílias com excelência, dedicação e respeito
          </p>
        </div>

        {/* Blocos de diferenciais */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = item.imagePosition === 'left';
            
            return (
              <div
                key={index}
                ref={blockRefs[index]}
                className="relative"
              >
                {/* Linha decorativa conectando os blocos */}
                {index < differentials.length - 1 && (
                  <div className="absolute left-1/2 -bottom-20 md:-bottom-24 lg:-bottom-32 w-px h-16 md:h-20 lg:h-24 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 hidden lg:block"></div>
                )}

                <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                  !isLeft ? 'lg:grid-flow-dense' : ''
                }`}>
                  
                  {/* Coluna da imagem */}
                  <div
                    className={`relative transition-all duration-700 ease-out ${
                      visibleBlocks[index]
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'} translate-y-8`
                    } ${!isLeft ? 'lg:col-start-2' : ''}`}
                  >
                    {/* Card da imagem com decoração */}
                    <div className="relative group">
                      {/* Decoração de fundo */}
                      <div 
                        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                        style={{ backgroundColor: item.color }}
                      ></div>

                      {/* Container da imagem */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[4/3] bg-gray-100 relative">
                          {/* Skeleton loader */}
                          {!imageLoaded[index] && (
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                          )}

                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              imageLoaded[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            } group-hover:scale-105`}
                            loading="lazy"
                            onLoad={() => handleImageLoad(index)}
                          />

                          {/* Overlay sutil */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Badge com número */}
                        <div 
                          className="absolute top-6 left-6 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                          style={{ backgroundColor: item.color }}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Elemento decorativo */}
                      <div 
                        className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>

                  {/* Coluna do conteúdo */}
                  <div
                    className={`transition-all duration-700 ease-out ${
                      visibleBlocks[index]
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : `opacity-0 ${isLeft ? 'translate-x-12' : '-translate-x-12'} translate-y-8`
                    } ${!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    style={{ transitionDelay: '150ms' }}
                  >
                    {/* Ícone do diferencial */}
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Título */}
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#4A4A4A] font-bold mb-4 leading-tight">
                      {item.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-[#737373] text-base md:text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Lista de features */}
                    <div className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center gap-3 transition-all duration-500 ${
                            visibleBlocks[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${300 + featureIndex * 100}ms` }}
                        >
                          <CheckCircle 
                            className="w-5 h-5 flex-shrink-0" 
                            style={{ color: item.color }}
                          />
                          <span className="text-[#737373] text-sm md:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Badge adicional */}
                    {index === 1 && (
                      <div className="mt-8 inline-flex items-center gap-2 bg-[#FFF4E6] text-[#dd9a25] px-4 py-2 rounded-full text-sm font-semibold">
                        <Clock className="w-4 h-4" />
                        Atendimento 24h • 7 dias por semana
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final da seção */}
        <div className="mt-20 md:mt-28 text-center">
          <div className="bg-gradient-to-br from-[#E6F7EA] to-[#FFF4E6] rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4A4A4A] mb-4">
              Pronto para conhecer nossos serviços?
            </h3>
            <p className="text-[#737373] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você e sua família
            </p>
            <a
              href="https://wa.me/556299223409?text=Olá!%20Gostaria%20de%20conhecer%20os%20serviços%20da%20Funerária%20São%20Paulo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#009625] hover:bg-[#006B1A] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#009625]/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
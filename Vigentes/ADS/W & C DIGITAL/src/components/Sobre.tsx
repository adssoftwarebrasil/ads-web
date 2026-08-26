import { Check, Award, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const benefits = [
  'Parcelamento em até 15x no cartão',
  'Produtos de alta qualidade com garantia legal',
  'Nota fiscal em todas as compras',
  'Melhores preços da região',
  'Entrega rápida e segura',
  'Atendimento humanizado'
];

const stats = [
  { icon: Award, value: '18', label: 'Anos no Mercado' },
  { icon: Users, value: '+10k', label: 'Clientes Satisfeitos' },
  { icon: TrendingUp, value: '15x', label: 'no cartão' }
];

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export const Sobre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Coluna de Imagens */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Imagem principal - SEM BORDA */}
              <div className="relative overflow-hidden">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2Finalguracao.png&version_id=null"
                  alt="Produtos W&C Digital"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                
                {/* Badge sobre a imagem */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                  <p className="text-red-600 font-black text-2xl">18</p>
                  <p className="text-gray-600 text-xs font-semibold">Anos</p>
                </div>
              </div>

              {/* Mini cards flutuantes */}
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Check className="text-red-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Garantia</p>
                    <p className="text-gray-500 text-xs">Em todos produtos</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-6 -right-6 bg-red-600 rounded-xl shadow-xl p-4">
                <div className="text-center">
                  <p className="text-white font-black text-xl">15x</p>
                  <p className="text-white/90 text-xs font-semibold">no cartão</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-xs font-bold mb-6">
              <Award size={14} />
              <span>Desde 2008</span>
            </div>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              18 Anos Levando Tecnologia para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                São Miguel/RN
              </span>
            </h2>

            {/* Descrição */}
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              A W&C Digital surgiu em 2008 com o propósito de levar aos nossos clientes produtos de
              alta qualidade com preço acessível, melhores formas de pagamento e rapidez na entrega.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              Especialistas em telefonia celular, informática, eletrodomésticos e móveis. Nossa missão
              é garantir transparência, parceria e suporte completo.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="text-red-600" size={20} />
                    </div>
                    <p className="font-black text-lg sm:text-2xl text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Lista de benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-red-600" size={12} />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-xl">
            <p className="text-sm sm:text-base font-semibold">
              Faça parte dos nossos +10.000 clientes satisfeitos
            </p>
            
            <a 
              href="https://wa.me/5584991775185"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all hover:scale-105"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
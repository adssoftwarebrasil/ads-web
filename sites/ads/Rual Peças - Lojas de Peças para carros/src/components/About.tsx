import { useEffect, useState } from 'react';
import { Check, Award, Users, Target } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('sobre');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const benefits = [
    'Apenas peças originais e de primeira linha',
    'Atendimento personalizado',
    'Expertise de 37 anos no mercado',
    'Solução completa em autopeças',
  ];

  const stats = [
    { icon: Award, value: '37', label: 'Anos de Experiência', color: '#2b2d91' },
    { icon: Users, value: '10mil+', label: 'Clientes Atendidos', color: '#f91b0e' },
    { icon: Target, value: '100%', label: 'Peças Originais', color: '#fdf309' },
  ];

  const images = [
    {
      src: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-amarelo-envelhecido.webp',
      alt: 'Proprietário da Rual Peças',
      span: true,
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-rosa-estacionado-fachada-loja.webp',
      alt: 'Carro clássico na fachada',
    },
    {
      src: 'https://storage.lucasmendes.dev/site-sp/rualpecas%2Ffusca-preto-estacionado-fachada-loja.webp',
      alt: 'Fusca preto na fachada',
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Stats Bar */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: stat.color === '#fdf309' ? stat.color : `${stat.color}15`,
                  }}
                >
                  <stat.icon 
                    size={32} 
                    style={{ color: stat.color === '#fdf309' ? '#0a0d00' : stat.color }} 
                  />
                </div>
                <div>
                  <div className="text-4xl font-bold" style={{ color: '#0a0d00' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-4">
              <div
                className="inline-flex items-center px-4 py-2 rounded-full text-white font-semibold text-sm tracking-wide shadow-md"
                style={{ backgroundColor: '#2b2d91' }}
              >
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2 animate-pulse"></span>
                NOSSA HISTÓRIA
              </div>

              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ color: '#0a0d00' }}
              >
                37 Anos Fornecendo{' '}
                <span 
                  className="relative inline-block"
                >
                  <span className="relative z-10">Qualidade</span>
                  <span 
                    className="absolute bottom-2 left-0 w-full h-3 -rotate-1 opacity-30"
                    style={{ backgroundColor: '#fdf309' }}
                  ></span>
                </span>
                {' '}e Confiança
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p className="pl-4 border-l-4 border-yellow-400">
                A Rual Peças nasceu em <strong style={{ color: '#2b2d91' }}>1988</strong>, fruto da parceria de dois ex-funcionários de loja
                de autopeças em Foz do Iguaçu. Hoje, somos uma das principais referências em
                atendimento ao público que busca reposição automotiva, fornecendo exclusivamente
                produtos originais e de primeira linha.
              </p>

              <p>
                Nossa missão vai além de vender peças do estoque: <strong style={{ color: '#2b2d91' }}>garantimos o atendimento
                completo</strong> para qualquer necessidade no ramo automotivo, solucionando problemas e
                oferecendo as melhores soluções para nossos clientes.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fdf309' }}
                  >
                    <Check size={20} style={{ color: '#0a0d00' }} strokeWidth={3} />
                  </div>
                  <span className="text-lg font-medium pt-0.5" style={{ color: '#0a0d00' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/5545984268490?text=Olá! Gostaria de conhecer mais sobre a Rual Peças."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#2b2d91', color: 'white' }}
              >
                Conheça Nossa Loja
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Decorative border */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
              style={{ backgroundColor: '#fdf309' }}
            ></div>
            
            <div className="grid grid-cols-2 gap-4 relative">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-xl relative group ${
                    image.span ? 'row-span-2' : ''
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div 
              className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-2xl"
              style={{ backgroundColor: '#f91b0e' }}
            >
              <div className="text-white text-center">
                <div className="text-3xl font-bold">1988</div>
                <div className="text-sm font-semibold mt-1">Fundação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
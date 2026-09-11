import { useEffect, useState, useRef } from 'react';
import { Bed, Users, Eye, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function Accommodations() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const rooms = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fquarto-hotel-moderno.webp',
      title: 'Suítes Modernas',
      description: 'Ambientes sofisticados com design contemporâneo e acabamentos de alto padrão',
      icon: Sparkles,
      features: ['Wi-Fi', 'Ar Condicionado', 'TV Smart'],
      badge: 'Premium'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fcama-quarto-janela.webp',
      title: 'Vista Privilegiada',
      description: 'Quartos com amplas janelas e vista para a natureza exuberante',
      icon: Eye,
      features: ['Vista Panorâmica', 'Varanda', 'Iluminação Natural'],
      badge: 'Destaque'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fduas-camas-quarto.webp',
      title: 'Acomodações Familiares',
      description: 'Espaços confortáveis para grupos e famílias',
      icon: Users,
      features: ['Espaçoso', 'Múltiplas Camas', 'Ideal para Famílias'],
      badge: 'Família'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fquarto-moderno-minimalista.webp',
      title: 'Design Minimalista',
      description: 'Decoração clean que proporciona tranquilidade e bem-estar',
      icon: Sparkles,
      features: ['Minimalista', 'Zen', 'Relaxante'],
      badge: 'Zen'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fquarto-cama-janela.webp',
      title: 'Conforto Garantido',
      description: 'Camas premium e amenidades para uma estadia perfeita',
      icon: Bed,
      features: ['Cama King', 'Roupa de Cama Premium', 'Travesseiros Especiais'],
      badge: 'Conforto'
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fquarto-moderno-hotel.webp',
      title: 'Elegância Natural',
      description: 'Ambientes que harmonizam modernidade e rusticidade',
      icon: Sparkles,
      features: ['Decoração Exclusiva', 'Ambiente Aconchegante', 'Detalhes Únicos'],
      badge: 'Exclusivo'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="acomodacoes" 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#f4f5e8] to-[#fbfcf2] overflow-hidden"
    >
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cbd01c] to-transparent"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#cbd01c]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-block bg-[#cbd01c]/15 text-[#2a2d1a] px-6 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-[#cbd01c]/30">
            Nossas Acomodações
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#2a2d1a] mb-6 leading-tight">
            Acomodações Pensadas para{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#2a2d1a]">Seu Conforto</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#cbd01c]/30 -z-0"></span>
            </span>
          </h2>
          
          <p className="text-[#2a2d1a]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Quartos aconchegantes que combinam elegância e funcionalidade para proporcionar a melhor experiência
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {rooms.map((room, index) => {
            const Icon = room.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* Imagem */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2d1a]/80 via-[#2a2d1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#cbd01c] text-[#2a2d1a] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {room.badge}
                  </div>

                  {/* Ícone animado */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#cbd01c]" />
                  </div>

                  {/* Features (aparecem no hover) */}
                  <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, fIndex) => (
                        <span 
                          key={fIndex}
                          className="bg-white/95 backdrop-blur-sm text-[#2a2d1a] px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#2a2d1a] mb-3 group-hover:text-[#cbd01c] transition-colors">
                    {room.title}
                  </h3>
                  
                  <p className="text-[#2a2d1a]/70 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Lista de checks */}
                  <div className="space-y-2 mb-6">
                    {room.features.slice(0, 2).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm text-[#2a2d1a]/80">
                        <CheckCircle className="w-4 h-4 text-[#cbd01c] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={() => {
                      window.open('https://wa.me/5537998044453?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20acomodações%20da%20Pousada%20Eco%20Garden.', '_blank');
                    }}
                    className="w-full bg-[#cbd01c]/10 text-[#2a2d1a] py-3 rounded-full font-bold text-sm hover:bg-[#cbd01c] hover:text-[#2a2d1a] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Consultar Disponibilidade
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div 
          className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-[#cbd01c]/10 via-[#cbd01c]/5 to-[#cbd01c]/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-2 border-[#cbd01c]/20">
            <h3 className="text-2xl md:text-4xl font-bold text-[#2a2d1a] mb-4">
              Pronto para Sua Experiência Única?
            </h3>
            <p className="text-[#2a2d1a]/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra qual acomodação é perfeita para você
            </p>
            <a
              href="https://wa.me/5537998044453?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Eco%20Garden."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#cbd01c] text-[#2a2d1a] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2a2d1a] hover:text-[#fbfcf2] hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Faça Sua Reserva
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
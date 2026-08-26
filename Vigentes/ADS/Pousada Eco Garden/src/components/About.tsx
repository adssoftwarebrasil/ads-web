import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Heart, Award, MapPin } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fpor-do-sol-paisagem-varanda.webp',
      title: 'Vista Paradisíaca'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fcasa-piscina-jardim.webp',
      title: 'Área de Lazer'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fpiscina-palmeiras-ceu.webp',
      title: 'Piscina Exclusiva'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/eco-garden%2Fcasa-piscina-palmeiras.webp',
      title: 'Arquitetura Harmônica'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#fbfcf2] via-[#f4f5e8] to-[#fbfcf2] overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#cbd01c]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#cbd01c]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Galeria de Imagens com Carrossel */}
          <div 
            className={`relative transition-all duration-1000 order-2 lg:order-1 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Imagem Principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6 group">
              <div className="relative h-[400px] md:h-[500px]">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={img.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2d1a]/60 via-transparent to-transparent"></div>
                
                {/* Label da Imagem */}
                <div className="absolute bottom-6 left-6 bg-[#fbfcf2]/95 backdrop-blur-md px-6 py-3 rounded-full">
                  <p className="text-[#2a2d1a] font-bold text-sm md:text-base">
                    {images[activeImage].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative rounded-xl overflow-hidden h-20 md:h-24 transition-all duration-300 ${
                    index === activeImage 
                      ? 'ring-4 ring-[#cbd01c] scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Selo Decorativo */}
            <div className="absolute -top-6 -right-6 bg-[#cbd01c] text-[#2a2d1a] w-28 h-28 rounded-full flex items-center justify-center shadow-xl rotate-12 hidden md:flex">
              <div className="text-center">
                <Sparkles className="w-8 h-8 mx-auto mb-1" />
                <p className="text-xs font-bold">Desde<br/>2021</p>
              </div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div 
            className={`transition-all duration-1000 delay-300 order-1 lg:order-2 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 bg-[#cbd01c]/15 text-[#2a2d1a] px-5 py-2 rounded-full text-sm font-semibold mb-6 border-2 border-[#cbd01c]/30">
              <MapPin className="w-4 h-4" />
              Oliveira - MG
            </div>

            {/* Título Principal */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#2a2d1a] mb-6 leading-tight">
              Uma Experiência{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#2a2d1a]">Única</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#cbd01c]/30 -z-0"></span>
              </span>
              {' '}de Relaxamento
            </h2>

            {/* Descrição Principal */}
            <p className="text-[#2a2d1a]/80 text-lg md:text-xl mb-6 leading-relaxed">
              Eco Garden é a pousada ideal para quem busca tranquilidade e
              conforto em meio à natureza. Localizada na zona rural de Oliveira
              - MG, com fácil acesso para Campo Belo, oferecemos acomodações
              aconchegantes e atendimento personalizado.
            </p>

            <p className="text-[#2a2d1a]/70 text-base md:text-lg mb-10 leading-relaxed">
              Cada detalhe foi pensado para garantir seu descanso, com a
              proximidade da natureza e um atendimento de qualidade que
              proporciona momentos inesquecíveis de relaxamento e bem-estar.
            </p>

            {/* Cards de Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-[#cbd01c]/20">
                <div className="bg-[#cbd01c]/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-[#cbd01c]" />
                </div>
                <p className="text-[#2a2d1a] font-bold text-sm">Atendimento Personalizado</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-[#cbd01c]/20">
                <div className="bg-[#cbd01c]/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-[#cbd01c]" />
                </div>
                <p className="text-[#2a2d1a] font-bold text-sm">Experiências Únicas</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-[#cbd01c]/20">
                <div className="bg-[#cbd01c]/20 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-[#cbd01c]" />
                </div>
                <p className="text-[#2a2d1a] font-bold text-sm">Excelência Reconhecida</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const element = document.getElementById('estrutura');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-[#cbd01c] text-[#2a2d1a] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2a2d1a] hover:text-[#fbfcf2] hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              Conheça Nossa Estrutura
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Estatísticas */}
            <div className="mt-12 pt-10 border-t-2 border-[#cbd01c]/20 grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#cbd01c] mb-2">4+</p>
                <p className="text-[#2a2d1a]/70 text-sm md:text-base font-medium">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#cbd01c] mb-2">500+</p>
                <p className="text-[#2a2d1a]/70 text-sm md:text-base font-medium">Hóspedes Satisfeitos</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#cbd01c] mb-2">100%</p>
                <p className="text-[#2a2d1a]/70 text-sm md:text-base font-medium">Dedicação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
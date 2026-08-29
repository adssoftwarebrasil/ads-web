import { Heart, Award, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const stats = [
    { icon: Award, value: '20+', label: 'Anos de Experiência' },
    { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
    { icon: TrendingUp, value: '100%', label: 'Qualidade Garantida' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="quem-somos" 
      className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div 
            className={`order-2 md:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/Fachada.webp"
                  alt="Fachada elegante da LIH Experiência do Sono"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl">
                  <p className="text-gray-600 text-sm">Referência em Sono de Qualidade</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-30">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Quem <span className="text-primary">Somos</span>
            </h2>

            {/* Description - Texto Atualizado */}
            <div className="space-y-5 text-base md:text-lg text-secondary leading-relaxed mb-8 text-justify">
              <p className="relative pl-4 border-l-2 border-primary/30 italic">
                Em 2019, a LIH Experiência do Sono nasceu da paixão de um casal por viagens e noites bem dormidas nos melhores hotéis do mundo. A LIH surgiu da fusão entre a paixão por viajar e o desejo de dormir bem nos mais renomados hotéis.
              </p>
              <p>
                Ao decidirem unir suas experiências de mais de 20 anos de mercado, o casal fundador viajou pela América do Sul e Europa em busca das melhores marcas, soluções e experiências exclusivas de descanso oferecidas ao exigente público de alto padrão.
              </p>
            </div>

            {/* Mission Box */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 md:p-8 rounded-2xl border-l-4 border-primary shadow-lg shadow-primary/5 mb-8 group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart className="w-16 h-16 text-primary" />
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar a cada cliente um sono restaurador e
                  saudável, sempre com <strong>carinho e verdade</strong>.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 group border border-gray-100 hover:border-primary/20"
                    style={{
                      transitionDelay: `${(index + 1) * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-600 leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
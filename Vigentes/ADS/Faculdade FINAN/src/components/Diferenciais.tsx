import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Building2, Briefcase, Star, Award, TrendingUp } from 'lucide-react';

const diferenciais = [
  {
    icon: GraduationCap,
    title: 'Corpo Docente Especializado',
    description: 'Professores mestres, doutores e especialistas em Direito, com experiência acadêmica e prática jurídica.',
    stat: '100%',
    statLabel: 'Especializados em Direito'
  },
  {
    icon: Building2,
    title: 'Núcleo de Prática Jurídica',
    description: 'NPJ completo para prática real desde o início do curso, atendendo casos reais sob supervisão.',
    stat: 'NPJ',
    statLabel: 'Ativo e Equipado'
  },
  {
    icon: Briefcase,
    title: 'Preparação para OAB',
    description: 'Formação focada na aprovação no Exame da Ordem e preparação para concursos públicos da área jurídica.',
    stat: 'OAB',
    statLabel: 'Foco em Aprovação'
  },
  {
    icon: Star,
    title: 'Tradição em Direito',
    description: 'Anos formando advogados, juízes, promotores e defensores públicos que atuam em todo o país.',
    stat: '+15',
    statLabel: 'Anos Formando Juristas'
  }
];

const badges = [
  {
    icon: Award,
    text: 'MEC Reconhecido',
    color: '#074785'
  },
  {
    icon: TrendingUp,
    text: 'Alto Índice de Satisfação',
    color: '#e4100f'
  }
];

export default function Diferenciais() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="diferenciais" 
      ref={sectionRef} 
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
      }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#074785' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: '#e4100f' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm mb-4 text-sm font-semibold" style={{ color: '#074785' }}>
              🏆 Nossos Diferenciais
            </span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: '#074785' }}
          >
            Por Que Escolher a FINAN?
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Descubra os pilares que fazem da FINAN referência em educação superior na região
          </p>

          {/* Badges */}
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {badges.map((badge, index) => {
              const BadgeIcon = badge.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <BadgeIcon size={18} style={{ color: badge.color }} />
                  <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards de diferenciais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isHovered ? 'shadow-2xl scale-105' : 'shadow-md hover:shadow-xl'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  border: isHovered ? '2px solid #074785' : '2px solid transparent'
                }}
              >
                {/* Barra colorida no topo */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                  style={{ 
                    backgroundColor: isHovered ? '#e4100f' : '#074785',
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                ></div>

                <div className="p-8">
                  {/* Ícone com background */}
                  <div className="relative mb-6">
                    <div 
                      className="inline-flex p-4 rounded-2xl transition-all duration-300"
                      style={{ 
                        backgroundColor: isHovered ? '#e4100f' : '#f0f8ff',
                        transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                      }}
                    >
                      <Icon 
                        size={32} 
                        style={{ 
                          color: isHovered ? '#ffffff' : '#074785',
                          transition: 'color 0.3s'
                        }} 
                      />
                    </div>
                    
                    {/* Badge com estatística */}
                    <div 
                      className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border-2 transition-all duration-300"
                      style={{ 
                        borderColor: isHovered ? '#e4100f' : '#074785',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <span className="text-xs font-bold" style={{ color: isHovered ? '#e4100f' : '#074785' }}>
                        {item.stat}
                      </span>
                    </div>
                  </div>

                  {/* Título */}
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors duration-300" 
                    style={{ color: isHovered ? '#e4100f' : '#074785' }}
                  >
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Label da estatística */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {item.statLabel}
                    </p>
                  </div>

                  {/* Indicador de hover */}
                  <div 
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: '#e4100f',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'scale(1)' : 'scale(0)'
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#074785', transform: 'translate(30%, -30%)' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#074785' }}>
                Pronto para Fazer Parte da Nossa História?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Junte-se a centenas de alunos que escolheram a excelência
              </p>
              
                <a href="https://wa.me/5567999780073?text=Olá! Quero conhecer mais sobre os diferenciais da FINAN."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#e4100f' }}
              >
                Fale com Nossos Consultores
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
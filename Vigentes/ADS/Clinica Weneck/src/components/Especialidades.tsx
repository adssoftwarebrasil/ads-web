import { Sparkles, Braces, Activity, Pill, Crown, Moon, Scissors, Baby, Shield, CircleDot } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Especialidades() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

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

  const especialidades = [
    {
      icon: Sparkles,
      title: 'Odontologia Estética',
      description: 'Laminados cerâmicos e facetas em resina composta, técnicas diferentes que transformam forma e tonalidade de qualquer arcada dental, promovendo uma transformação do sorriso com altíssimo nível de satisfação do paciente. Clareamentos dentais e coroas em cerâmica pura completam um verdadeiro arsenal para um sorriso estético, rejuvenescido e harmonizado devolvendo a função mastigatória adequada e a auto-estima dos nossos pacientes.',
    },
    {
      icon: Braces,
      title: 'Ortodontia',
      description: 'Tratamentos com <strong>planejamento bem conduzido</strong> para os resultados necessários que aparecerem no tempo adequado, buscando objetividade (tempo mais curto) e restabelecer as funções mastigatórias, respiratórias e estética. Aparelhos do tipo fixo metálico ou cerâmico e os alinhadores invisíveis (Invisalign e Sou Smile).',
    },
    {
      icon: Activity,
      title: 'Periodontia',
      description: 'Tratamentos de todas as situações de saúde das gengivas, base de toda a saúde bucal, junto com os dentes e base óssea.',
    },
    {
      icon: Pill,
      title: 'Endodontia',
      description: 'Tratamentos de canal com tecnologia ultrassônica. Mais rapidez (sessão única) e eficiência no resultado final.',
    },
    {
      icon: Crown,
      title: 'Prótese Dental',
      description: 'Prótese biocompatíveis e adequadas para restaurar a função mastigatória e estética das arcadas dentais.',
    },
    {
      icon: CircleDot,
      title: 'Implantodontia',
      description: 'Implantes em titânio com mais alto nível de pureza e biocompatibilidade para repor os dentes perdidos.',
    },
    {
      icon: Moon,
      title: 'Odontologia do Sono',
      description: 'Tratamentos do ronco e apnéia respiratória. Restaure sua qualidade de vida e saúde com o nosso AIO (Aparelho Intraoral) personalizado indicado para a maior parte dos casos. <strong>Restaure o seu sono</strong>.',
    },
    {
      icon: Scissors,
      title: 'Cirurgia Bucomaxilofacial',
      description: 'Realizamos os principais procedimentos cirúrgicos bucais com profissionais de alta experiência e sem necessidade de internação hospitalar.',
    },
    {
      icon: Baby,
      title: 'Odontopediatria',
      description: 'Ensinamos pais e bebês/crianças a manter sua saúde bucal desde cedo, evitando assim a necessidade de maiores intervenções no futuro. Lembre-se: <strong>prevenir é sempre a melhor opção</strong>.',
    },
    {
      icon: Shield,
      title: 'Odontologia Preventiva e Restauradora',
      description: 'Prevenção e restauração de fissuras, fraturas e cáries com restaurações estéticas e duradouras buscando sempre a preservação da estrutura dental.',
    },
  ];

  return (
    <section ref={sectionRef} id="especialidades" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#003870] via-[#004a8f] to-[#003870] relative overflow-hidden">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4 sm:mb-5">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold border border-white/20 shadow-lg">
              O que oferecemos
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 px-4">
            Nossas Especialidades
          </h2>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Soluções completas para sua saúde bucal
          </p>
        </div>

        {/* Grid de Cards - 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {especialidades.map((item, index) => {
            const isLastCard = index === especialidades.length - 1;
            const Icon = item.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  isActive 
                    ? 'shadow-2xl shadow-black/40 -translate-y-2 scale-[1.01]' 
                    : 'shadow-xl hover:shadow-2xl hover:-translate-y-1'
                } ${
                  isLastCard ? 'lg:col-start-2' : ''
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 60}ms` : '0ms',
                }}
              >
                {/* Borda superior decorativa com gradiente */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl sm:rounded-t-3xl transition-all duration-500 ${
                  isActive ? 'bg-gradient-to-r from-[#003870] via-cyan-400 to-[#003870]' : 'bg-[#003870]'
                }`}></div>

                <div className="flex flex-col h-full">
                  {/* Header com ícone e título */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-5">
                    {/* Ícone */}
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-2xl transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-br from-[#003870] to-[#005aa8] scale-110 shadow-xl' : 'bg-gradient-to-br from-[#e8f2f8] to-[#d1e7f5]'
                    }`}>
                      <Icon 
                        className={`transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-[#003870]'
                        }`} 
                        size={32}
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003870] leading-tight pt-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Descrição com suporte a HTML para negrito */}
                  <div 
                    className="text-[#4a5568] leading-relaxed text-base sm:text-lg mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {/* Call to Action - Botão WhatsApp */}
                  <a
                    href="https://wa.me/5581994073827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#003870] to-[#005aa8] text-white shadow-xl scale-105'
                        : 'bg-[#f1f5f8] text-[#003870] hover:bg-gradient-to-r hover:from-[#003870] hover:to-[#005aa8] hover:text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="font-bold">Agendar Consulta</span>
                  </a>
                </div>

                {/* Glow effect no hover */}
                <div className={`absolute -inset-[3px] rounded-2xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} style={{ zIndex: -1 }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-cyan-400/40 rounded-2xl sm:rounded-3xl blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
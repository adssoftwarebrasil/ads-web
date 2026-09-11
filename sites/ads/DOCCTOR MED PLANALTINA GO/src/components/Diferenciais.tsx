import { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, Cpu, Heart, ArrowRight } from 'lucide-react';

const diferenciais = [
  {
    icon: DollarSign,
    title: 'Preço Acessível',
    description: 'Saúde de qualidade que cabe no seu bolso, sem abrir mão da excelência',
  },
  {
    icon: Clock,
    title: 'Horário Flexível',
    description: 'Atendimento de segunda a sábado para se adequar à sua rotina',
  },
  {
    icon: Cpu,
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para diagnósticos precisos e tratamentos eficazes',
  },
  {
    icon: Heart,
    title: 'Atendimento Completo',
    description: 'Todas as especialidades em um só lugar, para toda a família',
  },
];

export default function Diferenciais() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '80px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white py-20 md:py-28 lg:py-36 px-4 md:px-6 overflow-hidden"
    >
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(243,127,26,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(45,74,62,0.03)_0%,transparent_50%)]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,74,62,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(45,74,62,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container-custom relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f37f1a]/10 to-[#f37f1a]/5 rounded-full text-[#f37f1a] font-semibold text-sm uppercase tracking-widest border border-[#f37f1a]/20">
              Por que nos escolher
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d4a3e] mb-6 leading-tight">
            Excelência em Cada
            <span className="relative inline-block ml-3">
              <span className="relative z-10 text-[#f37f1a]">Detalhe</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#f37f1a]/20 -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#a6a9a5] leading-relaxed">
            Comprometidos com sua saúde e bem-estar, oferecemos um atendimento diferenciado que vai além das suas expectativas
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 transition-all duration-500 border-2 ${
                  isActive 
                    ? 'border-[#f37f1a] shadow-2xl shadow-[#f37f1a]/10 -translate-y-2' 
                    : 'border-gray-100 shadow-lg hover:shadow-xl'
                }`}>
                  
                  {/* Barra lateral colorida */}
                  <div className={`absolute top-0 left-0 w-1.5 h-20 bg-gradient-to-b from-[#f37f1a] to-[#ff9942] rounded-tr-full rounded-br-full transition-all duration-500 ${
                    isActive ? 'h-full' : ''
                  }`}></div>

                  {/* Ícone */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f37f1a] to-[#ff9942] flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-3' : ''
                    }`}>
                      <Icon size={32} className="text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Badge numérico */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2d4a3e] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-[#2d4a3e] mb-3 group-hover:text-[#f37f1a] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-[#a6a9a5] text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Seta no hover */}
                  <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#f37f1a] flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de Benefícios Extras */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2d4a3e] to-[#3d5e50] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Pattern decorativo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,white_49%,white_51%,transparent_52%)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Mais do Que Uma Clínica
                </h3>
                <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                  Um ecossistema completo de saúde pensado para você e sua família
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: '5000+',
                    label: 'Pacientes Atendidos',
                    sublabel: 'Com excelência',
                  },
                  {
                    number: '20+',
                    label: 'Localizações no Brasil',
                    sublabel: 'Estamos em varias localidades do Brasil',
                  },
                  {
                    number: '10+',
                    label: 'Especialidades',
                    sublabel: 'Em um só lugar',
                  },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center group cursor-default ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: isVisible ? `${600 + index * 100}ms` : '0ms',
                    }}
                  >
                    <div className="relative inline-block mb-3">
                      <div className="text-5xl md:text-6xl font-bold text-[#f37f1a] group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f37f1a] rounded-full"></div>
                    </div>
                    <div className="text-white font-semibold text-lg mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                
                  <a href="https://wa.me/5561982400076?text=Olá! Gostaria de conhecer mais sobre os diferenciais da clínica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#f37f1a] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff9942] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f37f1a]/30"
                >
                  Agende uma Visita
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
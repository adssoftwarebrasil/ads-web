import { Award, Users, Microscope, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Diferenciais() {
  const [isVisible, setIsVisible] = useState(false);
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

  const diferenciais = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 30 anos de tradição em odontologia de excelência em Recife.',
      color: 'from-blue-500 to-[#003870]',
      delay: '0ms',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: '15 especialistas qualificados nas principais especialidades da odontologia.',
      color: 'from-[#003870] to-blue-600',
      delay: '100ms',
    },
    {
      icon: Microscope,
      title: 'Atualização Tecnológica',
      description: 'Equipamentos de perfomarce capazes de propiciar resultados diferenciados e resolutivos às neessidades dos nossos pacientes.',
      color: 'from-blue-600 to-[#003870]',
      delay: '200ms',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Além do conforto e bem estar em um abiente criado com esse intuito, toda a equipe tem como missão praticar o acolhimento empático com os pacientes.',
      color: 'from-[#003870] to-blue-500',
      delay: '300ms',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#f1f5f8] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#003870]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#003870]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-[#003870]/10 text-[#003870] px-4 py-2 rounded-full text-sm font-semibold">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-[#003870] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher a Clínica Werneck?
          </h2>
          <p className="text-[#858789] text-lg md:text-xl max-w-2xl mx-auto">
            Compromisso com excelência e cuidado personalizado
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? item.delay : '0ms',
                }}
              >
                {/* Borda animada no hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#003870] rounded-xl transition-all duration-300"></div>

                {/* Gradiente de fundo no hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Ícone com background */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#003870]/10 rounded-lg mb-6 group-hover:bg-[#003870] group-hover:scale-110 transition-all duration-500">
                    <Icon className="text-[#003870] group-hover:text-white transition-colors duration-500" size={32} />
                  </div>

                  {/* Título */}
                  <h3 className="text-[#003870] text-xl font-bold mb-3 group-hover:text-[#004a8f] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>

                  {/* Linha decorativa */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#003870] to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>

                {/* Efeito de brilho no canto */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Estatísticas adicionais */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-[#003870] text-4xl md:text-5xl font-bold mb-2">30+</div>
            <div className="text-[#858789] font-medium">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-[#003870] text-4xl md:text-5xl font-bold mb-2">15</div>
            <div className="text-[#858789] font-medium">Especialistas</div>
          </div>
          <div className="text-center">
            <div className="text-[#003870] text-4xl md:text-5xl font-bold mb-2">10mil+</div>
            <div className="text-[#858789] font-medium">Sorrisos Transformados</div>
          </div>
          <div className="text-center">
            <div className="text-[#003870] text-4xl md:text-5xl font-bold mb-2">100%</div>
            <div className="text-[#858789] font-medium">Dedicação ao melhor resultado final</div>
          </div>
        </div>
      </div>
    </section>
  );
}
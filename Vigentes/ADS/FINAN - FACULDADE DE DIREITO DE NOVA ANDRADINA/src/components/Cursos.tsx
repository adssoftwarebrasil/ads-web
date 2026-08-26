import { useEffect, useRef, useState } from 'react';
import { Scale, Clock, Award, BookOpen, Users, Target, Briefcase, GraduationCap } from 'lucide-react';

const areasAtuacao = [
  {
    icon: Scale,
    title: 'Advocacia',
    description: 'Atue em diversas áreas do direito, representando clientes em processos judiciais e extrajudiciais.'
  },
  {
    icon: Briefcase,
    title: 'Direito Empresarial',
    description: 'Assessore empresas em questões contratuais, societárias e regulatórias.'
  },
  {
    icon: Users,
    title: 'Concursos Públicos',
    description: 'Prepare-se para ingressar na carreira pública como juiz, promotor, defensor ou delegado.'
  },
  {
    icon: GraduationCap,
    title: 'Docência',
    description: 'Lecione em instituições de ensino superior e contribua para a formação de novos profissionais.'
  },
  {
    icon: Target,
    title: 'Consultoria Jurídica',
    description: 'Preste consultoria especializada para empresas e indivíduos.'
  },
  {
    icon: BookOpen,
    title: 'Pesquisa Acadêmica',
    description: 'Desenvolva pesquisas e contribua para o avanço do conhecimento jurídico.'
  }
];

const diferenciais = [
  {
    icon: Award,
    title: 'Reconhecido pelo MEC',
    description: 'Curso com nota máxima nas avaliações'
  },
  {
    icon: Users,
    title: 'Corpo Docente Qualificado',
    description: 'Professores mestres, doutores e especialistas'
  },
  {
    icon: Clock,
    title: 'Duração: 5 anos',
    description: '10 semestres de formação completa'
  },
  {
    icon: Target,
    title: 'Prática desde o Início',
    description: 'NPJ - Núcleo de Prática Jurídica ativo'
  }
];

export default function Cursos() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="curso"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #074785 0%, #052d54 50%, #031a2e 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 text-sm font-semibold text-white border border-white/20">
              ⚖️ Bacharelado em Direito
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Torne-se um{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Profissional</span>
              <span
                className="absolute bottom-2 left-0 w-full h-3 -z-0"
                style={{ backgroundColor: '#e4100f', opacity: 0.6 }}
              ></span>
            </span>
            {' '}da Justiça
          </h2>

          <p
            className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Formação completa para atuar em todas as áreas do Direito, com preparação teórica e prática
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon size={32} className="text-white mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Áreas de Atuação
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasAtuacao.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl mb-4" style={{ backgroundColor: '#f0f8ff' }}>
                    <Icon size={32} style={{ color: '#074785' }} />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#074785' }}>
                    {area.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pronto para Iniciar Sua Jornada no Direito?
            </h3>

            <p className="text-white/80 mb-8 text-lg">
              Fale com nossos consultores e tire suas dúvidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5567999780073?text=Olá! Gostaria de saber mais sobre o curso de Direito."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 bg-white shadow-xl hover:shadow-2xl"
                style={{ color: '#074785' }}
              >
                <span>Saiba Mais sobre o Curso</span>
              </a>

              <a
                href="https://wa.me/5567999780073?text=Olá! Gostaria de agendar uma visita à FINAN."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border-2 border-white text-white hover:bg-white/10"
              >
                <span>Agende uma Visita</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

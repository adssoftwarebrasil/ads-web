import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Award, Users, BookOpen, Target } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    value: '+15',
    label: 'Anos de Tradição'
  },
  {
    icon: Users,
    value: '+1000',
    label: 'Alunos Formados'
  },
  {
    icon: BookOpen,
    value: '5',
    label: 'Anos de Curso'
  }
];

const infoCards = [
  {
    icon: MapPin,
    title: 'Localização Estratégica',
    description: 'Centro de Nova Andradina/MS, fácil acesso e próximo a você'
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Das 12h às 22h, de segunda a sexta-feira'
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Preparação sólida para o mercado de trabalho'
  }
];

export default function Sobre() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Seção principal com imagem e texto */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagem com overlay */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              {/* Moldura decorativa */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: '#074785' }}
              ></div>
              
              {/* Imagem principal */}
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=faculdade-finan%2FWhatsApp%20Image%202022-06-23%20at%2016.39.38%20(1).webp&version_id=null"
                alt="Fachada FINAN"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover group-hover:shadow-3xl transition-shadow duration-300"
              />

              {/* Badge flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#e4100f' }}
                  >
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Instituição</p>
                    <p className="text-lg font-bold" style={{ color: '#074785' }}>Reconhecida MEC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo de texto */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Badge superior */}
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 mb-6">
              <span className="text-sm font-semibold" style={{ color: '#074785' }}>
                📚 Sobre a FINAN
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#074785' }}>
              Associação Educacional{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Nove de Julho</span>
                <span
                  className="absolute bottom-2 left-0 w-full h-3 -z-0 opacity-20"
                  style={{ backgroundColor: '#e4100f' }}
                ></span>
              </span>
            </h2>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                A <strong style={{ color: '#074785' }}>Faculdade de Direito de Nova Andradina - FINAN</strong> é mantida pela Associação Educacional Nove de Julho (AENJ), uma instituição comprometida com a excelência no ensino jurídico.
              </p>
              <p>
                Localizada estrategicamente no centro de Nova Andradina/MS, a FINAN oferece o curso de Bacharelado em Direito com infraestrutura completa, Núcleo de Prática Jurídica (NPJ) ativo e corpo docente especializado, formado por mestres, doutores e profissionais experientes.
              </p>
            </div>

            {/* Highlights com números */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: '#e4100f' }} />
                    <p className="text-2xl font-bold mb-1" style={{ color: '#074785' }}>{item.value}</p>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            
              <a href="https://wa.me/5567999780073?text=Olá! Quero conhecer mais sobre a FINAN."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-xl group"
              style={{ backgroundColor: '#e4100f' }}
            >
              <span>Conheça Nossa História</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Cards informativos */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#074785' }}>
              Vantagens de Estudar na FINAN
            </h3>
            <p className="text-gray-600 text-lg">
              Facilidades pensadas para o seu sucesso acadêmico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              const isActive = activeCard === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                    isActive ? 'shadow-2xl scale-105 border-[#074785]' : 'shadow-md border-gray-100 hover:shadow-xl'
                  }`}
                >
                  {/* Barra superior animada */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                    style={{ 
                      backgroundColor: '#e4100f',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left'
                    }}
                  ></div>

                  {/* Ícone */}
                  <div 
                    className="inline-flex p-4 rounded-2xl mb-5 transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? '#e4100f' : '#f0f8ff',
                      transform: isActive ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    <Icon 
                      size={28} 
                      style={{ color: isActive ? '#ffffff' : '#074785' }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <h4 
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: isActive ? '#e4100f' : '#074785' }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Indicador de hover */}
                  <div 
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: '#e4100f',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(0)'
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge final */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-red-50 px-8 py-4 rounded-full shadow-lg">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#074785' }}>
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600 font-medium">Compromisso com</p>
              <p className="text-xl font-bold" style={{ color: '#074785' }}>Formando Profissionais de Sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
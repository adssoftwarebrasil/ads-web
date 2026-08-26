import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Link real para o endereço no Google Maps
const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Av.+Antônio+Joaquim+de+Moura+Andrade,+910+-+Centro,+Nova+Andradina+-+MS";

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av. Antônio Joaquim de Moura Andrade, 910',
    subtitle: 'Centro – Nova Andradina/MS | CEP 79730-000', // CEP Corrigido
    link: googleMapsLink,
    linkText: 'Ver no Google Maps',
    action: 'Abrir Mapa'
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 12h às 22h',
    subtitle: 'Plantão de dúvidas disponível',
    link: 'https://wa.me/5567999780073?text=Gostaria de agendar uma visita à FINAN',
    linkText: 'Agendar Visita',
    action: 'Agendar'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '(67) 99978-0073',
    subtitle: 'Atendimento rápido e direto',
    link: 'https://wa.me/5567999780073?text=Olá! Gostaria de mais informações sobre a FINAN.',
    linkText: 'Enviar Mensagem',
    action: 'Chamar'
  }
];

export default function Localizacao() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      id="contato"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-6 text-sm font-semibold" style={{ color: '#074785' }}>
              📍 Entre em Contato
            </span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: '#074785' }}
          >
            Visite Nosso{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Campus</span>
              <span
                className="absolute bottom-2 left-0 w-full h-3 -z-0"
                style={{ backgroundColor: '#e4100f', opacity: 0.3 }}
              ></span>
            </span>
          </h2>

          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Estamos no coração de Nova Andradina, prontos para receber você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-white rounded-2xl p-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  } ${isHovered ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'}`}
                  style={{ 
                    transitionDelay: `${300 + index * 100}ms`,
                    border: isHovered ? '2px solid #074785' : '2px solid transparent'
                  }}
                >
                  {/* Barra superior animada */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                    style={{ 
                      backgroundColor: '#e4100f',
                      transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left'
                    }}
                  ></div>

                  <div className="flex items-start gap-4">
                    {/* Ícone */}
                    <div 
                      className="flex-shrink-0 p-4 rounded-xl transition-all duration-300"
                      style={{ 
                        backgroundColor: isHovered ? '#e4100f' : '#f0f8ff',
                        transform: isHovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                      }}
                    >
                      <Icon 
                        size={28} 
                        style={{ color: isHovered ? '#ffffff' : '#074785' }}
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-2 transition-colors duration-300"
                        style={{ color: isHovered ? '#e4100f' : '#074785' }}
                      >
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-semibold mb-1 text-lg">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {info.subtitle}
                      </p>

                      {/* Botão de ação */}
                      
                        <a href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                        style={{ 
                          backgroundColor: isHovered ? '#e4100f' : '#f8f9fa',
                          color: isHovered ? '#ffffff' : '#074785'
                        }}
                      >
                        <span>{info.action}</span>
                        <ArrowRight 
                          size={16} 
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Efeito de brilho */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ transform: 'translateX(-100%)', animation: isHovered ? 'shine 1.5s' : 'none' }}
                  ></div>
                </div>
              );
            })}

            {/* Card de ação rápida */}
            <div 
              className={`bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Agende sua Visita</h3>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Conheça nossa estrutura, converse com coordenadores e tire todas as suas dúvidas pessoalmente.
              </p>
              
                <a href="https://wa.me/5567999780073?text=Olá! Gostaria de agendar uma visita à FINAN para conhecer o campus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div 
            className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative group">
              {/* Frame decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-red-200 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Container do mapa */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Badge no topo do mapa */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                    <Navigation size={18} style={{ color: '#e4100f' }} />
                    <span className="font-bold text-sm" style={{ color: '#074785' }}>
                      Centro de Nova Andradina
                    </span>
                  </div>
                </div>

                {/* Mapa Corrigido */}
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Ant%C3%B4nio+Joaquim+de+Moura+Andrade,+910+-+Centro,+Nova+Andradina+-+MS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Mapa da Faculdade FINAN"
                ></iframe>

                {/* Botão flutuante de direções */}
                
                  <a href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#e4100f', color: '#ffffff' }}
                >
                  <Navigation size={20} />
                  <span>Como Chegar</span>
                </a>
              </div>

              {/* Card de informação adicional */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} style={{ color: '#074785' }} />
                    <p className="font-bold text-sm" style={{ color: '#074785' }}>Fácil Acesso</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} style={{ color: '#074785' }} />
                    <p className="font-bold text-sm" style={{ color: '#074785' }}>Horário Flexível</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Atendimento até 22h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
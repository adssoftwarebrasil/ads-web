import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

interface Schedule {
  day: string;
  hours: string;
}

const schedule: Schedule[] = [
  { day: 'Segunda-feira', hours: '9h às 18h30' },
  { day: 'Terça-feira', hours: '9h às 18h30' },
  { day: 'Quarta-feira', hours: '9h às 18h' },
  { day: 'Quinta-feira', hours: '9h às 18h30' },
  { day: 'Sexta-feira', hours: '9h às 18h30' },
  { day: 'Sábado', hours: '9h às 13h' },
  { day: 'Domingo', hours: 'Fechado' }
];

export function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      ref={sectionRef}
      className="py-20 lg:py-24 bg-cream-main"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brown-main mb-4">
            Visite Nossa Loja
          </h2>
          <p className="text-lg md:text-xl text-brown-light max-w-2xl mx-auto">
            Estamos no coração do Jardim Camburi, aguardando sua visita.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* COLUNA 1: MAPA (Esquerda)
              - Mobile: h-[300px] (altura fixa)
              - Desktop (lg): h-full (estica para acompanhar a coluna da direita)
          */}
          <div
            className={`w-full h-[300px] lg:h-auto lg:min-h-full rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8267582867735!2d-40.28708932424856!3d-20.267881081204947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817eda2f4a1fb%3A0x6e4c4c4c4c4c4c4c!2sR.%20Italina%20Pereira%20Mota%2C%20144%20-%20Jardim%20Camburi%2C%20Vit%C3%B3ria%20-%20ES%2C%2029090-370!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ótica Victoria"
              // Grayscale suave para ficar elegante, cor ao passar o mouse
              className="w-full h-full object-cover filter grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          {/* COLUNA 2: INFORMAÇÕES (Direita) */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            
            {/* Card Endereço */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#3b2720]/5 flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-cream-beige p-3 rounded-xl text-brown-main">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-brown-main mb-2">
                    Endereço
                  </h3>
                  <p className="text-brown-light leading-relaxed">
                    R. Italina Pereira Mota, 144<br />
                    Jardim Camburi, Vitória - ES<br />
                    <span className="text-sm opacity-75">CEP 29090-370</span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//R.+Italina+Pereira+Mota,+144+-+Jardim+Camburi,+Vit%C3%B3ria+-+ES,+29090-370"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brown-main text-cream-main px-6 py-3.5 rounded-xl hover:bg-brown-light transition-all hover:scale-[1.02] shadow-md font-semibold group"
              >
                <Navigation size={18} className="group-hover:rotate-45 transition-transform" />
                Como Chegar
              </a>
            </div>

            {/* Card Horário */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#3b2720]/5 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cream-beige p-3 rounded-xl text-brown-main">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-brown-main">
                  Horário de Funcionamento
                </h3>
              </div>

              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-sm md:text-base border-b border-gray-100 last:border-0 pb-2 last:pb-0"
                  >
                    <span className="font-medium text-brown-main/80">
                      {item.day}
                    </span>
                    <span
                      className={`font-semibold ${
                        item.hours === 'Fechado'
                          ? 'text-red-400 opacity-80'
                          : 'text-brown-main'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
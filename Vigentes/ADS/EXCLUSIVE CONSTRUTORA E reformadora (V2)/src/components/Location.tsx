import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';

export const Location: React.FC = () => {
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
      id="localizacao"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#050a1e] mb-3 md:mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg md:text-xl text-gray-600 px-4">
            Visite nosso escritório no coração de Goiânia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2048783725063!2d-49.274548599999996!3d-16.7166262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0d7fd86e9cf%3A0x46d16fe881a11534!2sEldorado%20Business%20Tower!5e0!3m2!1spt-BR!2sbr!4v1765955397371!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Exclusive Construtora"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white px-3 py-2 md:px-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#07dde5]" size={18} />
                  <span className="font-semibold text-[#050a1e] text-xs md:text-sm">Exclusive Construtora</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-5 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-[#050a1e] to-[#0a154b] p-6 md:p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6">Informações de Contato</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <MapPin className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Endereço</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Eldorado Business Tower<br />
                      Av. C-255, 400 - Salas 912 e 913<br />
                      Nova Suíça, Goiânia - GO<br />
                      CEP: 74280-010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Clock className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-200 text-sm">
                      Segunda a Sexta: 08:00 - 18:00<br />
                      Sábado: 08:00 - 12:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Phone className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Telefones</h4>
                    <div className="text-gray-200 text-sm space-y-1">
                      <a href="tel:+5562993531722" className="block hover:text-[#07dde5] transition-colors">
                        WhatsApp: (62) 99353-1722
                      </a>
                      <a href="tel:+556234136426" className="block hover:text-[#07dde5] transition-colors">
                        Fixo: (62) 3413-6426
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Mail className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <p className="text-gray-200 text-sm">contato@exclusiveconstrutora.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#07dde5] p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Navigation className="text-[#050a1e]" size={24} />
                <h4 className="font-bold text-[#050a1e] text-lg">Como Chegar</h4>
              </div>
              <p className="text-[#050a1e] text-sm leading-relaxed">
                Estamos localizados no Eldorado Business Tower, no Setor Nova Suíça, uma das regiões mais nobres de Goiânia.
                Fácil acesso pela Av. T-9 e Av. T-63. Estacionamento disponível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

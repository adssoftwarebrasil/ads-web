import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
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
      id="localizacao"
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#F5EEEB] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15 w-full">
        <div className="text-center mb-12">
          <h2
            className={`text-[28px] md:text-[40px] font-bold text-[#78645C] mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Venha Nos Visitar
          </h2>
          <div
            className={`w-[60px] h-[3px] bg-gradient-to-r from-[#FFB5B8] to-flor-green mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full">
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-flor-green/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-[56px] h-[56px] rounded-full bg-gradient-to-br from-flor-green to-[#4a6b5e] flex items-center justify-center shadow-md">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#78645C] mb-2">
                    Endereço
                  </h3>
                  <p className="text-[#78645C]/80 leading-relaxed">
                    Av. Manaus, 413
                    <br />
                    Bairro Belo Horizonte
                    <br />
                    Marabá - PA
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#FFB5B8]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-[56px] h-[56px] rounded-full bg-gradient-to-br from-flor-green to-[#4a6b5e] flex items-center justify-center shadow-md">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#78645C] mb-2">
                    Horários de Atendimento
                  </h3>
                  <p className="text-[#78645C]/80 leading-relaxed">
                    Segunda a Sexta
                    <br />
                    08:00 - 12:00 | 14:00 - 20:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-flor-green/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-[56px] h-[56px] rounded-full bg-gradient-to-br from-flor-green to-[#4a6b5e] flex items-center justify-center shadow-md">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#78645C] mb-2">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/5594991379414"
                    className="text-[#78645C]/80 hover:text-[#FFB5B8] transition-colors duration-300"
                  >
                    (94) 99137-9414
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-br from-flor-green to-[#4a6b5e] text-white px-8 py-4 rounded-lg font-semibold text-base hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg w-full"
            >
              <Phone size={20} />
              Falar no WhatsApp
            </a>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] border-2 border-[#FFB5B8]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6987654321!2d-49.8876543!3d-5.3647891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnNTMuMiJTIDQ5wrA1Myc1MS42Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RC Flor De Salute"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

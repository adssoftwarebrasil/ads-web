import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Location() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="localizacao" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sage uppercase tracking-widest text-sm font-medium">
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gray mt-2 mb-4 leading-tight">
            Localização
          </h2>
          <p className="text-warm-gray/70 text-lg max-w-3xl mx-auto">
            Venha nos visitar no coração do Setor Bueno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div
            className={`${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8934736912574!2d-49.26544!3d-16.6982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzUzLjUiUyA0OcKwMTUnNTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sense Cozinha Contemporânea"
              />
            </div>
          </div>

          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            <div id="contato" className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-warm-gray mb-2">Endereço</h3>
                  <p className="text-warm-gray/70">
                    Rua T1, 917 - Setor Bueno<br />
                    Goiânia - GO, 74.210-098
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-sage" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-warm-gray mb-2">Telefone/WhatsApp</h3>
                  <a
                    href="https://wa.me/556239267006"
                    className="text-warm-gray/70 hover:text-orange-primary transition-colors"
                  >
                    (62) 3926-7006
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-warm-gray mb-2">E-mail</h3>
                  <a
                    href="mailto:sensecozinha@hotmail.com"
                    className="text-warm-gray/70 hover:text-orange-primary transition-colors"
                  >
                    sensecozinha@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-sage" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-warm-gray mb-2">Horários</h3>
                  <p className="text-warm-gray/70">
                    Segunda a Sexta: 11:00 às 14:30<br />
                    Sábado: 11:30 às 15:00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/dir//Rua+T1,+917+-+Setor+Bueno,+Goiânia+-+GO,+74210-098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-orange-primary text-white rounded-full hover:bg-orange-dark transition-all duration-300 hover:scale-105 shadow-lg font-medium"
              >
                <ExternalLink size={20} />
                Abrir no Google Maps
              </a>
              <a
                href="https://wa.me/556239267006?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-sage text-sage rounded-full hover:bg-sage hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                <Phone size={20} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Navigation } from 'lucide-react';

const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const schedule = [
    { day: 'Segunda a Quinta', hours: '09:00 às 18:00' },
    { day: 'Sexta', hours: '10:00 às 18:00' },
    { day: 'Sábado', hours: '09:00 às 13:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Venha Nos Visitar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={`bg-white border-t-4 border-primary rounded-2xl p-8 shadow-xl transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Horário de Funcionamento
              </h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                >
                  <span className="font-semibold text-secondary-dark">
                    {item.day}
                  </span>
                  <span className="text-primary font-bold">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary mb-1">Endereço</h4>
                  <p className="text-secondary-dark/70">Guará I - Brasília/DF</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Consultório+Veterinário+Melina+Guará+I+Brasília"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Como Chegar
            </a>
          </div>

          <div
            className={`bg-white border-t-4 border-primary rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9876!2d-47.9876!3d-15.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzA1LjAiUyA0N8KwNTknMTUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório Veterinário Melina"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

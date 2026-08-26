import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface CityTagProps {
  name: string;
  delay: number;
}

const CityTag = ({ name, delay }: CityTagProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (tagRef.current) {
      observer.observe(tagRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={tagRef}
      className={`bg-white px-6 py-3 rounded-full shadow-md text-primary-blue-dark font-semibold transition-all duration-500 transform ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
      }`}
    >
      {name}
    </div>
  );
};

const ServiceArea = () => {
  const cities = [
    'Goiânia',
    'Aparecida de Goiânia',
    'Senador Canedo',
    'Hidrolândia',
    'Trindade',
    'Aragoiânia',
  ];

  const address = 'Rua 11 de Maio, Quadra A, Lote 04, Setor Central, Aparecida de Goiânia - GO';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wide mb-4">
            ONDE ATUAMOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue-dark mb-6">
            Atendemos Toda a Grande Goiânia
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city, index) => (
            <CityTag key={city} name={city} delay={index * 100} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8947267891645!2d-49.24449!3d-16.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ5JzE5LjIiUyA0OcKwMTQnNDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890&q=Rua+11+de+Maio,+Quadra+A,+Lote+04,+Setor+Central,+Aparecida+de+Goiânia+-+GO"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização ATTIVA Projetos"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-orange/10 rounded-full mb-6">
              <MapPin size={32} className="text-primary-orange" />
            </div>
            <h3 className="text-2xl font-bold text-primary-blue-dark mb-4">
              Nossa Sede
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Rua 11 de Maio, Quadra A, Lote 04<br />
              Setor Central, Aparecida de Goiânia - GO
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-orange-light transition-all duration-300 hover:shadow-lg"
            >
              <Navigation size={20} />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

import { MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Location() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const cities = ['São Luís', 'São José de Ribamar', 'Raposa', 'Paço do Lumiar'];

  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Onde Estamos e Atendemos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Atendimento em toda a Grande São Luís
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Endereço Principal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Avenida Lourenço Vieira da Silva, nº 18, Loja 03
                    <br />
                    Jardim São Cristóvão
                    <br />
                    São Luís - MA
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-black mb-3">Cidades Atendidas</h4>
                <div className="flex flex-wrap gap-3">
                  {cities.map((city, index) => (
                    <span
                      key={index}
                      className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.800665491551!2d-44.22363398909453!3d-2.5714840383713273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69a9c9ba04c0f%3A0x40f52bcd2e23e9ee!2sAv.%20Lourenço%20Vieira%20da%20Silva%2C%2018%20-%2003%20-%20Jardim%20São%20Cristovão%2C%20São%20Luís%20-%20MA%2C%2065000-000!5e0!3m2!1spt-BR!2sbr!4v1765475879885!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MAP Locações"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

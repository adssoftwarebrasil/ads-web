import { useEffect, useRef } from 'react';
import { Clock, MapPin, ExternalLink, Navigation } from 'lucide-react';

const horarios = [
  { dia: 'Segunda a Sexta', horario: '07:45 - 12:00 | 13:45 - 18:00' },
  { dia: 'Sábado', horario: '07:45 - 12:30' },
  { dia: 'Domingo', horario: 'Fechado' },
];

const address = {
  street: 'R. Dep. Vieira de Melo, N° 193',
  neighborhood: 'São Miguel',
  city: 'Barreiras - BA',
  zip: '47800-400',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Dep.+Vieira+de+Melo,+193+-+São+Miguel,+Barreiras+-+BA'
};

export default function HorarioLocalizacao() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#f5f5f5]" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f4196] mb-4">
            Venha nos visitar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para lhe atender com a melhor consultoria em tintas da região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card Horários */}
          <div className="animate-on-scroll opacity-0 flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="bg-[#3f4196] p-6 text-white flex items-center gap-4">
                <Clock className="w-8 h-8" />
                <h3 className="text-xl font-bold">Horário de Atendimento</h3>
              </div>
              
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
                <div className="space-y-6">
                  {horarios.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col sm:flex-row justify-between sm:items-center pb-4 ${
                        index !== horarios.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <span className="text-lg font-bold text-gray-800 mb-1 sm:mb-0">{item.dia}</span>
                      <span className={`text-base font-medium px-3 py-1 rounded-full w-fit ${
                        item.horario === 'Fechado' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-indigo-50 text-[#3f4196]'
                      }`}>
                        {item.horario}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Localização */}
          <div className="animate-on-scroll opacity-0 flex flex-col h-full" style={{ animationDelay: '200ms' }}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="bg-[#ec3237] p-6 text-white flex items-center gap-4">
                <MapPin className="w-8 h-8" />
                <h3 className="text-xl font-bold">Onde Estamos</h3>
              </div>

              <div className="p-0 flex-grow relative h-64 lg:h-auto min-h-[300px]">
                {/* Mapa Embed */}
                <iframe
                  title="Mapa Central Tintas"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  src={`https://maps.google.com/maps?q=R.+Dep.+Vieira+de+Melo,+193+-+São+Miguel,+Barreiras+-+BA&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-gray-800 font-medium text-lg">{address.street}</p>
                    <p className="text-gray-500">{address.neighborhood}, {address.city}</p>
                    <p className="text-gray-400 text-sm">{address.zip}</p>
                  </div>
                  
                  <a 
                    href={address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3f4196] hover:bg-[#32347a] text-white px-5 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-md group w-full sm:w-auto justify-center"
                  >
                    <Navigation className="w-4 h-4 group-hover:animate-bounce" />
                    <span>Traçar Rota</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
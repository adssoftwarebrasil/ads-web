import { MapPin, Clock, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const locations = [
  {
    name: 'Unidade São Leopoldo',
    address: 'Av. Imperatriz Leopoldina, 2121 - Pinheiro, São Leopoldo - RS, 93042-165',
    hours: [
      { day: 'Segunda a Sexta', time: '08:30 - 19:00' },
      { day: 'Sábado', time: '08:30 - 16:00' },
      { day: 'Domingo', time: 'Fechado' },
    ],
    tel: 'tel:5135891271',
    whatsapp: 'https://wa.me/5551989963719',
    mapTitle: 'Mapa de Unidade São Leopoldo',
    mapEmbed:
      'https://maps.google.com/maps?q=Av.%20Imperatriz%20Leopoldina%2C%202121%20-%20Pinheiro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093042-165&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapSearch:
      'https://www.google.com/maps/search/?api=1&query=Av.%20Imperatriz%20Leopoldina%2C%202121%20-%20Pinheiro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093042-165',
  },
  {
    name: 'Unidade Ivoti',
    address: 'Av. Capivara, 1465 - Jardim Buhler, Ivoti - RS, 93900-000',
    hours: [
      { day: 'Segunda, Terça, Quinta, Sexta', time: '09:00 - 12:00, 14:00 - 19:00' },
      { day: 'Quarta', time: '09:00 - 12:00, 14:00 - 19:00' },
      { day: 'Sábado', time: '08:00 - 12:00' },
      { day: 'Domingo', time: 'Fechado' },
    ],
    tel: 'tel:5135633838',
    whatsapp: 'https://wa.me/5551935055810',
    mapTitle: 'Mapa de Unidade Ivoti',
    mapEmbed:
      'https://maps.google.com/maps?q=Av.%20Capivara%2C%201465%20-%20Jardim%20Buhler%2C%20Ivoti%20-%20RS%2C%2093900-000&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapSearch:
      'https://www.google.com/maps/search/?api=1&query=Av.%20Capivara%2C%201465%20-%20Jardim%20Buhler%2C%20Ivoti%20-%20RS%2C%2093900-000',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FD7500] font-semibold tracking-wider uppercase text-sm">
            Onde nos encontrar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005098] mt-2 mb-4">
            Nossas Unidades
          </h2>
          <div className="w-24 h-1.5 bg-[#FD7500] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos estrategicamente localizados para melhor atender você e seu pet. Escolha a
            unidade mais próxima e venha nos visitar!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="p-6 sm:p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#005098]">{loc.name}</h3>
                  <div className="p-2 bg-blue-50 rounded-full text-[#005098]">
                    <MapPin width={24} height={24} />
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-6 p-4 bg-gray-50 rounded-xl">
                  <MapPin width={20} height={20} className="text-[#FD7500] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium leading-relaxed">{loc.address}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3 text-[#005098] font-semibold">
                    <Clock width={20} height={20} />
                    <h4>Horário de Atendimento</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    {loc.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-600 font-medium">{h.day}</span>
                        <span className="text-gray-900 font-bold text-right ml-4">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={loc.tel}
                    className="flex items-center justify-center px-4 py-3 border-2 border-[#005098] text-[#005098] font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Phone width={18} height={18} className="mr-2" />
                    Ligar Agora
                  </a>
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors duration-300 shadow-sm"
                  >
                    <MessageCircle width={20} height={20} className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="w-full h-64 sm:h-72 relative bg-gray-200">
                <iframe
                  title={loc.mapTitle}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={loc.mapEmbed}
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ border: '0px' }}
                ></iframe>
                <a
                  href={loc.mapSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold text-gray-700 shadow-md flex items-center gap-2 hover:bg-[#005098] hover:text-white transition-all"
                >
                  Abrir no Google Maps <ExternalLink width={12} height={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

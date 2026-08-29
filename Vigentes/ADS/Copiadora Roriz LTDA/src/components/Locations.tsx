import { Building, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_MAIN, WHATSAPP_CLICKART, openWhatsApp } from '../lib/whatsapp';

interface Location {
  accent: 'blue' | 'orange';
  name: string;
  address: string;
  city: string;
  phone: string;
  tel: string;
  mapsQuery: string;
  mapEmbed: string;
  whatsapp: string;
}

const locations: Location[] = [
  {
    accent: 'blue',
    name: 'Copiadora Só Cópias',
    address: 'R. Gonçalves Dias, 118 - Centro',
    city: 'Porto Velho - RO, 76801-076',
    phone: '(69) 99209-7212',
    tel: '69992097212',
    mapsQuery: 'R.+Gonçalves+Dias,+118+-+Centro,+Porto+Velho+-+RO',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.234043553144!2d-63.902797699999994!3d-8.7640373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cdc6378651b%3A0x3eba59e1aa7d91fb!2sR.%20Gon%C3%A7alves%20Dias%2C%20118%20-%20Centro%2C%20Porto%20Velho%20-%20RO%2C%2076801-076!5e0!3m2!1spt-BR!2sbr!4v1764463771950!5m2!1spt-BR!2sbr',
    whatsapp: WHATSAPP_MAIN,
  },
  {
    accent: 'orange',
    name: "ClickArt's Gráfica Expressa",
    address: 'Av. Jatuarana, 5149 - C - Nova Floresta',
    city: 'Porto Velho - RO, 76807-441',
    phone: '(69) 99269-6363',
    tel: '69992696363',
    mapsQuery: 'Av.+Jatuarana,+5149+-+C+-+Nova+Floresta,+Porto+Velho+-+RO',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9553726051386!2d-63.88236122396547!3d-8.790263191261788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325d6ad261305b%3A0x2d76a1158e72af0c!2sClickArts%20Gr%C3%A1fica%20Expressa!5e0!3m2!1spt-BR!2sbr!4v1765148854983!5m2!1spt-BR!2sbr',
    whatsapp: WHATSAPP_CLICKART,
  },
];

export default function Locations() {
  return (
    <section id="localizacao" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossas Lojas em <span className="text-blue-800">Porto Velho</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visite-nos e conheça de perto nossos produtos e serviços personalizados
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((loc) => {
            const isBlue = loc.accent === 'blue';
            return (
              <div
                key={loc.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${
                  isBlue ? 'border-blue-600' : 'border-orange-500'
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    isBlue ? 'bg-blue-100' : 'bg-orange-100'
                  }`}
                >
                  <Building
                    className={`w-8 h-8 ${isBlue ? 'text-blue-600' : 'text-orange-500'}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{loc.name}</h3>
                <div className="flex items-start gap-3 text-gray-700 mb-4">
                  <MapPin
                    className={`w-6 h-6 flex-shrink-0 mt-1 ${
                      isBlue ? 'text-blue-600' : 'text-orange-500'
                    }`}
                  />
                  <div>
                    <p className="text-base font-medium">{loc.address}</p>
                    <p className="text-sm text-gray-600">{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 mb-6">
                  <Phone className={`w-6 h-6 ${isBlue ? 'text-blue-600' : 'text-orange-500'}`} />
                  <a href={`tel:${loc.tel}`} className="text-base font-medium hover:underline">
                    {loc.phone}
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md mb-6">
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="250"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${loc.name}`}
                    className="w-full"
                    style={{ border: '0px' }}
                  ></iframe>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md text-white ${
                      isBlue
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    Ver no Maps
                  </a>
                  <button
                    onClick={() => openWhatsApp(loc.whatsapp)}
                    className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Segunda a Sexta: 8h às 18h</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Sábado: 8h às 12h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

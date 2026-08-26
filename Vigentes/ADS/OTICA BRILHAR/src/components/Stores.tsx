import { MapPin, Clock, Phone } from 'lucide-react';

type Store = {
  badge: string;
  badgeClass: string;
  name: string;
  mapSrc: string;
  mapTitle: string;
  address: string;
  hours: string;
  phone: string;
  mapsUrl: string;
};

const stores: Store[] = [
  {
    badge: 'Matriz',
    badgeClass: 'bg-[rgb(197,46,52)]',
    name: 'Loja Matriz',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7652.439377392594!2d-54.6316759!3d-16.46441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c841e9000ffd%3A0x5a6a2ccf23ac2702!2s%C3%93tica%20Brilhar!5e0!3m2!1spt-BR!2sbr!4v1774285681294!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa Loja Matriz',
    address: 'R. Dom Pedro II, 1225 - Centro, Rondonópolis - MT, 78740-026',
    hours: 'Seg–Sex: 07:30–18:00 | Sáb: 07:30–12:00',
    phone: '(66) 3423-7556',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=R.%20Dom%20Pedro%20II%2C%201225%20-%20Centro%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078740-026',
  },
  {
    badge: 'Filial',
    badgeClass: 'bg-[rgb(13,111,69)]',
    name: 'Loja Filial',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.6747253359816!2d-54.6240235!3d-16.4401115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c93999643579%3A0xe86eb6185eb90f8b!2s%C3%93tica%20Brilhar%20ll!5e0!3m2!1spt-BR!2sbr!4v1774285691940!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa Loja Filial',
    address: 'R. Pres. Castelo Branco, 3399 - Vila Operaria, Rondonópolis - MT, 78714-270',
    hours: 'Seg–Sex: 08:00–18:30 | Sáb: 08:00–12:30',
    phone: '(66) 98446-9577',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=R.%20Pres.%20Castelo%20Branco%2C%203399%20-%20Vila%20Operaria%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078714-270',
  },
];

export default function Stores() {
  return (
    <section id="lojas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Nossas Unidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Estamos em <span className="text-[rgb(13,111,69)]">Rondonópolis – MT</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Duas unidades para atender você com a mesma qualidade e atenção que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stores.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <iframe
                  src={s.mapSrc}
                  title={s.mapTitle}
                  width="100%"
                  height="280"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: '0px', display: 'block' }}
                ></iframe>
                <span
                  className={`absolute top-3 left-3 ${s.badgeClass} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {s.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{s.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="lucide lucide-map-pin text-[rgb(197,46,52)] mt-0.5 flex-shrink-0"
                      width={18}
                      height={18}
                    />
                    <span className="text-gray-600 text-sm">{s.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock
                      className="lucide lucide-clock text-[rgb(13,111,69)] mt-0.5 flex-shrink-0"
                      width={18}
                      height={18}
                    />
                    <span className="text-gray-600 text-sm">{s.hours}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      className="lucide lucide-phone text-gray-500 mt-0.5 flex-shrink-0"
                      width={18}
                      height={18}
                    />
                    <span className="text-gray-600 text-sm">{s.phone}</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={s.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-200 text-gray-700 hover:border-[rgb(13,111,69)] hover:text-[rgb(13,111,69)] py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    Ver no Maps
                  </a>
                  <a
                    href="http://wa.me/556684469577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[rgb(13,111,69)] hover:bg-green-700 text-white py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/anuncio-otica-mapa-celular-duas-unidades_1080x1440.webp"
            alt="Duas unidades da Ótica Brilhar"
            className="max-w-xs mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

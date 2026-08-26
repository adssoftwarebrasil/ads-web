import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const locations = [
  {
    name: 'Matriz',
    badge: 'Unidade Principal',
    badgeColor: 'rgb(17,157,219)',
    address: 'Rua São Francisco de Assis, 1493',
    neighborhood: 'Novos Campos, Sorriso - MT',
    cep: 'CEP: 78890-000',
    phone: '(66) 9 9717-3455',
    phoneLink: 'tel:+5566997173455',
    whatsapp: 'http://wa.me/556697173455',
    hours: 'Segunda a Sexta: 7h às 11h30 · 13h às 17h30',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.35952460833!2d-55.71002582493048!3d-12.55852878772017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b251e5391231%3A0x8c9bb6cca3fcc110!2sCasa%20das%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1774630844296!5m2!1spt-BR!2sbr',
    mapsUrl: 'https://maps.google.com/?q=Casa+das+Tintas+Sorriso+MT',
  },
  {
    name: 'Filial',
    badge: 'Centro Norte',
    badgeColor: 'rgb(108,189,81)',
    address: 'Av. Tancredo Neves, 1722',
    neighborhood: 'Centro Norte, Sorriso - MT',
    cep: '',
    phone: '(66) 9 9633-2057',
    phoneLink: 'tel:+5566996332057',
    whatsapp: 'http://wa.me/5566996332057',
    hours: 'Segunda a Sexta: 7h às 11h30 · 13h às 17h30',
    mapEmbed: null,
    mapsUrl: 'https://maps.google.com/?q=Av.+Tancredo+Neves+1622+Sorriso+MT',
  },
];

export default function Locations() {
  return (
    <section id="unidades" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(17,157,219,0.12)', color: 'rgb(17,157,219)' }}
          >
            Nossas Unidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
            Estamos em{' '}
            <span style={{ color: 'rgb(17,157,219)' }}>toda Sorriso</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Com 2 unidades estrategicamente localizadas, atendemos toda a cidade com facilidade e agilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, rgb(248,249,250), white)' }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
                      style={{ backgroundColor: `${loc.badgeColor}20`, color: loc.badgeColor }}
                    >
                      {loc.badge}
                    </span>
                    <h3 className="text-2xl font-black text-black">{loc.name}</h3>
                  </div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${loc.badgeColor}15` }}
                  >
                    <MapPin size={24} style={{ color: loc.badgeColor }} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-black font-medium text-sm">{loc.address}</p>
                      <p className="text-gray-500 text-sm">{loc.neighborhood}</p>
                      {loc.cep && <p className="text-gray-400 text-xs mt-0.5">{loc.cep}</p>}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-400 flex-shrink-0" />
                    <a href={loc.phoneLink} className="text-black font-medium text-sm hover:text-[rgb(17,157,219)] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{loc.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href={loc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center py-3 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: 'rgb(108,189,81)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 hover:scale-105"
                    style={{ borderColor: loc.badgeColor, color: loc.badgeColor }}
                  >
                    <ExternalLink size={14} />
                    Ver no Mapa
                  </a>
                </div>
              </div>

              {loc.mapEmbed && (
                <div className="h-56 overflow-hidden">
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${loc.name} Casa das Tintas`}
                  />
                </div>
              )}

              {!loc.mapEmbed && (
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgb(108,189,81,0.1), rgb(17,157,219,0.1))' }}
                >
                  <div className="text-center">
                    <MapPin size={40} className="mx-auto mb-2" style={{ color: 'rgb(108,189,81)' }} />
                    <p className="text-gray-500 text-sm">Av. Tancredo Neves, 1622</p>
                    <p className="text-gray-400 text-xs">Centro Norte, Sorriso - MT</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

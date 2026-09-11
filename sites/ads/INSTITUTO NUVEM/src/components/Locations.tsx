import { useState } from 'react';
import { MapPin, Clock, Phone, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const locations = {
  primavera: {
    tab: 'Primavera do Leste',
    name: 'Primavera do Leste',
    badge: 'Unidade Matriz',
    address: 'R. Santo Amaro, 1145 - Jardim Riva, Primavera do Leste - MT, 78850-000',
    hours: 'Segunda a Sexta: 07:00–11:00 | 13:00–17:00',
    phone: '(66) 9 9656-8775',
    whatsapp: 'http://wa.me/556696568775',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.765725248678!2d-54.30854012487487!3d-15.550684785056202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725fc9895b97b%3A0x6e2644442b25ef3f!2sInstituto%20Nuvem!5e0!3m2!1spt-BR!2sbr!4v1773316918365!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa Primavera do Leste',
  },
  campoverde: {
    tab: 'Campo Verde',
    name: 'Campo Verde',
    badge: 'Especialista em TEA',
    address: 'R. São Salvador, 647 - Centro, Campo Verde - MT',
    hours: 'Segunda a Sexta: 07:00–11:00 | 13:00–17:00',
    phone: '(66) 9 9935-2163',
    whatsapp: 'http://wa.me/556699352163',
    mapSrc:
      'https://www.google.com/maps?q=Instituto+Nuvem+Campo+Verde+MT&output=embed',
    mapTitle: 'Mapa Campo Verde',
  },
} as const;

type LocationKey = keyof typeof locations;

export default function Locations() {
  const [active, setActive] = useState<LocationKey>('primavera');
  const loc = locations[active];
  const keys = Object.keys(locations) as LocationKey[];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe text-center max-w-3xl mx-auto mb-14">
          <span className="tag mb-5 inline-block">Nossas Unidades</span>
          <h2 className="section-title mb-5">
            Estamos Perto de<br />
            <span className="text-primary">Você no Mato Grosso</span>
          </h2>
          <p className="section-subtitle">
            Com unidades em Primavera do Leste e Campo Verde, levamos atendimento especializado cada vez mais perto das famílias.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-10">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                active === k
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-gray-600 hover:bg-cream hover:text-gray-800'
              }`}
            >
              <MapPin size={14} />
              {locations[k].tab}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src={loc.mapSrc}
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.mapTitle}
              className="w-full"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-800 text-lg leading-tight">{loc.name}</p>
                  <span className="font-sans text-xs font-semibold text-primary">{loc.badge}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{loc.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gray-400 mt-0.5 shrink-0" />
                  <p className="font-sans text-sm text-gray-600">{loc.hours}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400 shrink-0" />
                  <p className="font-sans text-sm text-gray-600 font-medium">{loc.phone}</p>
                </div>
              </div>
              <a
                href={loc.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-primary text-white font-heading font-semibold text-sm py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar pelo WhatsApp
                <ChevronRight size={15} />
              </a>
            </div>
            <div className="bg-surface rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-gray-700 text-sm">Horário de Atendimento</p>
                <p className="font-sans text-xs text-gray-500 mt-0.5">Segunda a Sexta · 07h–11h e 13h–17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

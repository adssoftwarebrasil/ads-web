import { MapPin, Clock, Navigation } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';

const branches = [
  {
    type: 'Matriz',
    city: 'Goiânia',
    name: 'Max Vision - Matriz Goiânia',
    address: 'Av. Principal, Goiânia - GO',
    hours: 'Seg-Sex: 08h às 17h | Sáb-Dom: 08h às 12h',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7471635311126!2d-49.3059168!3d-16.689531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef77b04820399%3A0xfc74746f55bb0882!2sVistoria%20Veicular%20Max%20V%C3%ADsion!5e0!3m2!1spt-BR!2sbr!4v1774039274292!5m2!1spt-BR!2sbr',
    mapsUrl: 'https://maps.google.com/?q=Vistoria+Veicular+Max+Vision+Goiania',
    msg: 'Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20na%20unidade%20Goiânia%20(Matriz).',
    badge: 'Matriz',
  },
  {
    type: 'Filial',
    city: 'Aparecida de Goiânia',
    name: 'Max Vision - Aparecida de Goiânia',
    address: 'Av. Euclídes da Cunha, Qd. 03 Lt. 09 - Conj. Residencial Storil, Aparecida de Goiânia - GO',
    hours: 'Seg-Sex: 08h às 17h | Sáb-Dom: 08h às 12h',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.25551630959!2d-49.273657500000006!3d-16.763958499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efb8a04b108ab%3A0xa5f80eb3de2f01af!2sMax%20V%C3%ADsion%20Vistoria%20Veicular!5e0!3m2!1spt-BR!2sbr!4v1774039548958!5m2!1spt-BR!2sbr',
    mapsUrl: 'https://maps.google.com/?q=Max+Vision+Vistoria+Veicular+Aparecida+de+Goiania',
    msg: 'Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20na%20unidade%20Aparecida%20de%20Goiânia.',
    badge: 'Filial',
  },
  {
    type: 'Filial',
    city: 'Inhumas',
    name: 'Max Vision - Inhumas',
    address: 'Inhumas - GO',
    hours: 'Seg-Sex: 08h às 17h | Sáb-Dom: 08h às 12h',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.179591020103!2d-49.4934729!3d-16.3648114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e7909829eeb5f%3A0x289da28749e0320f!2sMax%20Vision%20Vistoria%20Inhumas!5e0!3m2!1spt-BR!2sbr!4v1774039943527!5m2!1spt-BR!2sbr',
    mapsUrl: 'https://maps.google.com/?q=Max+Vision+Vistoria+Inhumas',
    msg: 'Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20na%20unidade%20Inhumas.',
    badge: 'Filial',
  },
  {
    type: 'Filial',
    city: 'Itapuranga',
    name: 'Max Vision - Itapuranga',
    address: 'Itapuranga - GO',
    hours: 'Seg-Sex: 08h às 17h | Sáb-Dom: 08h às 12h',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7471635311126!2d-49.3059168!3d-16.689531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef77b04820399%3A0xfc74746f55bb0882!2sVistoria%20Veicular%20Max%20V%C3%ADsion!5e0!3m2!1spt-BR!2sbr!4v1774039677235!5m2!1spt-BR!2sbr',
    mapsUrl: 'https://maps.google.com/?q=Vistoria+Veicular+Max+Vision+Itapuranga',
    msg: 'Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20na%20unidade%20Itapuranga.',
    badge: 'Filial',
  },
];

export default function Branches() {
  return (
    <section id="filiais" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Nossas Unidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Estamos em todo{' '}
            <span className="text-[#efcf05]">estado de Goiás</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Com 4 unidades estrategicamente distribuídas, a Max Vision está sempre perto de você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {branches.map((branch, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#efcf05]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#efcf05]/10 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name}
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full shadow-lg ${
                      branch.type === 'Matriz'
                        ? 'bg-[#efcf05] text-black'
                        : 'bg-black text-[#efcf05] border border-[#efcf05]/40'
                    }`}
                  >
                    {branch.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-black text-base leading-tight mb-3">{branch.name}</h3>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#efcf05] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-xs leading-relaxed">{branch.address}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="text-[#efcf05] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-xs leading-relaxed">{branch.hours}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${branch.msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#efcf05] text-black font-bold py-2.5 rounded-xl text-xs hover:bg-yellow-400 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-700 text-gray-400 hover:border-[#efcf05] hover:text-[#efcf05] transition-all duration-200 flex-shrink-0"
                    title="Ver no Google Maps"
                  >
                    <Navigation size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

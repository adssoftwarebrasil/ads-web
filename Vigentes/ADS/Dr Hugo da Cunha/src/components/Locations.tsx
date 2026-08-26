import { MapPin, Phone } from 'lucide-react';

interface Location {
  name: string;
  mapSrc: string;
  mapTitle: string;
  address: string;
  district: string;
  city: string;
  cep: string;
  tel: string;
  telHref: string;
  whatsapp: string;
  whatsappHref: string;
}

const locations: Location[] = [
  {
    name: 'AngioPlace',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.609744079763!2d-49.280424723863646!3d-16.696401184077665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef149a2a239fb%3A0xf42ff011b5fd99b1!2sANGIOPLACE%20-%20Excel%C3%AAncia%20Vascular%20e%20Laser%20%7C%20Setor%20Bueno%2C%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1769186534843!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa da unidade AngioPlace',
    address: 'Avenida T 2, 1299',
    district: 'Setor Bueno',
    city: 'Goiânia - GO',
    cep: 'CEP: 74215-005',
    tel: '(62) 3252-1015',
    telHref: 'tel:6232521015',
    whatsapp: 'WhatsApp: (62) 98581-5846',
    whatsappHref: 'https://wa.me/5562985815846',
  },
  {
    name: 'Centro Clínico Amparo',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3582310538554!2d-49.271702523863155!3d-16.708968284067176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1dabd555555%3A0xbee94271a6c3f177!2sHospital%20Amparo%20-%20M%C3%BAltiplas%20Especialidades%2024%20Horas%20-%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1769186477741!5m2!1spt-BR!2sbr',
    mapTitle: 'Mapa da unidade Centro Clínico Amparo',
    address: 'Avenida T 5, 271',
    district: 'Setor Bueno',
    city: 'Goiânia - GO',
    cep: 'CEP: 74230-045',
    tel: '(62) 3240-7100',
    telHref: 'tel:6232407100',
    whatsapp: 'WhatsApp: (62) 98118-5300',
    whatsappHref: 'https://wa.me/5562981185300',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-6 py-3 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-[#024074]" />
            <span className="text-[#024074] font-semibold text-sm uppercase tracking-wider">Locais de Atendimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#024074] mb-6">Onde nos Encontrar</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Unidades modernas no Setor Bueno, equipadas com o que há de mais avançado na medicina vascular.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col">
              <div className="h-80 w-full bg-slate-200 relative">
                <iframe src={loc.mapSrc} width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={loc.mapTitle} className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700" style={{ border: '0px' }}></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#024074] to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{loc.name}</h3>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-2.5 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#024074]" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-lg">{loc.address}</p>
                    <p className="text-slate-600 font-medium">{loc.district}</p>
                    <p className="text-slate-600">{loc.city}</p>
                    <p className="text-slate-400 text-sm mt-1 tracking-wide">{loc.cep}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-2.5 rounded-xl">
                    <Phone className="w-6 h-6 text-[#024074]" />
                  </div>
                  <div className="space-y-1">
                    <a href={loc.telHref} className="text-slate-700 font-semibold hover:text-[#024074] transition-colors block text-lg">{loc.tel}</a>
                    <a href={loc.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-600 font-bold hover:text-sky-700 transition-colors">{loc.whatsapp}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

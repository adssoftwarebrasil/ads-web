import { MapPin, Clock, Phone } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

interface Location {
  matriz?: boolean;
  city: string;
  address: string;
  region: string;
  hoursWeek: string;
  hoursSat: string;
  phoneDisplay: string;
  phoneTel: string;
  mapsHref: string;
  waHref: string;
}

const locations: Location[] = [
  {
    matriz: true,
    city: 'CAMAÇARI',
    address: 'Estrada da Cascalheira, 24',
    region: 'Camaçari – BA',
    hoursWeek: 'Segunda a Sexta: 7:30h às 17:30h',
    hoursSat: 'Sábado: 7:30h às 12h',
    phoneDisplay: '(71) 99669-4235',
    phoneTel: 'tel:71996694235',
    mapsHref: 'https://maps.google.com/?q=Estrada+da+Cascalheira+24+Camaçari+BA',
    waHref: 'https://wa.me/5571996694235?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.',
  },
  {
    city: 'CATU',
    address: 'Rua José Visco, 316, Pioneiro',
    region: 'Catu – BA',
    hoursWeek: 'Segunda a Sexta: 8h às 17h',
    hoursSat: 'Sábado: 8h às 12h',
    phoneDisplay: '(71) 99622-0992',
    phoneTel: 'tel:71996220992',
    mapsHref: 'https://maps.google.com/?q=Rua+José+Visco+316+Pioneiro+Catu+BA',
    waHref: 'https://wa.me/5571996220992?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.',
  },
  {
    city: 'ALAGOINHAS',
    address: 'Rua da Leste, Galpão 2, Centro',
    region: 'Alagoinhas – BA',
    hoursWeek: 'Segunda a Sexta: 8h às 17h',
    hoursSat: 'Sábado: 8h às 12h',
    phoneDisplay: '(75) 99925-4235',
    phoneTel: 'tel:75999254235',
    mapsHref: 'https://maps.google.com/?q=Rua+da+Leste+Galpão+2+Centro+Alagoinhas+BA',
    waHref: 'https://wa.me/5575999254235?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.',
  },
  {
    city: 'SANTO AMARO',
    address: 'Av. Garcia, s/n, Derba',
    region: 'Santo Amaro – BA',
    hoursWeek: 'Segunda a Sexta: 8h às 17h',
    hoursSat: 'Sábado: 8h às 12h',
    phoneDisplay: '(75) 99810-0758',
    phoneTel: 'tel:75998100758',
    mapsHref: 'https://maps.google.com/?q=Av+Garcia+Derba+Santo+Amaro+BA',
    waHref: 'https://wa.me/5575998100758?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.',
  },
];

export default function Locations() {
  return (
    <section id="filiais" className="bg-white py-24 lg:py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#F48221] tracking-[2px] mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            ONDE ESTAMOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Encontre a Filial Mais <br />Próxima de Você
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Estamos estrategicamente localizados para atender você com rapidez e eficiência em toda a região.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-[#F5F5F5] rounded-2xl p-10 border-l-[6px] border-[#F48221] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {loc.matriz && (
                <div className="inline-block bg-[#F48221] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">MATRIZ</div>
              )}
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {loc.city}
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[#1A1A1A] font-medium">{loc.address}</p>
                    <p className="text-[#666666]">{loc.region}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="lucide lucide-clock w-5 h-5 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[#1A1A1A]">{loc.hoursWeek}</p>
                    <p className="text-[#666666]">{loc.hoursSat}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="lucide lucide-phone w-5 h-5 text-[#F48221] flex-shrink-0" size={24} />
                  <a href={loc.phoneTel} className="text-[#1A1A1A] font-semibold hover:text-[#F48221] transition-colors">
                    {loc.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white text-[#F48221] border-2 border-[#F48221] px-4 py-3 rounded-lg font-semibold hover:bg-[#F48221] hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  COMO CHEGAR
                </a>
                <a
                  href={loc.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#F48221] rounded-full hover:bg-[#E67318] hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon fill="white" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden h-[400px] shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248024.22308626986!2d-38.5!3d-12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b661f8d8c01%3A0x9e8d8e8e8e8e8e8e!2sCamaçari%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

const CITIES = [
  'Rondonópolis',
  'Jaciara',
  'Juscimeira',
  'Campo Verde',
  'Primavera do Leste',
  'São José do Povo',
  'Guiratinga',
  'Itiquira',
  'Pedra Preta',
  'Alto Garças',
];

export default function CoverageArea() {
  return (
    <section className="bg-[#010101] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[#F07013] text-sm font-semibold tracking-widest uppercase">Área de Atendimento</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#FFFFFD] mb-6 leading-tight">
              Atendemos num Raio de 150 km de Rondonópolis
            </h2>
            <p className="text-[#FFFFFD]/60 text-base leading-relaxed mb-8">
              Estamos estrategicamente localizados no Distrito Industrial de Rondonópolis para atender toda a região com agilidade. Consulte a disponibilidade de atendimento na sua cidade.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CITIES.map((city) => (
                <div key={city} className="flex items-center gap-2 text-[#FFFFFD]/60 text-sm">
                  <MapPin size={13} className="text-[#F07013] flex-shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#F07013]/10 border border-[#F07013]/20 rounded-lg p-5">
              <p className="text-[#FFFFFD]/70 text-sm leading-relaxed">
                <span className="text-[#F07013] font-semibold">Endereço:</span>{' '}
                Av. Pedro Caetano Rodrigues, 1617 - Distrito Industrial Augusto Bortoli Razia, Rondonópolis - MT, 78746-702
              </p>
              <p className="text-[#FFFFFD]/70 text-sm mt-2">
                <span className="text-[#F07013] font-semibold">Horários:</span>{' '}
                Segunda a Sexta, das 07h30 às 18h00
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#FFFFFD]/10 shadow-2xl h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4061319639727!2d-54.65825292485472!3d-16.505581784238895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9f8946b7593%3A0x8f2a04d2a62530d4!2sMaster%20Truck%20Mecatr%C3%B4nica!5e0!3m2!1spt-BR!2sbr!4v1774459040634!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Master Truck Mecatrônica"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

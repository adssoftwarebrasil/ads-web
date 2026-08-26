import { MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const cities = [
  'Piracicaba',
  'Rio Claro',
  'Iracemápolis',
  "Santa Bárbara d'Oeste",
  'Americana',
  'Santa Gertrudes',
  'São Pedro',
  'Tietê',
  'Cerquilho',
  'Monte Mor',
  'Capivari',
  'Araras',
  'Sumaré',
  'Hortolândia',
];

export default function ServiceArea() {
  const [leftRef, leftIn] = useInView<HTMLDivElement>();
  const [rightRef, rightIn] = useInView<HTMLDivElement>();

  return (
    <section id="atendimento" className="py-20 lg:py-28 bg-[rgb(37,34,35)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest mb-3">
              Área de Atendimento
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
              Atendemos toda a<span className="text-[rgb(240,27,38)]"> Região</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Nossa equipe está preparada para atender residências, comércios e
              indústrias em Piracicaba e municípios vizinhos, garantindo entrega
              rápida e instalação profissional.
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, i) => (
                <span
                  key={city}
                  className={`inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full hover:border-[rgb(240,27,38)]/50 hover:bg-[rgb(240,27,38)]/10 hover:text-white transition-all duration-300 cursor-default ${
                    leftIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <MapPin
                    width={10}
                    height={10}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-[rgb(240,27,38)]"
                  />
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                Horário de Funcionamento
              </p>
              <p className="text-white font-semibold text-sm">
                Seg a Qui: 07h00 às 17h00
              </p>
              <p className="text-white font-semibold text-sm">
                Sexta: 07h00 às 16h00
              </p>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.037429522628!2d-47.64502952469389!3d-22.763992179355878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6311d490dc8c5%3A0x59643241bf5e3f72!2sFABRICA%20DE%20CONCERTINAS%20PIRACICABA!5e0!3m2!1spt-BR!2sbr!4v1776847110928!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Fábrica de Concertinas Piracicaba"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
            <div className="mt-4 flex items-start gap-2 text-white/50 text-sm">
              <MapPin
                width={16}
                height={16}
                strokeWidth={2}
                className="lucide lucide-map-pin text-[rgb(240,27,38)] flex-shrink-0 mt-0.5"
              />
              <span>
                R. Antônio Cardoso, 144 - Jardim Brasil, Piracicaba - SP, 13424-806
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

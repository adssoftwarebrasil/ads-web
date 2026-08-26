import { MapPin, Clock, ExternalLink } from 'lucide-react';

const hours = [
  { day: 'Segunda - Sexta', time: '07:00 – 11:00 | 13:00 – 17:48', closed: false },
  { day: 'Sábado', time: 'Fechado', closed: true },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Location() {
  return (
    <section className="py-24 bg-primary-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Onde estamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Venha nos Visitar</h2>
          <p className="text-white/55 mt-3 max-w-md mx-auto">
            Atendemos presencialmente e de forma remota em toda a região.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-on-scroll">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
            <div className="relative w-full" style={{ paddingBottom: '62%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4983551824307!2d-55.924237724922016!3d-13.067571387256663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0f398a9fdde17%3A0xb3c749a10c6bcca7!2sFerrariCont%20Contabilidade%20Consultiva%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1774879231805!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FerrariCont no Google Maps"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1">Endereço</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  R. Júlio de Castilho, 228-S, Sala 02
                  <br />
                  Centro, Lucas do Rio Verde - MT
                  <br />
                  CEP: 78460-017
                </p>
                <a
                  href="https://maps.google.com/?q=FerrariCont+Contabilidade+Consultiva+LTDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-3 hover:text-accent-light transition-colors"
                >
                  Ver no Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-3">Horário de Funcionamento</p>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between gap-4">
                      <span className="text-white/70 text-sm">{h.day}</span>
                      <span
                        className={`text-sm font-semibold ${h.closed ? 'text-white/35' : 'text-accent'}`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/25 rounded-2xl p-6">
              <p className="text-accent font-bold text-base mb-1">Atendemos Toda a Região</p>
              <p className="text-white/65 text-sm leading-relaxed">
                Lucas do Rio Verde, Sorriso, Tapurah, Sinop e região. Atendimento presencial e remoto
                para sua comodidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

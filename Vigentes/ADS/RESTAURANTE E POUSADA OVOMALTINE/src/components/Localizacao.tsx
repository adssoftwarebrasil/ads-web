import { MapPin, Clock, Navigation } from 'lucide-react';
import Reveal from './Reveal';

const regions = [
  'Resende',
  'Itatiaia',
  'Porto Real',
  'Barra Mansa',
  'Quatis',
  'Passa Vinte',
  'Volta Redonda',
  'Queluz',
];

const hours = [
  { days: 'Segunda a Quinta', time: '06h00 – 20h00' },
  { days: 'Sexta a Domingo', time: '06h00 – 19h00' },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="section-padding bg-brand-cream bg-pattern">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Localização
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Como Chegar Até Nós
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos no KM 296 da Rodovia Presidente Dutra, em Floriano, Barra Mansa – RJ. Perfeito
            para quem passa pela Dutra e para toda a região sul fluminense.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 md:h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.7905681467596!2d-44.30560593559859!3d-22.45432548612718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e9f46a6855009%3A0xf0bb4f4e51712bd1!2sRestaurante%20e%20Pousada%20Ovomaltine!5e0!3m2!1spt-BR!2sbr!4v1773145348582!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Restaurante e Pousada Ovomaltine"
                style={{ border: '0px', minHeight: '400px' }}
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">Endereço</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rod. Pres. Dutra, km 296
                    <br />
                    Floriano, Barra Mansa – RJ
                    <br />
                    CEP: 27365-003
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Restaurante+e+Pousada+Ovomaltine+Barra+Mansa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-orange text-sm font-medium mt-3 hover:underline"
                  >
                    <Navigation size={14} />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-brand-orange" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-brand-dark">Horários</h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-600">
                      Fechado agora
                    </span>
                  </div>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-600 text-sm">{h.days}</span>
                        <span className="font-semibold text-brand-dark text-sm">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-brand-dark mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-brand-orange" />
                Atendemos a Região
              </h4>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-brand-orange/10 text-brand-orange-dark font-medium px-3 py-1.5 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

const bairros = [
  'Novo Eldorado',
  'Eldorado',
  'Riacho',
  'Parque São João',
  'Beatriz',
  'JK',
  'Água Branca',
  'Bernardo Monteiro',
  'Santa Helena',
  'Santa Cruz',
];

export default function Coverage() {
  return (
    <section id="atendimento" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-brand-blue font-barlow font-700 uppercase tracking-widest text-sm mb-3">
            Onde Atendemos
          </p>
          <h2 className="font-condensed font-900 uppercase text-4xl md:text-5xl lg:text-6xl text-brand-blue leading-none mb-4">
            Área de Atendimento
          </h2>
          <div className="w-16 h-1 bg-brand-yellow rounded-full mx-auto mb-6" />
          <p className="text-gray-600 font-barlow text-lg max-w-xl mx-auto leading-relaxed">
            Atendemos toda Contagem – MG em um raio de <strong className="text-brand-blue">8 km</strong> ao redor da nossa loja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-brand-yellow" />
                </div>
                <h3 className="font-condensed font-800 text-brand-blue uppercase text-xl">
                  Bairros Atendidos
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {bairros.map((bairro) => (
                  <div
                    key={bairro}
                    className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" />
                    <span className="text-gray-700 font-barlow text-sm font-500">{bairro}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-500 font-barlow text-xs leading-relaxed">
                  Cidade de <strong className="text-brand-blue">Contagem – MG</strong>. Consulte disponibilidade para outros bairros.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078.0007273874203!2d-44.0522311!3d-19.933509199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69598d6cea041%3A0x451123c6f3ab9918!2sEldorado%20Baterias%20e%20Lava%20Jato%20Chapisco!5e1!3m2!1spt-BR!2sbr!4v1773323065066!5m2!1spt-BR!2sbr"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Eldorado Baterias Chapisco"
              />
            </div>
            <div className="mt-4 bg-brand-blue rounded-xl px-6 py-4 flex items-center gap-3">
              <MapPin size={18} className="text-brand-yellow shrink-0" />
              <p className="text-white font-barlow text-sm font-500">
                <strong className="text-brand-yellow">R. Tinguassu, 1050</strong> – Novo Eldorado, Contagem – MG, 32341-210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

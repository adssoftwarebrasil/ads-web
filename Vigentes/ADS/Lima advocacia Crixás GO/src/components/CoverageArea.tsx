import { MapPin } from 'lucide-react';

const CITIES = [
  { name: 'Goianésia', pop: '73.707' },
  { name: 'Porangatu', pop: '44.317' },
  { name: 'Uruaçu', pop: '42.546' },
  { name: 'Niquelândia', pop: '34.964' },
  { name: 'Minaçu', pop: '27.075' },
  { name: 'Ceres', pop: '22.046' },
  { name: 'São Miguel do Araguaia', pop: '21.900' },
  { name: 'Itapaci', pop: '21.087' },
  { name: 'Rubiataba', pop: '19.788' },
  { name: 'Crixás', pop: '17.065', highlight: true },
];

export default function CoverageArea() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/fachada-escritorio-advocacia-lima-preto-branco_960x1280.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
              Onde Atuamos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Cobertura em Todo o{' '}
              <span className="gold-text-gradient">Norte e Noroeste Goiano</span>
            </h2>
            <div className="section-divider mb-8" style={{ margin: '0 0 2rem' }} />
            <p className="font-sans text-[#BBB39D] leading-relaxed mb-6">
              Nosso escritório, sediado em Crixás/GO, atende presencialmente e de forma virtual
              clientes de toda a região. Onde você estiver, podemos ajudar.
            </p>

            <div className="flex items-start gap-3 bg-[#A1825A]/10 border border-[#A1825A]/20 rounded-sm p-4 mb-8">
              <MapPin size={18} className="text-[#A1825A] shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm text-white font-medium">Sede do Escritório</p>
                <p className="font-sans text-xs text-[#BBB39D] mt-1 leading-relaxed">
                  Rua Domingos Marques, nº 15, Sala 1, Qd. 19, Lt. 19 <br />
                  Centro — Crixás/GO — CEP: 76.510-000
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-2">
                <p className="font-sans text-xs text-[#BBB39D]">Atendimento Presencial</p>
                <p className="font-serif text-sm text-white mt-0.5">08:00 — 17:00</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-2">
                <p className="font-sans text-xs text-[#BBB39D]">WhatsApp</p>
                <p className="font-serif text-sm text-white mt-0.5">(62) 9 8144-2263</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <p className="font-sans text-xs text-[#BBB39D]/60 uppercase tracking-widest mb-4">
              Municípios Atendidos
            </p>
            <div className="space-y-2">
              {CITIES.map(({ name, pop, highlight }) => (
                <div
                  key={name}
                  className={`flex items-center justify-between px-4 py-3 rounded-sm border transition-colors duration-200 ${
                    highlight
                      ? 'bg-[#A1825A]/15 border-[#A1825A]/40'
                      : 'bg-white/[0.02] border-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        highlight ? 'bg-[#A1825A]' : 'bg-white/30'
                      }`}
                    />
                    <span
                      className={`font-sans text-sm ${
                        highlight ? 'text-[#A1825A] font-semibold' : 'text-white/80'
                      }`}
                    >
                      {name}
                      {highlight && (
                        <span className="ml-2 text-xs text-[#A1825A]/70 font-normal">Sede</span>
                      )}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-[#BBB39D]/60">{pop} hab.</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-xs text-[#BBB39D]/40 mt-4 text-right">
              * Atendimento virtual disponível para todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

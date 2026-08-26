import { TrendingUp } from 'lucide-react';

const resultados = [
  {
    n: '01',
    antes:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/antes-cliente-01.webp',
    depois:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/depois-cliente-01.webp',
  },
  {
    n: '02',
    antes:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/antes-cliente-02.webp',
    depois:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/depois-cliente-02.webp',
  },
  {
    n: '03',
    antes:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/antes-cliente-03.webp',
    depois:
      'https://storage.lucasmendes.dev/site-sp/mago%20das%20tesouras/implantes/depois-cliente-03.webp',
  },
];

const ctaHref =
  'http://wa.me/553488238723?text=Ol%C3%A1!%20Vi%20os%20resultados%20de%20implante%20capilar%20no%20site%20e%20gostaria%20de%20fazer%20uma%20avalia%C3%A7%C3%A3o.';

export default function Resultados() {
  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
            Transformações Reais
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(32,29,30)] leading-tight mb-4">
            Resultados de Implante Capilar
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Veja a diferença que nossa prótese capilar de alta qualidade faz na vida e na
            autoestima dos nossos clientes. Naturalidade e confiança restabelecidas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultados.map((r) => (
            <div
              key={r.n}
              className="bg-[rgb(247,246,247)] rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-black/10"
            >
              <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src={r.antes}
                    alt={`Resultado Implante Capilar Cliente ${r.n} - Antes`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[rgb(32,29,30)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Antes
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src={r.depois}
                    alt={`Resultado Implante Capilar Cliente ${r.n} - Depois`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Depois
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgb(254,197,52)]/15 flex items-center justify-center text-[rgb(245,133,79)]">
                  <TrendingUp
                    className="lucide lucide-trending-up"
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[rgb(32,29,30)]">
                  Resultado Cliente #{r.n}
                </h3>
              </div>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[rgb(32,29,30)] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-[rgb(245,133,79)] hover:shadow-lg hover:shadow-[rgb(245,133,79)]/20 active:scale-[0.98]"
              >
                Quero um resultado assim
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

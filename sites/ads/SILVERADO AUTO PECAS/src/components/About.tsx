import { CheckCircle2 } from 'lucide-react';

const bullets = [
  'Mais de 20 anos atuando no mercado de desmontagem',
  'Adequados a todas as normas vigentes no país',
  'Destinação correta de materiais ao meio ambiente',
  'Clientes co-participantes da economia circular',
  'Peças com total rastreabilidade de origem',
  'Atendimento para todo o Brasil',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/fiat-toro-branca-estacionada-pronta-para-reparo_2160x3840.webp"
                alt="Silverado Auto Peças — veículos para desmontagem"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-blue rounded-2xl p-5 md:p-6 shadow-2xl">
              <p className="text-4xl md:text-5xl font-black text-white">20+</p>
              <p className="text-blue-200 text-xs md:text-sm font-medium mt-1 leading-tight">
                Anos de<br />Excelência
              </p>
            </div>
            <div className="absolute -top-4 -left-4 md:-left-8 bg-brand-red rounded-2xl p-4 shadow-2xl">
              <p className="text-white font-bold text-xs uppercase tracking-widest">Desde 2004</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-10 bg-brand-red"></div>
              <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">Nossa História</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Tradição e <span className="text-brand-blue-light">Responsabilidade</span>
              <br />no Mercado
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              A Silverado Auto Peças está há <strong className="text-white">20 anos no mercado</strong>, atuando na área
              de desmontagem e comercialização de peças usadas para veículos.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Com a grande revolução acontecendo no segmento, nos empenhamos em adequar à todas as normas vigentes no
              país. Hoje, nossos clientes são co-participantes de uma <strong className="text-white">economia circular</strong>,
              onde unimos a necessidade com o cuidado ao meio ambiente — dando destinação correta ao que antes era
              despejado incorretamente na natureza e reduzindo a emissão de carbono.
            </p>
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/556634261853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

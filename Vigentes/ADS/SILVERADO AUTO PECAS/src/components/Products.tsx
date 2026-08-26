import { ArrowRight } from 'lucide-react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/caixa-de-cambio-automatica-prateada-em-bancada-madeira_2160x3840.webp',
    title: 'Câmbio Automático',
    text: 'Câmbios automáticos com procedência, testados e com garantia de origem.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/motor-prata-novo-pe-as-sobre-madeira_2160x3840.webp',
    title: 'Motores',
    text: 'Motores usados de diversas marcas e modelos com total rastreabilidade.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/motor-prata-vw-mivos-sobre-bancada_2160x3840.webp',
    title: 'Câmbio automático VW 1.0 Tsi',
    text: 'Peças específicas para veículos Volkswagen e linha Mivos.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/para-choque-dianteiro-vw-branco-em-deposito_3840x2160.webp',
    title: 'Para-choques',
    text: 'Para-choques dianteiros e traseiros de diversas marcas e modelos.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-brand-red"></div>
            <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">O que vendemos</span>
            <div className="h-px w-10 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            Principais <span className="text-brand-blue">Produtos</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Amplo estoque de peças automotivas usadas para diversas marcas e modelos. Consulte disponibilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a
              key={p.title}
              href="https://wa.me/556634261853"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base mb-1">{p.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{p.text}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between bg-white group-hover:bg-brand-blue transition-colors duration-300">
                <span className="text-sm font-semibold text-brand-blue group-hover:text-white transition-colors duration-300">
                  Consultar via WhatsApp
                </span>
                <ArrowRight className="lucide lucide-arrow-right w-4 h-4 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Não encontrou o que procura? Consulte nossa disponibilidade!</p>
          <a
            href="https://wa.me/556634261853"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Consultar Peça Específica
            <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

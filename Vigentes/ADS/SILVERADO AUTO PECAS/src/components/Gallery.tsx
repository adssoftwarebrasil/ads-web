const items = [
  {
    span: 'col-span-1 row-span-2',
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/fiat-mobi-branco-frente-deposito-ferro-velho_2160x3840.webp',
    alt: 'Fiat Mobi no depósito — Silverado Auto Peças',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/ferro-velho-carros-empilhados-estrutura-metalica_203x358.webp',
    alt: 'Pátio de veículos — Silverado Auto Peças',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/para-choque-dianteiro-vw-branco-em-deposito_3840x2160.webp',
    alt: 'Para-choque VW no depósito',
  },
  {
    span: 'col-span-1 row-span-2',
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/caixa-de-cambio-automatica-prateada-em-bancada-madeira_2160x3840.webp',
    alt: 'Câmbio automático',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/motor-prata-novo-pe-as-sobre-madeira_2160x3840.webp',
    alt: 'Motor novo sobre bancada',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-brand-red"></div>
            <span className="text-brand-red font-semibold text-sm tracking-widest uppercase">
              Conheça nosso espaço
            </span>
            <div className="h-px w-10 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            Nossa <span className="text-brand-blue">Galeria</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Transparência em cada detalhe. Conheça nosso espaço, estoque e as peças que comercializamos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {items.map((it) => (
            <div
              key={it.img + it.span}
              className={`${it.span} rounded-2xl overflow-hidden group relative shadow-lg`}
            >
              <img
                src={it.img}
                alt={it.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative shadow-lg bg-brand-blue flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-white font-black text-2xl mb-1">+Peças</p>
              <p className="text-blue-200 text-sm font-medium leading-tight">
                Consulte nosso<br />estoque completo
              </p>
              <a
                href="https://wa.me/556634261853"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-white text-brand-blue font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

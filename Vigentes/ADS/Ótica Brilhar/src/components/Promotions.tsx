type Promo = { image: string; alt: string; badge: string; badgeClass: string };

const promos: Promo[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/promocao-oculos-otica-brilhar-dia-b_1080x1440.webp',
    alt: 'Promoção Dia B',
    badge: 'Destaque',
    badgeClass: 'bg-[rgb(197,46,52)]',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/promocao-oculos-oticas-brilhar-condicoes-especiais_1080x1440.webp',
    alt: 'Condições Especiais',
    badge: 'Condições Especiais',
    badgeClass: 'bg-[rgb(13,111,69)]',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/promocao-otica-sabado-oculos-madeira_1080x1440.webp',
    alt: 'Promoção Sábado',
    badge: 'Todo Sábado',
    badgeClass: 'bg-gray-800',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/promocao-oticas-brilhar-sabado-calendario-verde_1080x1440.webp',
    alt: 'Promoção Sábado Verde',
    badge: 'Promoção',
    badgeClass: 'bg-[rgb(13,111,69)]',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/volta-as-aulas-oculos-otica-sorrindo_1080x1440.webp',
    alt: 'Volta às Aulas',
    badge: 'Volta às Aulas',
    badgeClass: 'bg-[rgb(197,46,52)]',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/calculadora-preta-oculos-arma-o-metal-valor-390_504x896.webp',
    alt: 'Armação por R$390',
    badge: 'Preço Especial',
    badgeClass: 'bg-amber-600',
  },
];

export default function Promotions() {
  return (
    <section id="promocoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Promoções</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Ofertas que <span className="text-[rgb(197,46,52)]">brilham</span> para você
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Acompanhe nossas promoções e garanta óculos de qualidade com condições especiais. Aproveite!
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {promos.map((p) => (
            <div
              key={p.image}
              className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span
                className={`absolute top-3 left-3 ${p.badgeClass} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
              >
                {p.badge}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-[rgb(197,46,52)] to-red-700 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">Quer saber das próximas promoções?</h3>
            <p className="text-red-100 mt-2">Entre em contato via WhatsApp e fique por dentro de todas as ofertas.</p>
          </div>
          <a
            href="http://wa.me/556684469577?text=Olá!%20Gostaria%20de%20receber%20informações%20sobre%20promoções%20da%20Ótica%20Brilhar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[rgb(197,46,52)] px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors text-sm whitespace-nowrap"
          >
            Me avise das promoções
          </a>
        </div>
      </div>
    </section>
  );
}

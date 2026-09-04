import { ArrowRight } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  badge?: { label: string; className: string };
}

const products: Product[] = [
  {
    name: 'Bouquet Amor e Paixão - 24 Rosas',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FBouquet%20Amor%20e%20Paixa%CC%83o%20Rosas-%2024%20Rosas.webp',
    price: 'R$ 440,00',
    oldPrice: 'R$ 480,00',
    badge: { label: 'PROMOÇÃO', className: 'bg-[rgb(254,0,0)]' },
  },
  {
    name: 'Explosão de Amor',
    image: 'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FExplosa%CC%83o%20de%20Amor.webp',
    price: 'R$ 650,00',
    badge: { label: 'PREMIUM', className: 'bg-[#d4af37]' },
  },
  {
    name: 'Cesta Box Love Café',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCesta%20Box%20Love%20Cafe%CC%81.webp',
    price: 'R$ 185,00',
  },
  {
    name: 'Coração Pelúcia Grande',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCorac%CC%A7a%CC%83o%20Pelu%CC%81cia%20Grande.webp',
    price: 'R$ 320,00',
  },
  {
    name: 'Amor de Cesta Vinho e Ferrero',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FAmor%20de%20Cesta%20Vinho%20e%20Ferreiro.webp',
    price: 'R$ 350,00',
    oldPrice: 'R$ 370,00',
    badge: { label: 'PROMOÇÃO', className: 'bg-[rgb(254,0,0)]' },
  },
  {
    name: 'Arranjo Cor do Sol',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FArranjo%20Cor%20do%20Sol.webp',
    price: 'R$ 150,00',
    oldPrice: 'R$ 200,00',
    badge: { label: 'PROMOÇÃO', className: 'bg-[rgb(254,0,0)]' },
  },
  {
    name: 'Coração Rosa',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCorac%CC%A7a%CC%83o%20Rosa.webp',
    price: 'R$ 45,00',
    oldPrice: 'R$ 50,00',
  },
  {
    name: 'Combinado Raio de Sol',
    image:
      'https://storage.lucasmendes.dev/site-sp/giovannaflores%2FCombinado%20Raio%20de%20Sol.webp',
    price: 'R$ 130,00',
    oldPrice: 'R$ 140,00',
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-white py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-[rgba(254,0,0,0.1)] text-[rgb(254,0,0)] px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
            NOSSOS DESTAQUES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
            Produtos Mais Amados
            <br className="hidden sm:block" /> Pelos Nossos Clientes
          </h2>
          <p className="text-base lg:text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Selecionamos os arranjos e presentes que fazem mais sucesso
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-14">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-400 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {p.badge && (
                  <div
                    className={`absolute top-4 right-4 ${p.badge.className} text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg`}
                  >
                    {p.badge.label}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="text-base lg:text-lg font-semibold text-[#1a1a1a] mb-3 min-h-[3rem] line-clamp-2 leading-snug">
                  {p.name}
                </h3>
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  {p.oldPrice && (
                    <span className="text-sm lg:text-base text-[#999] line-through">
                      {p.oldPrice}
                    </span>
                  )}
                  <span className="text-xl lg:text-2xl font-bold text-[rgb(254,0,0)] tracking-tight">
                    {p.price}
                  </span>
                </div>
                <a
                  href="https://giovannaflores.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full flex items-center justify-center gap-2 bg-[rgb(254,0,0)] text-white px-4 py-3 lg:py-3.5 rounded-xl font-semibold text-sm lg:text-base hover:bg-[rgb(220,0,0)] transition-all duration-300 shadow-[0_4px_12px_rgba(254,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(254,0,0,0.35)] hover:-translate-y-0.5"
                >
                  Ver Produto
                  <ArrowRight className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://giovannaflores.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(254,0,0)] text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl font-semibold text-base lg:text-lg hover:bg-[rgb(220,0,0)] transition-all duration-300 shadow-[0_8px_24px_rgba(254,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(254,0,0,0.4)] hover:scale-105"
          >
            Ver Todos os +500 Produtos no Catálogo
            <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

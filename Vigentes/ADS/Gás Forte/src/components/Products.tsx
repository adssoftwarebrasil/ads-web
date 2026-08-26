import { MessageCircle } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  badge: string;
  badgeClass: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/gas%20forte/img/anuncio-cilindros-gas-forte-supergasbras_512x510.webp',
    alt: 'Botijão 13 Kg',
    badge: 'Mais Vendido',
    badgeClass: 'bg-brand-orange text-white',
    category: 'P13 — Residencial',
    title: 'Botijão 13 Kg',
    description:
      'O botijão mais vendido do Brasil. Ideal para cozinhas residenciais, prático e seguro para o dia a dia da sua família.',
    href: 'https://wa.me/556282381515?text=Ol%C3%A1!%20Quero%20pedir%20um%20botij%C3%A3o%20de%20G%C3%A1s%2013kg.%20Poderia%20me%20informar%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/gas%20forte/img/anuncio-gas-forte-supergasbras-qualidade_512x510.webp',
    alt: 'Botijão 20 Kg',
    badge: 'Para Comércios',
    badgeClass: 'bg-brand-amber text-brand-dark',
    category: 'P20 — Comercial',
    title: 'Botijão 20 Kg',
    description:
      'Perfeito para lanchonetes, padarias e pequenos comércios. Mais autonomia com o mesmo padrão de qualidade Supergasbras.',
    href: 'https://wa.me/556282381515?text=Ol%C3%A1!%20Quero%20pedir%20um%20botij%C3%A3o%20de%20G%C3%A1s%2020kg.%20Poderia%20me%20informar%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/gas%20forte/img/anuncio-supergasbras-homem-e-botijoes-gas_509x510.webp',
    alt: 'Botijão 45 Kg',
    badge: 'Alto Consumo',
    badgeClass: 'bg-brand-red text-white',
    category: 'P45 — Industrial',
    title: 'Botijão 45 Kg',
    description:
      'Solução para restaurantes, empresas e estabelecimentos com alto consumo. Entrega especializada com segurança total.',
    href: 'https://wa.me/556282381515?text=Ol%C3%A1!%20Quero%20pedir%20um%20botij%C3%A3o%20de%20G%C3%A1s%2045kg.%20Poderia%20me%20informar%20o%20valor%20e%20o%20prazo%20de%20entrega%3F',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Nosso Catálogo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Escolha o botijão <span className="text-gradient">certo para você</span>
          </h2>
          <p className="text-brand-light/60 max-w-xl mx-auto">
            Trabalhamos exclusivamente com botijões Supergasbras — a marca mais confiável do mercado. Entregamos em
            toda Goiânia e região.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative bg-brand-navy rounded-2xl overflow-hidden border border-white/5 card-hover"
            >
              <div className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-navy h-52 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${product.badgeClass}`}>
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-1">
                  <span className="text-brand-orange/70 text-xs font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-3">{product.title}</h3>
                <p className="text-brand-light/55 text-sm leading-relaxed mb-6">{product.description}</p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orange2 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/25"
                >
                  <MessageCircle width={16} height={16} className="lucide lucide-message-circle" />
                  Pedir {product.title.replace('Botijão ', '').replace(' Kg', 'kg')}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-5 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gas%20forte/img/anuncio-galoes-agua-20-litros-laranja_508x510.webp"
              alt="Galão de água"
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <p className="text-white font-bold text-sm">Galão de Água 20L</p>
              <p className="text-brand-light/50 text-xs">Disponível para entrega junto com seu gás!</p>
            </div>
          </div>
          <a
            href="http://wa.me/556282381515?text=Ol%C3%A1!%20Quero%20pedir%20um%20gal%C3%A3o%20de%20%C3%A1gua%20de%2020%20litros.%20Qual%20o%20valor%20com%20entrega%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <MessageCircle width={14} height={14} className="lucide lucide-message-circle" />
            Pedir Galão
          </a>
        </div>
      </div>
    </section>
  );
}

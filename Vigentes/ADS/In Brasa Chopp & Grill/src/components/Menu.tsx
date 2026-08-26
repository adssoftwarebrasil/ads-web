import { useState } from 'react';
import { Flame, UtensilsCrossed, CupSoda, Beer, Cake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556696123349';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface Product {
  name: string;
  description: string;
  image: string;
  badge?: string;
  href: string;
  delay: number;
}

const categories: Category[] = [
  { id: 'espetos', label: 'Espetos', icon: Flame },
  { id: 'porcoes', label: 'Porções', icon: UtensilsCrossed },
  { id: 'drinks', label: 'Drinks', icon: CupSoda },
  { id: 'cervejas', label: 'Cervejas', icon: Beer },
  { id: 'sobremesas', label: 'Sobremesas', icon: Cake },
];

const productsByCategory: Record<string, Product[]> = {
  espetos: [
    {
      name: 'Espeto de Picanha',
      description: 'Picanha premium grelhada na brasa, temperada na medida certa',
      image:
        'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/espetinho-de-carne-grelhado-em-madeira_1440x1911.webp',
      badge: 'Mais Pedido',
      href: 'http://wa.me/556696123349?text=Olá! Quero pedir: Espeto%20de%20Picanha',
      delay: 0,
    },
    {
      name: 'Espeto de Frango c/ Bacon',
      description: 'Frango suculento envolto em bacon crocante, marinado na casa',
      image:
        'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/espetinhos-de-carne-e-gordura-em-espeto_1440x1440.webp',
      href: 'http://wa.me/556696123349?text=Olá! Quero pedir: Espeto%20de%20Frango%20c%2F%20Bacon',
      delay: 60,
    },
    {
      name: 'Espeto de Coração',
      description: 'Coração de frango grelhado, temperado com alho e limão',
      image:
        'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/espetinho-de-carne-grelhado-em-madeira_1440x1911.webp',
      href: 'http://wa.me/556696123349?text=Olá! Quero pedir: Espeto%20de%20Cora%C3%A7%C3%A3o',
      delay: 120,
    },
    {
      name: 'Espeto de Cupim',
      description: 'Cupim bovino com gordura marmoreada, defumado lentamente',
      image:
        'https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/espetinhos-de-carne-e-gordura-em-espeto_1440x1440.webp',
      badge: 'Especial',
      href: 'http://wa.me/556696123349?text=Olá! Quero pedir: Espeto%20de%20Cupim',
      delay: 180,
    },
  ],
  porcoes: [],
  drinks: [],
  cervejas: [],
  sobremesas: [],
};

export default function Menu() {
  const [active, setActive] = useState('espetos');
  const products = productsByCategory[active] ?? [];

  return (
    <section id="cardapio" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="section-subheading animate-reveal">Nosso Cardápio</p>
          <h2 className="section-heading mt-3 animate-reveal">
            Sabores que <span className="text-gradient">Conquistam</span>
          </h2>
          <div className="divider mx-auto mt-6 animate-reveal"></div>
          <p className="text-white/60 mt-4 max-w-xl mx-auto animate-reveal">
            Do espeto artesanal ao drink exclusivo — cada prato é preparado com técnica, paixão e os
            melhores ingredientes.
          </p>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center animate-reveal">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-brand text-black shadow-lg shadow-brand/30'
                    : 'bg-surface-lighter text-white/60 hover:text-white hover:bg-surface-lighter border border-white/10'
                }`}
              >
                <Icon className="lucide" width={15} height={15} />
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="animate-reveal card-dark group hover:border-brand/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${product.delay}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-brand text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white text-base mb-1.5">{product.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand font-bold text-lg"></span>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white/50 hover:text-brand transition-colors"
                  >
                    Pedir →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-reveal">
          <p className="text-white/40 text-sm mb-4">
            Cardápio completo disponível no estabelecimento
          </p>
          <a
            href="http://wa.me/556696123349?text=Olá! Gostaria de ver o cardápio completo do In Brasa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export { WHATSAPP };

import { Flame, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  image: string;
  alt: string;
  badge: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
  delay: number;
}

const products: Product[] = [
  {
    icon: Flame,
    image: 'https://storage.lucasmendes.dev/site-sp/delta%20gas/img/gas-de-cozinha.webp',
    alt: 'Gás de Cozinha',
    badge: 'Mais Vendido',
    badgeClass: 'bg-brand-light text-brand-dark',
    title: 'Gás de Cozinha',
    subtitle: 'Botijão P13 – 13kg',
    description:
      'O combustível essencial para sua cozinha. Botijão de gás 13kg com entrega rápida diretamente na sua residência ou comércio em Sinop-MT.',
    features: [
      'Botijão P13 (13kg)',
      'Para residências e comércios',
      'Entrega expressa',
      'Troca de botijão vazio',
    ],
    href: 'https://wa.me/556699814075?text=Ol%C3%A1!%20Quero%20pedir%20um%20botij%C3%A3o%20de%20g%C3%A1s%2013kg.',
    delay: 0,
  },
  {
    icon: Droplets,
    image: 'https://storage.lucasmendes.dev/site-sp/delta%20gas/img/galoes-de-agua-empilhados.webp',
    alt: 'Água Mineral',
    badge: 'Novidade',
    badgeClass: 'bg-brand-secondary text-white',
    title: 'Água Mineral',
    subtitle: 'Galão de 20 Litros',
    description:
      'Água mineral pura e de qualidade para sua família ou empresa. Galões de 20 litros com entrega ágil no mesmo dia para toda Sinop-MT.',
    features: [
      'Galão de 20 litros',
      'Água mineral natural',
      'Para casa e escritório',
      'Entrega no mesmo dia',
    ],
    href: 'https://wa.me/556699814075?text=Ol%C3%A1!%20Quero%20pedir%20gal%C3%A3o%20de%20%C3%A1gua%20mineral%20de%2020%20litros.',
    delay: 150,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-brand-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14 section-observe">
          <p className="section-subtitle">Nossos Produtos</p>
          <h2 className="section-title mb-4">
            Tudo que sua casa precisa,
            <br />
            <span className="text-brand-secondary">entregue na sua porta</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Trabalhamos com os produtos essenciais do seu dia a dia. Qualidade garantida, preços
            justos e entrega rápida em toda Sinop-MT.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="section-observe bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 group"
                style={{ transitionDelay: `${product.delay}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                  <span
                    className={`absolute top-4 left-4 ${product.badgeClass} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                  >
                    {product.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-brand-light/20 backdrop-blur-sm border border-brand-light/40 text-brand-light p-2.5 rounded-xl">
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">{product.title}</p>
                      <p className="text-white/70 text-sm">{product.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>
                  <ul className="space-y-2.5 mb-7">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-brand-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-dark text-white font-semibold py-3.5 rounded-2xl hover:bg-brand-secondary transition-all duration-300 group/btn"
                  >
                    Pedir Agora
                    <ArrowRight
                      size={17}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 bg-gradient-to-r from-brand-dark to-brand-mid rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 section-observe">
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
              Atendemos comércios e residências
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Precisa de abastecimento frequente? Entre em contato e solicite um plano especial.
            </p>
          </div>
          <a
            href="https://wa.me/556699814075?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20planos%20para%20com%C3%A9rcio."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-brand-light text-brand-dark font-bold px-7 py-3.5 rounded-full hover:bg-white transition-all duration-300 whitespace-nowrap"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

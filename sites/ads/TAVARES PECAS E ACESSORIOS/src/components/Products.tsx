import { MessageCircle, ArrowRight } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  href: string;
}

const products: Product[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/filtros-de-oleo.webp',
    alt: 'Filtros de Óleo',
    badge: 'Alta Demanda',
    badgeClass: 'bg-brand-red',
    title: 'Filtros de Óleo',
    description:
      'Filtros de alta eficiência para todas as marcas e modelos. Mantenha o motor protegido com peças de primeira linha.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Filtros%20de%20%C3%93leo.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/kit-de-suspensao.webp',
    alt: 'Kit de Suspensão',
    badge: 'Completo',
    badgeClass: 'bg-brand-navy',
    title: 'Kit de Suspensão',
    description:
      'Kits completos de suspensão com amortecedores, buchas e coxins. Segurança e conforto para o seu veículo.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Kit%20de%20Suspens%C3%A3o.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/kit-troca-de-oleo.webp',
    alt: 'Kit Troca de Óleo',
    badge: 'Kit Completo',
    badgeClass: 'bg-green-600',
    title: 'Kit Troca de Óleo',
    description:
      'Kit completo para troca de óleo com filtro, aditivos e itens essenciais para a manutenção preventiva do seu carro.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Kit%20Troca%20de%20%C3%93leo.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/oleo-15w-40.webp',
    alt: 'Óleo Lubrificante 15W40',
    badge: 'Mais Vendido',
    badgeClass: 'bg-amber-600',
    title: 'Óleo Lubrificante 15W40',
    description:
      'Óleo lubrificante de alta performance para motores a gasolina, álcool e flex. Proteção superior em qualquer condição.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20%C3%93leo%20Lubrificante%2015W40.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/patilhas-de-freios.webp',
    alt: 'Pastilhas de Freio',
    badge: 'Segurança',
    badgeClass: 'bg-brand-red',
    title: 'Pastilhas de Freio',
    description:
      'Pastilhas e discos de freio de alta performance para máxima segurança e durabilidade. Para todas as marcas.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Pastilhas%20de%20Freio.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/troca-de-oleo.webp',
    alt: 'Troca de Óleo',
    badge: 'Serviço',
    badgeClass: 'bg-brand-navy',
    title: 'Troca de Óleo',
    description:
      'Serviço especializado de troca de óleo com consultoria técnica. Cuide do motor do seu veículo com quem entende.',
    href: 'http://wa.me/551633236646?text=Ol%C3%A1!%20Tenho%20interesse%20em%3A%20Troca%20de%20%C3%93leo.%20Poderia%20me%20informar%20disponibilidade%20e%20pre%C3%A7o%3F',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Nossos Produtos</p>
          <h2 className="section-title">
            Tudo que o seu veículo precisa, <span className="text-brand-red">em um só lugar</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Do filtro à suspensão, trabalhamos com peças de primeira linha para carros, caminhonetes e utilitários de
            todas as marcas e modelos.
          </p>
          <div className="section-divider mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="product-card group transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span
                  className={`absolute top-3 left-3 ${p.badgeClass} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-black text-lg mb-2">{p.title}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed mb-4">{p.description}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors group/btn"
                >
                  <MessageCircle size={16} />
                  Consultar no WhatsApp
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-brand-gray-text mb-6 text-base">Não encontrou o que procura? Temos muito mais em estoque!</p>
          <a
            href="http://wa.me/551633236646?text=Ol%C3%A1!%20Preciso%20de%20uma%20pe%C3%A7a%20e%20gostaria%20de%20verificar%20disponibilidade."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            Consultar Estoque Completo
          </a>
        </div>
      </div>
    </section>
  );
}

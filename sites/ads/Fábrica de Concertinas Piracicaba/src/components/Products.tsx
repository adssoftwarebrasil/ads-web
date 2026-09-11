import { ArrowRight } from 'lucide-react';

interface Product {
  badge: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  delay: string;
}

const products: Product[] = [
  {
    badge: 'Mais Vendido',
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/galeria/rolo-arame-farpado-prateado-vista-interna_4284x5712.webp',
    alt: 'Concertina',
    title: 'Concertina',
    description:
      'A solução mais eficaz em segurança perimetral. Nossas concertinas são fabricadas com aço galvanizado de alta resistência, com lâminas cortantes que dissuadem qualquer invasor. Disponíveis em diferentes diâmetros para muros, cercas e instalações industriais.',
    href: 'https://wa.me/5519981442455?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Concertina.',
    delay: '0ms',
  },
  {
    badge: 'Estrutural',
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/hastes-metalicas.webp',
    alt: 'Hastes Metálicas',
    title: 'Hastes Metálicas',
    description:
      'Hastes de fixação desenvolvidas para garantir a instalação segura e estável das concertinas em qualquer tipo de muro ou estrutura. Fabricadas com aço tratado, resistentes à corrosão e às intempéries.',
    href: 'https://wa.me/5519981442455?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Hastes%20Met%C3%A1licas.',
    delay: '150ms',
  },
  {
    badge: 'Acessório',
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/galeria/pregos-grampo-metalicos-saco-plastico-cinza_3024x4032.webp',
    alt: 'Grampos e Fixadores',
    title: 'Grampos e Fixadores',
    description:
      'Grampos e fixadores metálicos de alta qualidade para instalação perfeita das concertinas. Asseguram firmeza e durabilidade na fixação, evitando folgas que comprometam a segurança do perímetro.',
    href: 'https://wa.me/5519981442455?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Grampos%20e%20Fixadores.',
    delay: '300ms',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-[rgb(37,34,35)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest mb-3">
            Nossos Produtos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Soluções Completas em <br />
            <span className="text-[rgb(240,27,38)]">Segurança Perimetral</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Do produto ao serviço, temos tudo que você precisa para proteger seu
            patrimônio com eficiência e durabilidade.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[rgb(240,27,38)]/50 hover:bg-white/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgb(240,27,38)]/10 opacity-100 translate-y-0"
              style={{ transitionDelay: p.delay }}
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[rgb(240,27,38)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {p.badge}
                </span>
              </div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(37,34,35)] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(240,27,38)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[rgb(240,27,38)] text-sm font-bold hover:gap-3 transition-all duration-200"
                >
                  Solicitar Orçamento{' '}
                  <ArrowRight
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-arrow-right "
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="https://wa.me/5519981442455?text=Ol%C3%A1!%20Quero%20conhecer%20todos%20os%20seus%20produtos%20e%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(240,27,38)] text-white font-bold px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20"
          >
            Ver Todos os Produtos
            <ArrowRight
              width={18}
              height={18}
              strokeWidth={2}
              className="lucide lucide-arrow-right "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

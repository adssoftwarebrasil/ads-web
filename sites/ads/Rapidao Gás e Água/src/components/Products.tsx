import { ArrowRight } from 'lucide-react';
import { CheckIcon } from './icons';

interface Product {
  badge: string;
  badgeColor: string;
  img: string;
  title: string;
  desc: string;
  features: string[];
  href: string;
}

const products: Product[] = [
  {
    badge: 'Econômico',
    badgeColor: 'rgb(241, 93, 34)',
    img: 'https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/dois-botijoes-de-gas-azul-empilhados_3024x4032.webp',
    title: 'Gás P5 / P8',
    desc: 'Botijões mais leves e compactos. Perfeitos para quem cozinha menos, mora sozinho ou para uso como reserva.',
    features: ['Uso residencial', 'Tamanho compacto', 'Entrega expressa'],
    href: 'http://wa.me/556696687004?text=Ol%C3%A1!%20Quero%20pedir%20o%20G%C3%A1s%20P5%20ou%20P8.',
  },
  {
    badge: 'Comercial',
    badgeColor: 'rgb(24, 82, 151)',
    img: 'https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/cilindros-de-gas-azuis-e-prateados-empilhados_4032x3024.webp',
    title: 'Gás P20',
    desc: 'Botijão intermediário, perfeito para estabelecimentos comerciais de médio porte e uso intenso.',
    features: ['Uso comercial', 'Maior duração', 'Entrega rápida'],
    href: 'http://wa.me/556696687004?text=Ol%C3%A1!%20Quero%20pedir%20o%20G%C3%A1s%20P20.',
  },
  {
    badge: 'Mais Vendido',
    badgeColor: 'rgb(243, 159, 29)',
    img: 'https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/pilha-cilindros-de-gas-cinza-e-azul_4032x3024.webp',
    title: 'Gás P13',
    desc: 'O botijão residencial padrão de 13kg. Ideal para a cozinha da sua família, com o melhor custo-benefício.',
    features: ['O favorito das casas', 'Uso residencial', 'Segurança total'],
    href: 'http://wa.me/556696687004?text=Ol%C3%A1!%20Quero%20pedir%20o%20G%C3%A1s%20P13.',
  },
  {
    badge: 'Hidratação',
    badgeColor: 'rgb(24, 82, 151)',
    img: 'https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/muitos-galao-agua-azul-empilhados-palete_4032x3024.webp',
    title: 'Água Mineral',
    desc: 'Galões de 20L de água mineral pura, para sua família ou empresa. Entregamos fresquinha na sua porta.',
    features: ['Galão 20L', 'Água mineral pura', 'Entrega no dia'],
    href: 'http://wa.me/556696687004?text=Ol%C3%A1!%20Quero%20pedir%20gal%C3%A3o%20de%20%C3%A1gua.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)', color: 'rgb(241, 93, 34)' }}
          >
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Tudo que você precisa,
            <br />
            <span style={{ color: 'rgb(241, 93, 34)' }}>entregue rapidinho</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Trabalhamos com gás GLP nos principais tamanhos e galões de água mineral — com preço
            justo e entrega ágil.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: p.badgeColor }}
                >
                  {p.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-black text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="flex flex-col gap-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(241, 93, 34, 0.12)', color: 'rgb(241, 93, 34)' }}
                      >
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:gap-3"
                  style={{ backgroundColor: 'rgb(241, 93, 34)' }}
                >
                  Pedir agora
                  <ArrowRight size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

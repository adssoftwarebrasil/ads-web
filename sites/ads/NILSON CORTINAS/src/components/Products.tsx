import { Blinds, Flame, Settings, Palette, Sofa, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  Icon: LucideIcon;
  name: string;
  title: string;
  text: string;
  img: string;
}

const products: Product[] = [
  {
    Icon: Blinds,
    name: 'blinds',
    title: 'Cortinas Sob Medida',
    text: 'Fabricação própria com modelos variados: Wave, Prega Macho, Varão/Trilho Suisso, Curvada, Inclinada, Blackout e muito mais.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F5.jpg',
  },
  {
    Icon: Flame,
    name: 'flame',
    title: 'Persianas',
    text: 'Rolô, Romana, Alumínio, Vertical, Madeira, Painel, Double Vision, Tela Solar e diversas outras opções.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F3.jpeg',
  },
  {
    Icon: Settings,
    name: 'settings',
    title: 'Toldos',
    text: 'Para área externa, manuais e motorizados, verticais, braço fixo e articulado. Proteção e estilo para seu espaço.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FToldos%2F3.jpeg',
  },
  {
    Icon: Palette,
    name: 'palette',
    title: 'Papéis de Parede',
    text: 'Nacionais e importados com diversas estampas e texturas para transformar completamente seus ambientes.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPapeis%20de%20Parede%20%2F3.jpg',
  },
  {
    Icon: Sofa,
    name: 'sofa',
    title: 'Estofados',
    text: 'Sofás, poltronas, puffs e cabeceiras para complementar a decoração com conforto e elegância.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F7.jpg',
  },
  {
    Icon: Sparkles,
    name: 'sparkles',
    title: 'Automação',
    text: 'Acionamento motorizado com controle remoto, touch e sensores de vento para cortinas, persianas e toldos.',
    img: 'https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2FPersianas%20%2F7.jpeg',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(114,115,119)] mb-4">
            Nossos Produtos e Serviços
          </h2>
          <div className="w-24 h-1 bg-[rgb(207,173,109)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em decoração com qualidade premium e atendimento personalizado
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p.Icon
                    className={`lucide lucide-${p.name} text-white`}
                    width={40}
                    height={40}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[rgb(114,115,119)] mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{p.text}</p>
                <a
                  href="#contato"
                  className="inline-flex items-center text-[rgb(207,173,109)] font-semibold hover:text-[rgb(187,153,89)] transition-colors"
                >
                  Saiba Mais
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[rgb(207,173,109)] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Serviços Pós-Venda</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Manutenção e reforma, lavagem de cortinas e persianas. Cuidamos dos seus produtos mesmo após a instalação.
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-[rgb(207,173,109)] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
  );
}

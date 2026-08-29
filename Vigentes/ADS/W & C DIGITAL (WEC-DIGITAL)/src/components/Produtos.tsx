import { MessageCircle, ExternalLink, ShoppingBag } from 'lucide-react';

const CATALOG = 'https://wa.me/c/558491775185';
const BASE = 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2F';

interface Produto {
  name: string;
  img: string;
  delay: number;
}

const produtos: Produto[] = [
  { name: 'Móveis e bicicletas', img: `${BASE}cadeiras-bicicletas-berco.webp`, delay: 0 },
  { name: 'Cadeiras e móveis', img: `${BASE}cadeiras-bicicletas-moveis.webp`, delay: 50 },
  {
    name: 'Colchões e ventiladores',
    img: `${BASE}colchao-ventiladores-eletrodomesticos-loja.webp`,
    delay: 100,
  },
  { name: 'Eletrodomésticos', img: `${BASE}eletrodomesticos-loja-prateleira.webp`, delay: 150 },
  { name: 'Estante e móveis', img: `${BASE}estante-sala-moderna.webp`, delay: 200 },
  { name: 'Fornos e colchões', img: `${BASE}fornos-colchoes.webp`, delay: 250 },
  { name: 'Geladeiras', img: `${BASE}geladeiras-loja-eletrodomesticos.webp`, delay: 300 },
  { name: 'Loja eletrodomésticos', img: `${BASE}loja-eletrodomesticos-colchao.webp`, delay: 350 },
  {
    name: 'Loja eletrônicos prateleiras',
    img: `${BASE}loja-eletronicos-prateleiras.webp`,
    delay: 400,
  },
  { name: 'Móveis sala de jantar', img: `${BASE}moveis-sala-jantar.webp`, delay: 450 },
  { name: 'Televisores em promoção', img: `${BASE}televisores-expostos-promocao.webp`, delay: 500 },
  {
    name: 'Ventiladores e eletroportáteis',
    img: `${BASE}ventilador-eletroportateis-prateleira.webp`,
    delay: 550,
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(237,27,38)] font-bold tracking-widest uppercase text-sm">
            Nosso Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Produtos em Destaque
          </h2>
          <div className="w-20 h-1 bg-[rgb(237,27,38)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          {produtos.map((produto) => (
            <div
              key={produto.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${produto.delay}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={produto.img}
                  alt={produto.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                  <a
                    href={CATALOG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[rgb(237,27,38)] hover:text-white"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 line-clamp-2 min-h-[40px]">
                  {produto.name}
                </h3>
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold">Preço</span>
                    <span className="text-[rgb(237,27,38)] font-bold text-xs md:text-sm italic">
                      Sob Consulta
                    </span>
                  </div>
                  <a
                    href={CATALOG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[rgb(237,27,38)] font-bold text-xs hover:underline"
                  >
                    Ver <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href={CATALOG}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(237,27,38)] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-red-200"
          >
            <ShoppingBag size={20} />
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

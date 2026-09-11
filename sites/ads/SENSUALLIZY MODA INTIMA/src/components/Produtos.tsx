import { ShoppingBag } from 'lucide-react';

const WHATSAPP = 'http://wa.me/556696681932';
const BASE = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fprodutos%2F';

interface Produto {
  img: string;
  title: string;
}

const produtos: Produto[] = [
  { img: `${BASE}mulher-lingerie-preta-com-rosa-na-mao.webp`, title: 'Lingerie Premium' },
  { img: `${BASE}mulher-lingerie-azul.webp`, title: 'Conjuntos Elegantes' },
  { img: `${BASE}mulher-camisola-vermelha.webp`, title: 'Camisolas' },
  { img: `${BASE}mulher-sentada-sorrindo-camisola-rosa.webp`, title: 'Conforto & Estilo' },
  { img: `${BASE}lingerie-preta-flores.webp`, title: 'Peças Especiais' },
  { img: `${BASE}pijamas-estampados-casal.webp`, title: 'Pijamas para Casal' },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Nossos Produtos</span>
            <div className="h-1 w-16 bg-[#E24244] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] mt-6 mb-6 leading-tight">
            Coleção Exclusiva de<span className="block text-[#E24244]">Lingeries e Moda Íntima</span>
          </h2>
          <p className="text-[#212423]/70 text-lg leading-relaxed">
            Descubra peças que valorizam seu corpo e elevam sua autoestima. Marcas renomadas como<strong> Liz, Nayane e Plié</strong>, com qualidade incomparável e design sofisticado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {produtos.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#212423]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
                  <ShoppingBag className="lucide lucide-shopping-bag w-4 h-4" />
                  <span>Consultar Disponibilidade</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[#E24244] to-[#d13d3f] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Atendimento Personalizado Online e Presencial</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Nossa equipe está pronta para ajudar você a encontrar a peça perfeita. Entre em contato pelo WhatsApp ou visite nossa loja física.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#E24244] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105">
            <ShoppingBag className="lucide lucide-shopping-bag w-5 h-5" />
            <span>Fale com Especialistas</span>
          </a>
        </div>
      </div>
    </section>
  );
}

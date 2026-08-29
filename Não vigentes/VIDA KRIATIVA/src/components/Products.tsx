import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Product {
  name: string;
  category: string;
  image: string;
}

const categories = [
  'Todos os Produtos',
  'Velas de Areia',
  'Produtos Acrilex',
  'Insumos',
  'Peças MDF',
  'Pincéis',
  'Vidros',
];

const products: Product[] = [
  { name: 'Vela de Areia Bege 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_04bege%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Rosinha 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_05rosinha%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Rosa 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_06rosa%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Vermelha 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_07vermelho%20500g%2010pavio.webp' },
  { name: 'Vela de Areia Preta 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_08preto%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Verde 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_09verde%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Cinza 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_10cinsa%20500g%2010%20pavio.webp' },
  { name: 'Vela de Areia Branca 500g', category: 'velas', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2FVela%20de%20areia%2Fvda_3branca%20500g%2010%20pavio.webp' },
  { name: 'Aguarras Mineral 100ml', category: 'acrilex', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2Facrilex%2FACRILEX-Mockup-Aguarras-Mineral-100ml.webp' },
  { name: 'Acrylic Gel Medium 59ml', category: 'acrilex', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2Facrilex%2FACRYLIC_GEL_MEDIUM_59ML_13759.webp' },
  { name: 'Betume da Judeia 100ml', category: 'acrilex', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2Facrilex%2FBETUME_DA_JUDEIA_100ML_15810.webp' },
  { name: 'Betume da Judeia 500ml', category: 'acrilex', image: 'https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fprodutos%2Facrilex%2FBETUME_DA_JUDEIA_500ML_15850.webp' },
];

const pages = Array.from({ length: 14 }, (_, i) => i + 1);

export default function Products() {
  return (
    <section id="produtos" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-[#EAF2F8] opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a]">Nossos <span className="text-[#E63428]">Produtos</span></h2>
          <p className="text-lg text-gray-600 font-medium">Descubra nossa seleção completa de materiais de alta qualidade para artesanato</p>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
        </div>
        <div className="mb-12">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between mb-8 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-2 justify-center xl:justify-start w-full">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={
                    i === 0
                      ? 'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-[#E63428] to-[#EB097C] text-white shadow-md'
                      : 'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full xl:w-96 shrink-0">
              <Search className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Buscar produtos..." className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#009CA6] focus:border-transparent transition-all" defaultValue="" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-8 px-2">
            <Filter className="lucide lucide-filter w-5 h-5 text-[#009CA6]" />
            <p className="text-gray-600 font-medium">Exibindo <strong className="text-[#1a2e5a]">168</strong> produtos (Página 1 de 14)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden bg-gray-50 aspect-square p-6 flex items-center justify-center">
                <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-[#1a2e5a] shadow-sm uppercase tracking-wider">{product.category}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-4 text-[#1a2e5a] line-clamp-2 min-h-[3.5rem] leading-snug">{product.name}</h3>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button className="w-full bg-[#EAF2F8] hover:bg-[#25D366] text-[#009CA6] hover:text-white border border-[#009CA6]/20 hover:border-transparent py-3.5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <WhatsAppIcon className="w-5 h-5 fill-current transition-transform group-hover/btn:scale-110" />
                    Consultar Preço
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
          <button disabled className="p-3 rounded-full border transition-all border-gray-200 text-gray-300 cursor-not-allowed">
            <ChevronLeft className="lucide lucide-chevron-left w-5 h-5" />
          </button>
          <div className="flex gap-2 flex-wrap justify-center bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {pages.map((p) => (
              <button
                key={p}
                className={
                  p === 1
                    ? 'w-10 h-10 rounded-full font-bold text-sm transition-all bg-[#009CA6] text-white shadow-md'
                    : 'w-10 h-10 rounded-full font-bold text-sm transition-all text-gray-500 hover:bg-gray-100'
                }
              >
                {p}
              </button>
            ))}
          </div>
          <button className="p-3 rounded-full border transition-all border-gray-300 text-gray-600 hover:bg-white hover:shadow-md hover:text-[#E63428]">
            <ChevronRight className="lucide lucide-chevron-right w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

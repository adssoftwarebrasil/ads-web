import { Instagram, ArrowUpRight } from 'lucide-react';

export default function Metahome() {
  const products = [
    {
      name: 'Jogos Americanos',
      tag: 'Proteção & Estilo',
      description: 'Acabamento impecável para moldar sua mesa com elegância.',
      image: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fmesa-posta-elegante.webp'
    },
    {
      name: 'Porta Guardanapos',
      tag: 'O Toque Final',
      description: 'Joias para sua mesa que encantam em cada detalhe.',
      image: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fprato-guardanapo-dourado.webp'
    },
    {
      name: 'Guardanapos',
      tag: 'Puro Algodão',
      description: 'Texturas suaves e cores que transformam o ambiente.',
      image: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fmesa-posta-elegante4.webp'
    }
  ];

  const gallery = [
    'https://storage.lucasmendes.dev/site-sp/metabordados%2Fmesa-arrumada-elegante3.webp',
    'https://storage.lucasmendes.dev/site-sp/metabordados%2Fmesa-jantar-arrumada.webp',
    'https://storage.lucasmendes.dev/site-sp/metabordados%2Fmesa-posta-borboleta5.webp'
  ];

  return (
    <section id="metahome" className="py-12 md:py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#F7D061]"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">Também Oferecemos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight">
              Metahome
            </h2>
            <p className="mt-3 text-neutral-500 text-base">
              Produtos para casa com a mesma qualidade dos nossos bordados industriais.
            </p>
          </div>
          
          <a 
            href="https://instagram.com/metahome.oficial" 
            target="_blank"
            className="inline-flex items-center gap-3 group bg-white border border-neutral-200 px-6 py-4 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-500 shadow-sm"
          >
            <Instagram size={20} className="text-[#F7D061]" />
            <span className="font-medium text-sm">@metahome.oficial</span>
            <ArrowUpRight size={18} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Grid de Produtos - Estilo Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 shadow-sm bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold shadow-sm">
                    {product.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2 text-neutral-900 group-hover:text-[#F7D061] transition-colors">
                {product.name}
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        
     
    

      </div>
    </section>
  );
}
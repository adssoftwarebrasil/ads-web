import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  image: string;
  title: string;
  desc: string;
  dots: number;
}

const products: Product[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDAS%20PIRAMIDAES%20SOBRE%20MEDIDA%2FWhatsApp%20Image%202025-11-06%20at%2011.02.34%20%281%29.jpeg',
    title: 'Tendas Piramidais Sob Medida',
    desc: 'Tendas piramidais personalizadas nas medidas que você precisa. Estrutura resistente e durável.',
    dots: 7,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDAS%20PIRAMIDAIS%20COM%20FECHAMENTO%2FWhatsApp%20Image%202025-11-06%20at%2011.20.01.jpeg',
    title: 'Tendas Piramidais com Fechamento',
    desc: 'Proteção total com fechamentos laterais. Ideal para eventos e maior conforto.',
    dots: 0,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDA%20CRISTAL%2FWhatsApp%20Image%202025-11-06%20at%2010.45.44.jpeg',
    title: 'Tenda Cristal',
    desc: 'Elegância e transparência. Perfeita para eventos sofisticados com visual clean.',
    dots: 3,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDAS%20PERSONALIZADAS%2FWhatsApp%20Image%202025-11-06%20at%2010.58.36%20%281%29.jpeg',
    title: 'Tendas Personalizadas',
    desc: 'Sua marca em destaque! Tendas totalmente personalizadas com sua identidade visual.',
    dots: 2,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FMODELOS%20DE%20TENDAS%2FTENDAS%20PARA%20OBRAS%2FWhatsApp%20Image%202025-11-06%20at%2010.59.57.jpeg',
    title: 'Tendas para Obras',
    desc: 'Proteção profissional para canteiros de obras. Resistência e segurança garantidas.',
    dots: 2,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-3">Nossos Modelos de Tendas</h2>
          <div className="w-16 h-1 bg-[rgb(211,14,9)] mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Soluções completas em tendas para todos os tipos de eventos e necessidades
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.dots > 0 && (
                  <>
                    <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full transition-all shadow-md opacity-0 group-hover:opacity-100">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full transition-all shadow-md opacity-0 group-hover:opacity-100">
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                      {Array.from({ length: product.dots }).map((_, i) => (
                        <div
                          key={i}
                          className={
                            i === 0
                              ? 'h-1.5 w-1.5 rounded-full transition-all bg-[rgb(211,14,9)] w-4'
                              : 'h-1.5 w-1.5 rounded-full transition-all bg-white/70'
                          }
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {product.desc}
                </p>
                <button className="w-full bg-[rgb(211,14,9)] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[rgb(180,12,7)] transition-colors duration-300">
                  FAÇA SEU ORÇAMENTO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

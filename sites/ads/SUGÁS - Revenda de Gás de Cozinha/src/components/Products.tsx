import { ShoppingCart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const products = [
  {
    name: 'Botijão de Gás P13',
    description: 'O clássico botijão azul de 13kg. Ideal para cozinhas residenciais e comerciais. Com qualidade e peso certificados.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/cilindro-de-gas-azul-p13-ultragaz-isolado_800x800.webp',
    tag: 'Mais Vendido',
    tagColor: 'bg-brand-red text-white',
  },
  {
    name: 'Botijão de Gás P5',
    description: 'Botijão compacto de 5kg, perfeito para cozinhas pequenas, trailers e viagens. Prático e econômico.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/botijao-azul-ultragaz-p5-qualidade-tem-cor_1280x1280.webp',
    tag: 'Econômico',
    tagColor: 'bg-brand-yellow text-brand-blue',
  },
  {
    name: 'Garrafão de Água 20L',
    description: 'Água mineral em garrafão de 20 litros. Entrega rápida para a sua casa, escritório ou comércio.',
    image: '/produtos/garrafao-20l.png',
    tag: 'Entrega Rápida',
    tagColor: 'bg-brand-blue text-white',
  },
  {
    name: 'Regulador de Gás',
    description: 'Regulador com mangueira e abraçadeiras, dentro das normas de segurança. Troque o seu e use o gás com tranquilidade.',
    image: '/produtos/regulador-de-gas.png',
    tag: 'Segurança',
    tagColor: 'bg-brand-red text-white',
  },
  {
    name: "Bomba d'Água Elétrica",
    description: 'Bomba elétrica para garrafão de 20L. Serve a água com um toque, sem esforço e sem desperdício.',
    image: '/produtos/bomba-dagua.png',
    tag: 'Praticidade',
    tagColor: 'bg-brand-yellow text-brand-blue',
  },
  {
    name: 'Carvão para Churrasco',
    description: 'Carvão vegetal de qualidade superior, disponível em vários tamanhos de embalagem. Acende rápido, dura mais e garante brasas uniformes.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/saco-carvao-vegetal-para-churrasco-granulado_954x1206.webp',
    tag: 'Churrasco',
    tagColor: 'bg-brand-blue text-white',
  },
  {
    name: 'Churrasqueira de Tambor',
    description: 'Churrasqueira em tambor com estrutura metálica robusta e grande capacidade para reuniões. Disponível em vários tamanhos.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/churrasqueira-tambor-azul-dourado-estrutura-metalica_1280x1239.webp',
    tag: 'Destaque',
    tagColor: 'bg-brand-yellow text-brand-blue',
  },
  {
    name: 'Churrasqueira Portátil',
    description: 'Churrasqueira metálica portátil, compacta e resistente. Leve para qualquer lugar e grelhe com praticidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/churrasqueira-prata-metalica-portatil-sobre-branco_1125x1280.webp',
    tag: 'Portátil',
    tagColor: 'bg-brand-blue text-white',
  },
  {
    name: 'Churrasqueira com Espetos',
    description: 'Churrasqueira completa com espetos de madeira, estrutura sólida e acabamento resistente. Disponível em vários tamanhos.',
    image: 'https://storage.lucasmendes.dev/site-sp/sugas/produtos/churrasqueira-preta-com-espetos-em-madeira_1060x1280.webp',
    tag: 'Completa',
    tagColor: 'bg-brand-blue text-white',
  },
];

export default function Products() {
  const { ref, inView } = useInView();

  const handleOrder = (productName: string) => {
    const msg = encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}. Poderia me passar mais informações?`);
    window.open(`https://wa.me/556696502020?text=${msg}`, '_blank');
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-brand-red/10 text-brand-red text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight">
            Produtos de <span className="text-brand-red">Qualidade</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Gás de cozinha, água mineral, reguladores e tudo para o seu churrasco: carvão e churrasqueiras em vários tamanhos. Confira nosso catálogo completo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-brand-gray/60 overflow-hidden transition-all duration-500 flex flex-col ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden bg-gray-50 h-52 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${product.tagColor}`}>
                  {product.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-brand-blue text-base mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.description}</p>
                <button
                  onClick={() => handleOrder(product.name)}
                  className="mt-4 flex items-center justify-center gap-2 w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
                >
                  <ShoppingCart size={15} />
                  Pedir agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

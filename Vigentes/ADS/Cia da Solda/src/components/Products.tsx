import { MessageCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WA_LINK = 'http://wa.me/553184631447';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/kit-solda-completo-ma-arico-mangueira-dentro-maleta_1280x853.webp',
    name: 'Kits de Solda Completos',
    desc: 'Kits profissionais com maçarico, mangueiras e acessórios em maleta resistente. Ideal para quem busca praticidade e qualidade.',
    badge: 'Mais Vendido',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/solda-fio-soft-carretel-e-bobinas-metalicas_1280x853.webp',
    name: 'Arames e Fios de Solda',
    desc: 'Arames MIG/MAG, fios tubulares e eletrodos em carretéis e bobinas metálicas. Preço diferenciado no mercado.',
    badge: 'Preço Especial',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/epis-seguranca-trabalho-cia-da-solda_1280x853.webp',
    name: 'EPIs para Soldagem',
    desc: 'Equipamentos de proteção individual certificados: máscaras, luvas, aventais e óculos para trabalho seguro.',
    badge: 'Segurança',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/pecas-tocha-mig-mag-cia-da-solda_1280x853.webp',
    name: 'Peças para Tocha MIG/MAG',
    desc: 'Difusores, bicos de contato, isoladores e demais componentes para manutenção de tochas MIG e MAG.',
    badge: 'Reposição',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/bocais-tocha-soldagem-mig-cia-da-solda_1280x853.webp',
    name: 'Bocais para Tocha MIG',
    desc: 'Bocais de alta durabilidade para tochas de soldagem MIG. Compatíveis com as principais marcas do mercado.',
    badge: 'Consumível',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/bocais-conicos-tse24-cia-da-solda_1280x853.webp',
    name: 'Bocais Cônicos TSE24',
    desc: 'Bocais cônicos de precisão para tochas TSE24. Alta resistência ao calor e durabilidade prolongada.',
    badge: 'Técnico',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/pincas-solda-bronze-cia-da-solda_1280x853.webp',
    name: 'Pinças de Solda em Bronze',
    desc: 'Pinças porta-eletrodo em bronze de alta condutividade para solda elétrica. Conforto e durabilidade no trabalho diário.',
    badge: 'Acessório',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/produtos/spray-wd40-desengripante-solda-e-chama_1280x853.webp',
    name: 'Spray Desengripante e Anti-respingos',
    desc: 'WD-40 e sprays especiais para desengripar, lubrificar e proteger peças contra respingos de solda.',
    badge: 'Proteção',
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const { ref, inView } = useInView();
  const waMsg = `Olá! Tenho interesse no produto: ${product.name}. Podem me ajudar?`;

  return (
    <div
      ref={ref}
      className={`group bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-red/10 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {product.badge}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-brand-orange transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.desc}</p>
        <a
          href={`${WA_LINK}?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-red hover:text-brand-orange text-sm font-semibold transition-colors group/link"
        >
          Consultar preço
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const { ref, inView } = useInView();

  return (
    <section id="produtos" className="bg-[#0D0D0D] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Produtos para Todos os
            <span className="text-brand-red block">Tipos de Soldagem</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Equipamentos, consumíveis e EPIs selecionados por especialistas para garantir
            seu desempenho e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`${WA_LINK}?text=${encodeURIComponent('Olá! Quero ver o catálogo completo de produtos da Cia da Solda.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-red hover:bg-red-600 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Ver catálogo completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

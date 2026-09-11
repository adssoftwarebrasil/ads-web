import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Product {
  img: string;
  alt: string;
  badge: string;
  title: string;
  text: string;
  delay: number;
}

const products: Product[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-ferragens-prateleira-tintas-ferramentas-ciscer_900x1600.webp',
    alt: 'Ferramentas Manuais e Elétricas',
    badge: 'Mais Vendido',
    title: 'Ferramentas Manuais e Elétricas',
    text: 'Parafusadeiras, furadeiras, serras, alicates, martelos e muito mais.',
    delay: 0,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/rolo-tela-galinheiro-morlan-loja-material-construcao_1600x1433.webp',
    alt: 'Materiais para Cercamento',
    badge: 'Linha Rural',
    title: 'Materiais para Cercamento',
    text: 'Telas soldadas, gradil, arame farpado, ovalado e galvanizado.',
    delay: 100,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-ferramentas-vonder-produtos-prateleiras-luvas_720x1280.webp',
    alt: 'Ferragens e Fixação',
    badge: 'Variedade',
    title: 'Ferragens e Fixação',
    text: 'Vergalhões, parafusos, buchas, rebites e materiais de fixação.',
    delay: 200,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-de-construcao-estantes-de-produtos_900x1600.webp',
    alt: 'Construção e Obras',
    badge: 'Completo',
    title: 'Construção e Obras',
    text: 'Tudo para sua obra: materiais essenciais do início ao acabamento.',
    delay: 300,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/prateleiras-de-cordas-e-barbantes-em-loja_900x1600.webp',
    alt: 'Cordas, Telas e Acessórios',
    badge: 'Agro',
    title: 'Cordas, Telas e Acessórios',
    text: 'Cordas, fio sisal, tela de sombreamento, peneiras e itens para campo.',
    delay: 400,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/prateleiras-produtos-agropecuarios-loja-ferramentas_1154x1599.webp',
    alt: 'Produtos Agropecuários',
    badge: 'Linha Rural',
    title: 'Produtos Agropecuários',
    text: 'Linha completa para uso rural, sítios, chácaras e propriedades.',
    delay: 500,
  },
];

const brands = ['Tramontina', 'Irwin', 'Morlan', 'Vonder', 'Sentinela', 'Ciscer'];

export default function Products() {
  const heading = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const brandBar = useReveal<HTMLDivElement>();

  return (
    <section id="produtos" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-3 block">Nossos Produtos</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
            O que você precisa, <span className="text-brand">nós temos.</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Uma linha completa de ferramentas, ferragens, materiais de construção e produtos para o campo — tudo em um
            único lugar.
          </p>
        </div>
        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-navy/5 transition-all duration-700 cursor-pointer ${
                grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${p.delay}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-brand text-navy text-xs font-bold px-3 py-1 rounded-full shadow">
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-4">{p.text}</p>
                <div className="flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                  Consultar disponibilidade
                  <ArrowRight
                    width={16}
                    height={16}
                    className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={brandBar.ref}
          className={`mt-16 p-8 bg-navy rounded-2xl text-center transition-all duration-700 delay-300 ${
            brandBar.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-cream/60 text-sm font-medium uppercase tracking-widest mb-6">Marcas que trabalhamos</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {brands.map((b) => (
              <span
                key={b}
                className="text-cream/80 text-xl font-black tracking-tight hover:text-brand transition-colors cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const BASE = 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/';

const categories = [
  {
    id: 'executivo',
    label: 'Almoço Executivo',
    badge: 'Seg–Sex · 11h–14h',
    description: 'Prato completo, suculento e pronto para te dar energia. Cada dia uma opção diferente com arroz, feijão, salada e acompanhamentos.',
    items: [
      {
        name: 'Frango à Parmegiana',
        description: 'Frango empanado com molho de tomate, queijo derretido, arroz branco e fritas.',
        image: BASE + 'prato-executivo-frango-parmegiana-arroz-fritas_960x1280.webp',
        tag: 'Mais Pedido',
      },
      {
        name: 'Salada com Frango',
        description: 'Salada fresca com frango desfiado, queijo, tomate e tempero da casa.',
        image: BASE + 'salada-frango-queijo-tomate-mesa-restaurante_1200x1600.webp',
        tag: 'Opção Light',
      },
      {
        name: 'Peixe com Arroz e Salada',
        description: 'Peixe no molho, arroz branco, batata cozida e salada fresca.',
        image: 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/alteracoes/Peixe-Com-Arroz-e-Salada.jpg',
        tag: 'Frutos do Mar',
      },
      {
        name: 'Carne Assada',
        description: 'Suculenta carne assada servida no capricho com acompanhamentos tradicionais da casa.',
        image: 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/alteracoes/Carne-Assada-Prato.jpg',
        tag: 'Sabor Caseiro',
      },
    ],
  },
  {
    id: 'sabado',
    label: 'Especial de Sábado',
    badge: 'Sábados · 11h–23h30',
    description: 'O sábado no Comandante é sagrado. Churrasco na brasa, feijoada completa e tambaqui sem espinho — uma festa gastronômica toda semana.',
    items: [
      {
        name: 'Feijoada Completa',
        description: 'Feijoada tradicional com arroz, laranja, couve refogada e torresmo crocante. A legítima da vovó.',
        image: BASE + 'feijoada-completa-arroz-laranja-couve-e-torresmo_1024x1536.webp',
        tag: 'Clássico',
      },
      {
        name: 'Churrasco na Brasa',
        description: 'Costela, cupim, fraldinha e linguiça fresquinha, tudo na brasa do jeito certo.',
        image: BASE + 'assados-sabados-costela-cupim-fraldinha-linguica_1080x1350.webp',
        tag: 'Destaque',
      },
    ],
  },
  {
    id: 'petiscos',
    label: 'Petiscos & Espetinhos',
    badge: 'Noite · 17h–23h30',
    description: 'A noite pede companhia e petisco. Nossos espetinhos, bolinhos e pastéis são acompanhamentos perfeitos para uma cerveja bem gelada.',
    items: [
      {
        name: 'Bolinhos Dourados',
        description: 'Bolinhos crocantes e dourados servidos com molho especial da casa.',
        image: BASE + 'bolinhos-dourados-festival-bar-e-bar-molho_1024x1536.webp',
        tag: 'Mais Pedido',
      },
      {
        name: 'Pastéis Fritos',
        description: 'Pastéis fritos crocantes acompanhados de molho de abacate e limão.',
        image: BASE + 'pasteis-fritos-cesto-molho-abacate-lima_1024x1536.webp',
        tag: 'Crocante',
      },
    ],
  },
  {
    id: 'alacarte',
    label: 'À La Carte',
    badge: 'Seg–Sáb · Noite',
    description: 'Para quem quer uma experiência completa. Pratos elaborados com ingredientes selecionados e o toque especial do Comandante.',
    items: [
      {
        name: 'Panelinha Mista',
        description: 'Panelinha com queijo, tomate, azeitona e temperos especiais direto da frigideira quente.',
        image: BASE + 'prato-quente-queijo-tomate-oliva-frigideira_1024x1536.webp',
        tag: 'Exclusivo',
      },
      {
        name: 'Peixe Grelhado',
        description: 'Peixe grelhado na perfeição com legumes salteados e arroz branco.',
        image: BASE + 'prato-peixe-grelhado-legumes-arroz-branco_1024x1024.webp',
        tag: 'Saudável',
      },
      {
        name: 'Jantinha Completa',
        description: 'Espetinho de carne suculento, acompanhado de arroz, mandioca e o autêntico feijão tropeiro goiano.',
        image: 'https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/alteracoes/Espetinho-De-Carne-E-Arroz-Mandioca-Feij%C3%A3o-Tropeiro.jpg',
        tag: 'Tradição',
      },
      {
        name: 'Petit Gâteau',
        description: 'Petit gâteau quentinho com sorvete cremoso e calda de chocolate belga.',
        image: BASE + 'petit-gateau-com-sorvete-calda-chocolate_900x1600.webp',
        tag: 'Sobremesa',
      },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('executivo');
  const { ref, inView } = useInView();

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="cardapio" className="py-24 lg:py-32 bg-neutral-950 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-4">O que servimos</p>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">
            Cardápio do <span className="text-brand-gold">Comandante</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Do almoço executivo ao petisco da noite — cada prato preparado com carinho e os melhores ingredientes.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-gold text-brand-black'
                  : 'border border-white/20 text-brand-gray-light hover:border-brand-gold/40 hover:text-brand-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-brand-blue/20 border border-brand-blue/40 text-brand-blue-light text-xs font-semibold px-4 py-1.5 tracking-wider uppercase mb-3">
              {activeCategory.badge}
            </span>
            <p className="text-brand-gray max-w-2xl mx-auto">{activeCategory.description}</p>
          </div>

          <div
            key={activeTab}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.items.map((item, i) => (
              <div
                key={item.name}
                className="group bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-brand-gold text-brand-black text-xs font-bold px-3 py-1 tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-brand-white font-serif font-semibold text-xl mb-2">{item.name}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/556285601337?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20card%C3%A1pio%20do%20Botequim%20do%20Comandante."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              Ver Cardápio Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Hammer, Layers, Fence, Wrench, Wheat, ShoppingBag, Truck, Droplets } from 'lucide-react';

const PRODUCTS = [
  {
    icon: Hammer,
    title: 'Ferramentas e Equipamentos',
    description: 'Ampla seleção de ferramentas manuais e elétricas para construção e manutenção rural.',
    accent: 'brown',
  },
  {
    icon: Layers,
    title: 'Materiais de Construção',
    description: 'Cimento, areia, brita, tijolos, telhas e tudo mais para sua obra do começo ao fim.',
    accent: 'green',
  },
  {
    icon: Fence,
    title: 'Cercas e Mourões',
    description: 'Arames, postes, mourões e acessórios para delimitação e proteção de pastagens.',
    accent: 'brown',
  },
  {
    icon: Wheat,
    title: 'Insumos Pecuários',
    description: 'Produtos para o manejo do rebanho, higiene animal e manutenção da propriedade rural.',
    accent: 'green',
  },
  {
    icon: Droplets,
    title: 'Irrigação e Hidráulica',
    description: 'Tubos, conexões, registros e sistemas de irrigação para lavoura e uso doméstico.',
    accent: 'brown',
  },
  {
    icon: Wrench,
    title: 'Parafusos e Fixação',
    description: 'Parafusos, porcas, arruelas, pregos e todo tipo de fixação para construção e campo.',
    accent: 'green',
  },
  {
    icon: Truck,
    title: 'Implementos Agrícolas',
    description: 'Peças, acessórios e pequenos implementos para maquinários e veículos rurais.',
    accent: 'brown',
  },
  {
    icon: ShoppingBag,
    title: 'Produtos em Geral',
    description: 'Tudo o que você precisa para o campo e a cidade, em um único lugar de confiança.',
    accent: 'green',
  },
];

export default function Services() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Nosso Portfólio
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-[#663300] mb-4">
            Produtos e Serviços
          </h2>
          <div className="w-16 h-1 bg-[#006633] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Da fazenda à obra, temos tudo o que você precisa com qualidade garantida e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((item, idx) => {
            const Icon = item.icon;
            const isBrown = item.accent === 'brown';
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    backgroundColor: isBrown ? '#f5e6d3' : '#d5f0e3',
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: isBrown ? '#663300' : '#006633' }}
                    className="transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-[#4a2400] text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5566999996760"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#663300] hover:bg-[#5a2d00] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg transition-all duration-300 hover:scale-105"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}

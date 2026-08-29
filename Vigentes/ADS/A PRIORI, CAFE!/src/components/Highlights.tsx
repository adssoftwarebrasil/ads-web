import { Coffee, Cake, Sandwich, ShoppingBag, Truck, Wifi } from 'lucide-react';

const items = [
  {
    icon: Coffee,
    title: 'Cafés Especiais',
    description: 'Grãos selecionados, preparo artesanal e latte art feita com carinho pelo nosso barista.',
  },
  {
    icon: Cake,
    title: 'Doces & Tortas',
    description: 'Sobremesas artesanais, bolos de vitrine, cookies e doces delicados para qualquer momento.',
  },
  {
    icon: Sandwich,
    title: 'Salgados & Quiches',
    description: 'Pão de queijo quentinho, quiches de alto padrão, croissants franceses e pequenas refeições.',
  },
  {
    icon: ShoppingBag,
    title: 'Cestas & Presentes',
    description: 'Monte cestas personalizadas com produtos premium — o presente perfeito para qualquer ocasião.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Pedidos entregues com agilidade e cuidado, sem abrir mão da qualidade.',
  },
  {
    icon: Wifi,
    title: 'Espaço para Trabalhar',
    description: 'Ambiente tranquilo, Wi-Fi disponível e o cafézinho perfeito para sua concentração.',
  },
];

export default function Highlights() {
  return (
    <section className="py-20 md:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-burgundy mb-3 block">
            O que Oferecemos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Muito mais que um café
          </h2>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Cada produto criado com cuidado, cada detalhe pensado para sua melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="animate-on-scroll bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 border border-cream"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 bg-burgundy/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-burgundy transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-burgundy group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

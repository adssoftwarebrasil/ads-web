import { Heart, Star, Package, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos todos com carinho e respeito, independente da condicao social",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Star,
    title: "Qualidade Insuperavel",
    description: "Produtos selecionados e marcas de confianca em todas as nossas cestas",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Package,
    title: "Variedade de Opcoes",
    description: "Cestas Basicas de R$ 49,99 a R$ 499,00 para todas as necessidades",
    color: "bg-primary-50 text-primary",
  },
  {
    icon: Truck,
    title: "Entrega Rapida",
    description: "Entregamos em Goiania e regiao com agilidade e seguranca",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function Differentials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="diferenciais" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a Fort das Cestas?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${index + 1} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

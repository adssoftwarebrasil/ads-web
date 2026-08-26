import { Pizza, Award, Users, Sparkles, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const FEATURES: Feature[] = [
  {
    icon: Pizza,
    title: 'Nossas Pizzas',
    text: 'Delicie-se com nossas pizzas elaboradas artesanalmente, com receitas únicas.',
  },
  {
    icon: Award,
    title: 'Qualidade e Sabor',
    text: 'Comprometidos em oferecer o melhor, utilizamos apenas ingredientes de alta qualidade.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Nosso atendimento valoriza cada cliente, oferecendo uma experiência única.',
  },
  {
    icon: Sparkles,
    title: 'Soluções Inovadoras',
    text: 'Estamos sempre buscando inovações para surpreender nossos clientes com novas combinações de sabores.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-on-scroll bg-white border-2 border-[rgb(235,185,3)] rounded-2xl p-10 shadow-[0_5px_20px_rgba(150,1,0,0.1)] hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(150,1,0,0.2)] transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-[rgba(235,185,3,0.2)] w-[90px] h-[90px] rounded-full flex items-center justify-center mb-6 group-hover:rotate-360 transition-transform duration-500">
                  <Icon size={50} className="text-[rgb(150,1,0)]" />
                </div>
                <h3 className="text-[rgb(150,1,0)] text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

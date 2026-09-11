import { Flame, Leaf, Award, Heart, Truck, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Flame,
    title: 'Forno a Lenha',
    text: 'Pizzas assadas na hora em forno a lenha, com aquela crocância e sabor defumado que só o fogo de verdade proporciona.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    text: 'Selecionamos os melhores ingredientes, com recheios generosos e queijo de verdade em cada fatia.',
  },
  {
    icon: Award,
    title: '34 Anos de Tradição',
    text: 'Desde 1990 conquistando o paladar de Goiânia com uma receita que passou por gerações sem perder a essência.',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    text: 'Massa artesanal preparada todos os dias com carinho e dedicação, garantindo frescor e sabor incomparável.',
  },
  {
    icon: Truck,
    title: 'Delivery Rápido',
    text: 'Entregamos em até 12 km do nosso restaurante, cobrindo Goiânia e parte de Aparecida de Goiânia.',
  },
  {
    icon: Clock,
    title: 'Aberto Todos os Dias',
    text: 'Delivery das 10h às 23h e atendimento no salão das 18h às 23h, todos os dias da semana.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-cream text-sm font-semibold tracking-[0.25em] uppercase">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3">
            O Sabor que Conquista
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white/5 hover:bg-brand-red/10 border border-white/10 hover:border-brand-red/30 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-red/20 group-hover:bg-brand-red/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-brand-red" width={24} height={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

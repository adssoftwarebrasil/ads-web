import { Shield, Zap, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const pillars: Pillar[] = [
  {
    Icon: Shield,
    title: 'Produtos de Alta Qualidade',
    text: 'Durabilidade e excelente acabamento em cada produto que entregamos',
  },
  {
    Icon: Zap,
    title: 'Rapidez na Entrega',
    text: 'Cumprimento rigoroso dos prazos estabelecidos, sem comprometer a qualidade',
  },
  {
    Icon: Palette,
    title: 'Personalização Exclusiva',
    text: 'Brindes únicos que fortalecem sua marca e encantam seus clientes',
  },
];

export default function WhyChoose() {
  return (
    <section id="vantagens" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Por Que Escolher a Só Cópias?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Três pilares que garantem sua satisfação e o sucesso do seu projeto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105"
            >
              <pillar.Icon className="w-16 h-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-blue-100 leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

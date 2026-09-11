import { Calendar, Sparkles, Clock, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  value?: string;
  title: string;
  text: string;
}

const differentials: Differential[] = [
  {
    Icon: Calendar,
    value: '15+',
    title: 'Anos de Experiência',
    text: 'Consolidados no mercado de Porto Velho com tradição e confiabilidade',
  },
  {
    Icon: Sparkles,
    title: 'Produtos Personalizados',
    text: 'Brindes e impressos únicos criados especialmente para sua necessidade',
  },
  {
    Icon: Clock,
    title: 'Compromisso com Prazos',
    text: 'Entregamos no prazo prometido, sempre respeitando seu cronograma',
  },
  {
    Icon: Users,
    title: 'Equipe Dedicada',
    text: 'Atendimento especializado e personalizado do início ao fim do projeto',
  },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Diferenciais da <span className="text-blue-800">Só Cópias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna referência em produtos personalizados em Porto Velho
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <item.Icon className="w-14 h-14 text-orange-500 mb-6" />
              {item.value && (
                <div className="text-5xl font-bold text-blue-800 mb-4">{item.value}</div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

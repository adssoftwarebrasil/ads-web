import { CheckCircle, HeartHandshake, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  delay: number;
}

const benefits: Benefit[] = [
  {
    icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-white',
    title: 'Qualidade Garantida',
    text: 'Produtos com materiais e tecnologias de ponta.',
    delay: 0,
  },
  {
    icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-white',
    title: 'Atendimento Dedicado',
    text: 'Suporte personalizado para cada cliente.',
    delay: 150,
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-white',
    title: 'Inovação Constante',
    text: 'Produtos que transformarão o amanhã, com inovação em cada detalhe.',
    delay: 300,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <h2 className="text-[#333333] font-bold text-center mb-4 text-3xl md:text-4xl lg:text-5xl">
          Por que escolher a Cotec?
        </h2>
        <p className="text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Oferecemos benefícios exclusivos que fazem a diferença na sua experiência e resultados.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-[#FB6F11]/10 to-[#FB6F11]/20 rounded-2xl p-8 border-2 border-[#FB6F11]/20 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#FB6F11]/20 hover:-translate-y-1 transition-all duration-300 opacity-100 translate-y-0"
                style={{ transitionDelay: `${b.delay}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FB6F11] to-[#e56410] flex items-center justify-center mb-5 shadow-lg shadow-[#FB6F11]/30">
                    <Icon size={32} className={b.iconClass} />
                  </div>
                  <h3 className="text-[#333333] font-bold text-xl mb-3">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

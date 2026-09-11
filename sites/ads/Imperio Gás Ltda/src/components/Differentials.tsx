import { Clock, Zap, Shield, DollarSign } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  title: string;
  text: string;
  delay: string;
}

const differentials: Differential[] = [
  {
    icon: Clock,
    title: 'Atendimento 24 Horas',
    text: 'Funcionamos todos os dias, sem exceção. Emergência de gás ou água? Estamos disponíveis a qualquer momento.',
    delay: '0.1s',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    text: 'Localização estratégica no Jardim Olímpico para atender toda Aparecida de Goiânia com agilidade.',
    delay: '0.2s',
  },
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Produtos certificados e seguros. Sua família merece o melhor em gás de cozinha e água mineral.',
    delay: '0.3s',
  },
  {
    icon: DollarSign,
    title: 'Preços Competitivos',
    text: 'Melhor custo-benefício da região. Qualidade sem pesar no bolso, sempre com transparência.',
    delay: '0.4s',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in animate-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Por Que Escolher a Império Gás?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up animate-in">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fentregador-papel-amarelo.webp"
              alt="Entregador profissional"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {differentials.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 slide-up animate-in"
                  style={{ animationDelay: d.delay }}
                >
                  <div className="bg-[#DEAC6C]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-[#DEAC6C]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{d.title}</h3>
                  <p className="text-gray-600">{d.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Clock, Truck, CheckCircle, Handshake } from 'lucide-react';

const differentials = [
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Resposta rápida aos orçamentos e dúvidas. Sua necessidade é nossa prioridade',
  },
  {
    icon: Truck,
    title: 'Entrega Expressa',
    description: 'Logística otimizada para entregas rápidas e seguras em toda a região',
  },
  {
    icon: CheckCircle,
    title: 'Qualidade Garantida',
    description: 'Todas as madeiras são cuidadosamente selecionadas e verificadas',
  },
  {
    icon: Handshake,
    title: 'Atendimento Personalizado',
    description: 'Empresa familiar que valoriza o relacionamento com cada cliente',
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #401E0A 0%, #6B3410 50%, #8B4513 100%)',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Por Que Escolher o Empório do Deck?</h2>
          <p className="section-subtitle text-gray-200">Compromisso com qualidade e agilidade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="differential-card group"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-offWhite flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={36} className="text-accent group-hover:rotate-[360deg] transition-transform duration-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">{item.title}</h3>
              <p className="text-primaryMedium text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

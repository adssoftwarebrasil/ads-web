import { Award, CheckCircle, Truck, type LucideIcon } from 'lucide-react';

const advantages: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Award,
    title: 'Experiência de Mercado',
    description:
      'Equipe com profundo conhecimento técnico do setor, garantindo a melhor solução em cada produto que oferecemos.',
  },
  {
    icon: CheckCircle,
    title: 'Produtos Certificados',
    description:
      'Todos os nossos produtos seguem rigorosas normas de qualidade técnica, assegurando resistência e durabilidade superiores.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description:
      'Logística eficiente em Dourados e região, garantindo que seus produtos cheguem no prazo certo para não atrasar sua obra.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B4C] mb-4">
            Por Que Escolher a JM?
          </h2>
          <p className="text-lg text-[#A8AAAA] max-w-2xl mx-auto">
            Somos referência em qualidade e confiabilidade no mercado de artefatos de concreto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 border-2 border-[#4A90E2] border-opacity-20 hover:border-[#3b82f6] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-[#3b82f6] p-4 bg-[#3b82f6] bg-opacity-10 rounded-full">
                  <Icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1B4C]">{title}</h3>
                <p className="text-[#A8AAAA] text-lg leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

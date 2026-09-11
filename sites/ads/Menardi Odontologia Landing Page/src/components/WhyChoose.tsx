import { Award, Briefcase, Cpu, Clock, LucideIcon } from 'lucide-react';

interface Reason {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Experiência Comprovada',
    description: 'Mais de 3 décadas cuidando de sorrisos com excelência e dedicação',
  },
  {
    Icon: Briefcase,
    iconClass: 'lucide lucide-briefcase',
    title: 'Atendimento Completo',
    description: 'Do básico ao avançado, todas as especialidades em um só lugar',
  },
  {
    Icon: Cpu,
    iconClass: 'lucide lucide-cpu',
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para diagnósticos precisos e tratamentos eficazes',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Emergências 24h',
    description: 'Suporte quando você mais precisa, inclusive fora do horário comercial',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,87,101)] mb-4">
            Por Que Escolher a Menardi Odontologia?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(107,218,229)] rounded-full mb-6 group-hover:bg-[rgb(0,182,204)] transition-colors">
                <reason.Icon size={40} className={`${reason.iconClass} text-white`} />
              </div>
              <h3 className="text-xl font-bold text-[rgb(0,87,101)] mb-4">{reason.title}</h3>
              <p className="text-[rgb(42,42,42)] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

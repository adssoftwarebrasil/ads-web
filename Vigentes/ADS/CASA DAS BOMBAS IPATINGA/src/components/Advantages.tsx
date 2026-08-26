import { Clock, UserCheck, Cpu, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  { icon: Clock, title: 'Experiência Comprovada', description: 'Mais de 15 anos de atuação no setor' },
  { icon: UserCheck, title: 'Atendimento Especializado', description: 'Equipe treinada nas melhores marcas' },
  { icon: Cpu, title: 'Tecnologia de Ponta', description: 'Equipamentos modernos para perfuração' },
  { icon: ShieldCheck, title: 'Suporte Completo', description: 'Assistência técnica que garante durabilidade' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-16 lg:py-28" style={{ backgroundColor: 'rgb(1, 8, 82)' }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-lg font-semibold mb-2" style={{ color: 'rgb(37, 155, 208)' }}>
            NOSSOS DIFERENCIAIS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Por Que a Casa das Bombas é Referência em Ipatinga
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'rgb(37, 155, 208)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="text-center p-6 border-b-4 rounded-xl border-transparent hover:border-b-4 hover:border-b-white transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                    style={{ backgroundColor: 'rgb(37, 155, 208)' }}
                  >
                    <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-300 text-base">{advantage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

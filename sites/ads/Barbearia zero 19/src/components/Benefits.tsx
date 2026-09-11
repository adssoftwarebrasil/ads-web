import { Scissors, Clock, Zap, Star, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { Icon: Scissors, title: 'Barbeiros Especialistas', description: 'Mestres em cortes modernos e clássicos para um visual impecável.' },
  { Icon: Clock, title: 'Atendimento Pontual', description: 'Respeitamos seu tempo. Aqui você é atendido sem atrasos.' },
  { Icon: Zap, title: 'Ambiente Premium', description: 'Climatizado e confortável, com sinuca e fliperama à sua disposição.' },
  { Icon: Star, title: 'Produtos de Elite', description: 'Utilizamos apenas linhas profissionais importadas de alto padrão.' },
  { Icon: UserCheck, title: 'Atendimento Personalizado', description: 'Consultoria de visagismo para encontrar o corte que mais te valoriza.' },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit font-bold mb-4">Por que escolher a Barbearia Zero19 em Campinas?</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-light">Na Zero19, cada detalhe foi pensado para entregar muito mais que um corte — entregamos confiança, estilo e presença.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {benefits.map(({ Icon, title, description }, i) => (
            <div key={title} className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 mx-auto group-hover:bg-premium-red transition-all duration-300">
                <Icon className="w-8 h-8 text-premium-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-outfit text-zinc-900">{title}</h3>
              <p className="text-zinc-600 font-light text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

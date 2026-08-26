import { Award, Truck, Clock, Users, Shield, Search, Map, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Award, title: 'Experiência Comprovada', text: 'Mais de 20 anos de expertise em movimentação de cargas pesadas e complexas' },
  { icon: Truck, title: 'Frota Completa e Moderna', text: '50+ equipamentos de 30 a 300 toneladas, frota própria e constantemente renovada' },
  { icon: Clock, title: 'Operação 7 Dias por Semana', text: 'Segunda a segunda, sempre disponíveis para atender suas necessidades' },
  { icon: Users, title: 'Profissionais Certificados', text: 'Operadores especializados, treinados e constantemente capacitados' },
  { icon: Shield, title: 'Segurança Total', text: 'Seguimos rigorosamente todas as normas de segurança do trabalho (NRs)' },
  { icon: Search, title: 'Vistoria Técnica Gratuita', text: 'Análise prévia sem custo com engenheiro mecânico responsável' },
  { icon: Map, title: 'Cobertura Ampla', text: 'Atendemos Belém, região metropolitana e todo o interior do Pará' },
  { icon: TrendingUp, title: 'Planejamento Estratégico', text: 'Plano de rigging detalhado para cada projeto, garantindo eficiência' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-16">
          Por Que Escolher a Force Locações?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-2 hover:border-force-yellow transition-all duration-300 group"
            >
              <Icon className="w-16 h-16 text-force-yellow mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-force-blue mb-3">{title}</h3>
              <p className="text-force-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

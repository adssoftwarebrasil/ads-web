import { Zap, ShieldCheck, Headphones, Package, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Entrega Ágil',
    text: 'A entrega mais rápida da cidade. Seus equipamentos chegam no prazo para sua obra não parar.',
  },
  {
    icon: ShieldCheck,
    title: 'Equipamentos Revisados',
    text: 'Todos os equipamentos passam por manutenção preventiva, garantindo segurança e desempenho.',
  },
  {
    icon: Headphones,
    title: 'Suporte Dedicado',
    text: 'Atendimento próximo e personalizado. Estamos sempre disponíveis para ajudar.',
  },
  {
    icon: Package,
    title: 'Variedade Completa',
    text: 'Mais de 100 tipos de equipamentos diferentes para atender qualquer demanda da sua obra.',
  },
  {
    icon: Clock,
    title: 'Horário Flexível',
    text: 'Funcionamos de segunda a sábado, com horários que facilitam a logística da sua construção.',
  },
  {
    icon: MapPin,
    title: 'Cobertura Total',
    text: 'Atendemos todos os bairros de Sinop e região, levando equipamentos até o seu canteiro.',
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-brand-orange relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <span className="text-brand-blue-light font-semibold text-sm uppercase tracking-wider">Por que a MAQNOP?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Diferenciais que Fazem a<span className="text-brand-blue"> Diferença</span>
          </h2>
          <p className="mt-4 text-orange-100 text-base">
            Escolher a MAQNOP é garantir agilidade, qualidade e um parceiro comprometido com o sucesso da sua obra.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-white font-bold text-lg mt-5">{feature.title}</h3>
              <p className="text-orange-100 text-sm leading-relaxed mt-3">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

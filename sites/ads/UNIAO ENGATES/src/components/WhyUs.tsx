import { Award, Cog, Clock, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const cards: { Icon: LucideIcon; iconClass: string; title: string; text: string }[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-[rgb(175,11,18)]',
    title: 'Gestão da Qualidade',
    text: 'A União Engates Distribuidora preza pela qualidade de seus produtos e tem um alto padrão para sempre oferecer o que há de melhor a seus clientes.',
  },
  {
    Icon: Cog,
    iconClass: 'lucide lucide-cog text-[rgb(175,11,18)]',
    title: 'Gestão de Tecnologia',
    text: 'A União Engates Distribuidora está sempre inovando na produção, buscando tecnologia e adquirindo maquinário de ponta para a produção dos engates.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[rgb(175,11,18)]',
    title: 'Pronta Entrega',
    text: 'A União Engates Distribuidora mantém uma produção constante para atender seus clientes com eficácia e segurança.',
  },
  {
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-[rgb(175,11,18)]',
    title: 'Desenvolvimento',
    text: 'Aprendizado constante estruturado em inovação, sustentabilidade e valores humanos, transformando a sociedade.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        <h2 className="text-[rgb(175,11,18)] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14">
          Venha para a União Engates Distribuidora
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-6">
                <Icon className={iconClass} width={48} height={48} />
              </div>
              <h3 className="text-[#2C2C2C] text-xl font-bold mb-4">{title}</h3>
              <p className="text-[#2C2C2C] text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

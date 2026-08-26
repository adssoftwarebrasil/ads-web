import {
  ShieldCheck,
  Wrench,
  Truck,
  Award,
  Headphones,
  Clock,
  type LucideIcon,
} from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const items: Diferencial[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Consultores Especializados',
    text: 'Nossa equipe é formada por especialistas em soldagem que ajudam você a escolher o equipamento certo para cada aplicação.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Suporte Pós-Venda',
    text: 'Atendimento completo após a compra ou locação, garantindo que seu equipamento funcione com máxima eficiência.',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck',
    title: 'Locação Flexível',
    text: 'Alugue máquinas de solda MIG, Tig, Plasma, MMA e Eletrodo.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Marcas Premium',
    text: 'Trabalhamos com as melhores marcas do mercado: ESAB, Balmer, Galzer, Vonder, Dewalt, Bosch, Stanley, Black Deck, Wesco e muito mais.',
  },
  {
    icon: Headphones,
    iconClass: 'lucide lucide-headphones',
    title: 'Atendimento Personalizado',
    text: 'Cada cliente recebe atenção individual. Tiramos todas suas dúvidas e garantimos a melhor solução para sua necessidade.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Horário Estendido',
    text: 'Atendemos de segunda a sexta das 08h às 18h e sábado das 08h às 12h.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Por que escolher a Sia Solda?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">Nossos Diferenciais</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Mais do que uma loja de equipamentos — somos parceiros no sucesso do seu trabalho.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                  <Icon
                    className={`${item.iconClass} text-brand-orange group-hover:text-white transition-colors`}
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

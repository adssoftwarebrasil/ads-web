import { Truck, Clock, DollarSign, Zap, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  iconBg: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck',
    iconBg: 'from-emerald-500 to-teal-500',
    title: 'Entrega Sem Taxa',
    description: 'Entregamos sem cobrar taxa de entrega em toda Sorriso',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    iconBg: 'from-sky-500 to-blue-500',
    title: 'Horario Flexivel',
    description: 'Seg a Sab 07h as 19h, Dom e Feriados 07h as 12h',
  },
  {
    icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign',
    iconBg: 'from-amber-500 to-orange-500',
    title: 'Melhor Preco',
    description: 'Os melhores precos da cidade garantidos para voce',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    iconBg: 'from-[rgb(248,130,31)] to-red-500',
    title: 'Atendimento Rapido',
    description: 'Entrega agil e atendimento de qualidade pelo WhatsApp',
  },
];

export default function Features() {
  return (
    <section className="relative bg-gray-900 py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[rgb(248,130,31)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[rgb(248,130,31)] font-semibold text-sm tracking-widest uppercase mb-3">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por Que Escolher a <span className="text-[rgb(248,130,31)]">Kerber Gas?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nossos diferenciais fazem toda a diferenca no seu dia a dia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-7 border border-gray-700/50 hover:border-[rgb(248,130,31)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[rgb(248,130,31)]/5"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(248,130,31)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className={`${feature.iconClass} w-7 h-7 text-white`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/5566999668040?text=Ola!%20Gostaria%20de%20fazer%20um%20pedido%20de%20gas%20ou%20agua."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[rgb(248,130,31)] to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(248,130,31,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Phone className="lucide lucide-phone w-5 h-5" />
            <span>Peca Agora pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

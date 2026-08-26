import { Award, UserCheck, Package, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/site';

interface Advantage {
  number: string;
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    number: '01',
    icon: Award,
    iconClass: 'lucide lucide-award text-red-600 group-hover:text-white transition-colors',
    title: 'Experiência de Mais de 10 Anos',
    description: 'Atuamos no mercado com dedicação e resultados comprovados.',
  },
  {
    number: '02',
    icon: UserCheck,
    iconClass: 'lucide lucide-user-check text-red-600 group-hover:text-white transition-colors',
    title: 'Atendimento Personalizado',
    description: 'Tratamos seu carro com atenção especial, cuidando de cada detalhe.',
  },
  {
    number: '03',
    icon: Package,
    iconClass: 'lucide lucide-package text-red-600 group-hover:text-white transition-colors',
    title: 'Materiais de Alta Qualidade',
    description: 'Utilizamos apenas produtos de primeira linha para garantir resultados.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Vantagens de Escolher a Expressocar
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Experimente a qualidade e a confiança que oferecemos aos nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.number}
                className="group relative bg-gray-50 hover:bg-red-600 rounded-3xl p-8 transition-all duration-400 hover:shadow-xl hover:shadow-red-600/25 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-black text-red-100 group-hover:text-white/20 transition-colors leading-none select-none">
                    {adv.number}
                  </span>
                  <div className="bg-red-100 group-hover:bg-white/20 p-3 rounded-2xl transition-colors">
                    <Icon className={adv.iconClass} width={24} height={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-500 group-hover:text-red-100 text-sm leading-relaxed transition-colors">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
          >
            <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

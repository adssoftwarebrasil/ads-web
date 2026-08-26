import { Armchair, Wrench, Package, Settings, Paintbrush, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

type Service = {
  icon: LucideIcon;
  iconClass: string;
  boxClass: string;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Armchair,
    iconClass: 'lucide lucide-armchair ',
    boxClass: 'bg-brand-blue/10 text-brand-blue',
    title: 'Venda de Cadeiras',
    desc: 'Cadeiras giratórias, executivas, presidentes e secretárias com ergonomia e design para seu escritório.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide lucide-wrench ',
    boxClass: 'bg-brand-red/10 text-brand-red',
    title: 'Reformas Especializadas',
    desc: 'Reformas personalizadas de cadeiras, poltronas e mobiliário comercial com materiais de primeira linha.',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package ',
    boxClass: 'bg-brand-yellow/20 text-brand-navy',
    title: 'Peças de Reposição',
    desc: 'Rodízios, cilindros, braços, bases e acessórios com pronta entrega para sua cadeira ou poltrona.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings ',
    boxClass: 'bg-brand-sky/30 text-brand-blue',
    title: 'Assistência Técnica',
    desc: 'Manutenção preventiva e corretiva em cadeiras industriais e de escritório com serviço rápido.',
  },
  {
    icon: Paintbrush,
    iconClass: 'lucide lucide-paintbrush ',
    boxClass: 'bg-brand-blue/10 text-brand-blue',
    title: 'Móveis de Escritório',
    desc: 'Mesas para computador, escrivaninhas, estações de trabalho e móveis sob medida para seu espaço.',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck ',
    boxClass: 'bg-brand-red/10 text-brand-red',
    title: 'Montagem e Entrega',
    desc: 'Entrega grátis na compra de cadeira nova em Manaus. Serviço de montagem profissional incluso.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Nossos Serviços</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
            Soluções Completas para seu <span className="text-brand-blue">Escritório</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 leading-relaxed">
            Da venda ao pós-venda, cuidamos de cada detalhe para garantir o conforto e a produtividade do seu ambiente de trabalho.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-blue/20 transition-all duration-500 hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${s.boxClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon width={24} height={24} className={s.iconClass} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{s.title}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10 lg:mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/25"
          >
            Solicitar Serviço
            <Wrench width={18} height={18} className="lucide lucide-wrench " />
          </a>
        </div>
      </div>
    </section>
  );
}

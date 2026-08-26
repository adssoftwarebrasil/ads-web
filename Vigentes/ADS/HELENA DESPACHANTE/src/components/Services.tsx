import { CreditCard, RefreshCw, FileText, Car, Settings, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon, ArrowShort } from './icons';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  badge?: string;
}

const services: Service[] = [
  {
    icon: CreditCard,
    iconClass: 'lucide lucide-credit-card text-brand-yellow',
    title: 'Quitação de Débitos',
    description: 'Regularize multas, IPVA e demais pendências do seu veículo com total segurança e agilidade.',
    badge: 'Mais procurado',
  },
  {
    icon: RefreshCw,
    iconClass: 'lucide lucide-refresh-cw text-brand-yellow',
    title: 'Transferência de Veículo',
    description: 'Transferência completa do seu veículo no DETRAN, de forma rápida, sem burocracia e sem dor de cabeça.',
  },
  {
    icon: FileText,
    iconClass: 'lucide lucide-file-text text-brand-yellow',
    title: 'Licenciamento',
    description: 'Emissão do CRLV e regularização do licenciamento anual do seu veículo em dia.',
  },
  {
    icon: Car,
    iconClass: 'lucide lucide-car text-brand-yellow',
    title: 'Primeiro Emplacamento',
    description: 'Emplacamento de veículos novos ou importados com todo processo documental cuidado por nós.',
  },
  {
    icon: Settings,
    iconClass: 'lucide lucide-settings text-brand-yellow',
    title: 'Mudança de Característica',
    description: 'Alterações no cadastro do veículo como cor, categoria, carroceria e demais características.',
  },
  {
    icon: Truck,
    iconClass: 'lucide lucide-truck text-brand-yellow',
    title: 'Licenças e ANTT',
    description: 'Obtenção e renovação de licenças de transporte junto à ANTT para veículos de carga e passageiros.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">O que oferecemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Serviços Completos para
            <br />
            <span className="text-brand-yellow">seu Veículo</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto text-lg leading-relaxed">
            Do licenciamento à transferência, cuidamos de toda a documentação veicular para você com eficiência e honestidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative group bg-brand-dark-card border border-brand-dark-border rounded-2xl p-8 hover:border-brand-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-yellow/5 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {service.badge && (
                  <span className="absolute -top-3 left-6 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 mb-6 group-hover:bg-brand-yellow/20 transition-colors duration-300">
                  <Icon width={24} height={24} className={service.iconClass} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-brand-yellow text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Solicitar serviço</span>
                  <ArrowShort width={16} height={16} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="http://wa.me/556696535401?text=Olá%20Helena!%20Preciso%20de%20ajuda%20com%20a%20documentação%20do%20meu%20veículo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-yellow text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/25 hover:-translate-y-0.5"
          >
            <WhatsAppIcon width={18} height={18} />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}

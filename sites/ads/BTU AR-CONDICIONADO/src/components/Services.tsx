import {
  Zap,
  Wrench,
  Wind,
  Thermometer,
  ShoppingBag,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const services: Service[] = [
  {
    icon: Zap,
    title: 'Instalação',
    description:
      'Instalação profissional de aparelhos Split Hi-Wall, Cassete e Piso-Teto com materiais de qualidade e garantia de serviço.',
    tag: 'Hi-Wall · Cassete · Piso-Teto',
  },
  {
    icon: Wrench,
    title: 'Manutenção Preventiva',
    description:
      'Manutenção periódica para manter seu ar condicionado funcionando com eficiência máxima e prolongar a vida útil do equipamento.',
    tag: 'Contratos corporativos disponíveis',
  },
  {
    icon: Wind,
    title: 'Limpeza e Higienização',
    description:
      'Limpeza completa e higienização dos filtros e componentes internos, garantindo ar limpo e saudável para o seu ambiente.',
    tag: 'Ar mais limpo e saudável',
  },
  {
    icon: Thermometer,
    title: 'Conserto e Reparo',
    description:
      'Diagnóstico e reparo de aparelhos com panes, vazamentos de gás, problemas elétricos e qualquer tipo de defeito.',
    tag: 'Diagnóstico sem custo',
  },
  {
    icon: ShoppingBag,
    title: 'Venda de Equipamentos',
    description:
      'Fornecimento de aparelhos de ar condicionado das melhores marcas, com as melhores condições de pagamento para empresas.',
    tag: 'Gree · Fujitsu · Elgin · TCL',
  },
  {
    icon: ClipboardCheck,
    title: 'Contratos Empresariais',
    description:
      'Planos de manutenção preventiva e corretiva para empresas, com atendimento prioritário e previsibilidade de custos.',
    tag: 'Foco em corporativo',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Nossos Serviços</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Soluções completas em climatização para residências e empresas, com profissionais
            qualificados e atendimento ágil.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

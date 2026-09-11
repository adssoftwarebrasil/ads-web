import { Truck, ShoppingCart, Wrench, Zap, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  Icon: LucideIcon;
  iconClass: string;
  badge?: string;
};

const services: Service[] = [
  {
    title: 'Locação de Geradores',
    description:
      'Disponibilizamos geradores para locação com potências de 8 kVA a 750 kVA, revisados e testados por nossa equipe. Atendemos obras, indústrias, construção civil, festas e eventos. Operação manual ou automática com instalação por técnicos treinados.',
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/gerador-sulltec-azul-em-area-externa_1280x960.webp',
    alt: 'Locação de Geradores',
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-white',
    badge: 'Mais Buscado',
  },
  {
    title: 'Venda de Geradores',
    description:
      'Somos representantes autorizados em venda e assistência técnica de Geradores MWM, marca consagrada e de alta confiabilidade na fabricação de motores e grupos geradores.',
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/gerador-mwm-azul-novo-ao-ar-livre_720x542.webp',
    alt: 'Venda de Geradores',
    Icon: ShoppingCart,
    iconClass: 'lucide lucide-shopping-cart text-white',
  },
  {
    title: 'Manutenção Preventiva',
    description:
      'Minimizamos falhas prematuras com manutenção preventiva que reduz custos, evita paradas não programadas e amplia a vida útil do equipamento. Visão holística do processo produtivo e do consumo de energia.',
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/operario-controlando-painel-mwm-com-chave_1280x853.webp',
    alt: 'Manutenção Preventiva',
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench text-white',
  },
  {
    title: 'Rejuvenescimento de Geradores',
    description:
      'Removemos agentes nocivos à isolação elétrica, substituímos diodos do sistema de excitação brushless e rolamentos. Evitamos curto-circuito, princípio de incêndio e gastos excessivos com manutenção corretiva.',
    image: '/gerador.png',
    alt: 'Rejuvenescimento de Geradores',
    Icon: Zap,
    iconClass: 'lucide lucide-zap text-white',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            O Que Fazemos
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">
            Soluções Completas em Geradores
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Da locação à manutenção, oferecemos serviços especializados para
            garantir energia confiável onde você precisar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent"></div>
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                    {service.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-brand-red w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                    <service.Icon
                      width={20}
                      height={20}
                      className={service.iconClass}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="flex items-center gap-2 text-brand-red font-semibold text-sm group/btn hover:gap-3 transition-all duration-200"
                >
                  Solicitar Orçamento
                  <ArrowRight
                    width={16}
                    height={16}
                    className="lucide lucide-arrow-right group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

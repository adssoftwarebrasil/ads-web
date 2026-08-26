import { Droplets, Truck, Package, Wrench, ShieldCheck, type LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';

interface Service {
  icon: LucideIcon;
  iconWrap: string;
  title: string;
  description: string;
  colSpan: string;
}

const services: Service[] = [
  {
    icon: Droplets,
    iconWrap: 'bg-blue-100 text-blue-600',
    title: 'Oxigênio Medicinal',
    description:
      'Fornecimento de oxigênio medicinal com certificação e garantia de pureza para hospitais, clínicas e uso domiciliar.',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2',
  },
  {
    icon: Truck,
    iconWrap: 'bg-yellow-100 text-yellow-600',
    title: 'Entrega Rápida',
    description:
      'Serviço de entrega ágil em Unaí e região. Atendimento emergencial disponível para garantir que você nunca fique sem.',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2',
  },
  {
    icon: Package,
    iconWrap: 'bg-blue-100 text-blue-600',
    title: 'Venda de Cilindros',
    description:
      'Cilindros de oxigênio novos e revisados para venda. Diversos tamanhos disponíveis conforme sua necessidade.',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2',
  },
  {
    icon: Wrench,
    iconWrap: 'bg-yellow-100 text-yellow-600',
    title: 'Equipamentos de Soldagem',
    description:
      'Linha completa de equipamentos, eletrodos, arames MIG e acessórios para soldagem industrial em geral.',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2 lg:col-start-2',
  },
  {
    icon: ShieldCheck,
    iconWrap: 'bg-blue-100 text-blue-600',
    title: 'Aluguel de Cilindros',
    description:
      'Aluguel de cilindros com flexibilidade de prazo e manutenção incluída. Solução econômica e sem compromisso.',
    colSpan: 'col-span-1 sm:col-span-2 lg:col-span-2 sm:col-start-2 lg:col-start-auto',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Soluções Completas Para Sua Necessidade
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos uma gama completa de produtos e serviços com qualidade certificada,
            atendimento personalizado e os melhores preços de Unaí.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 ${service.colSpan}`}
              >
                <div
                  className={`${service.iconWrap} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
          >
            Solicite um Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}

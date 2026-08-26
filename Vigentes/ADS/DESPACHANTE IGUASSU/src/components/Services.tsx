import { FileText, CreditCard, Car, Shield, BadgeCheck, Clock, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: FileText,
    title: 'Transferências Veiculares',
    description:
      'Transferência completa do seu veículo com agilidade e segurança. Processo simplificado em até 24h.',
  },
  {
    icon: CreditCard,
    title: 'Pagamento de Débitos',
    description: 'Quitação de IPVA, multas e licenciamento. Parcelamos em até 18x nos cartões.',
  },
  {
    icon: Car,
    title: 'Licenciamento',
    description:
      'Renovação de licenciamento anual do seu veículo sem complicações e com todo suporte necessário.',
  },
  {
    icon: Shield,
    title: '1º Emplacamento',
    description: 'Primeiro emplacamento de veículos novos com toda documentação necessária.',
  },
  {
    icon: BadgeCheck,
    title: 'Placa Mercosul',
    description: 'Regularização da placa padrão Mercosul com agilidade.',
  },
  {
    icon: Clock,
    title: 'Consultoria Documental',
    description: 'Orientação completa sobre processos e documentação veicular.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021D46] mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em despachante veicular com atendimento personalizado e preços competitivos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#021D46] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#021D46] rounded-3xl p-8 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              Parcelamos em até <span className="text-[#FA1213]">18x</span> nos cartões
            </p>
            <p className="text-[#B7AF92] text-lg">Facilidade de pagamento para todos os serviços</p>
          </div>
        </div>
      </div>
    </section>
  );
}

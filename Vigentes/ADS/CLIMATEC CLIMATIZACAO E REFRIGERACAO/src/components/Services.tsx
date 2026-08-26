import {
  Wind,
  Settings,
  Sparkles,
  Wrench,
  Snowflake,
  PenTool,
  Thermometer,
  FileText,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wind,
    title: 'Venda de Ar Condicionado',
    description:
      'Venda de ar condicionado Split Hi Wall, Piso Teto, Cassete e VRF com as melhores condicoes do mercado.',
  },
  {
    icon: Settings,
    title: 'Instalacao',
    description:
      'Instalacao profissional de ar condicionado Split, Piso Teto, Cassete e sistemas VRF com garantia de servico.',
  },
  {
    icon: Sparkles,
    title: 'Limpeza e Higienizacao',
    description:
      'Limpeza completa e higienizacao profunda para um ar mais puro e saudavel no seu ambiente.',
  },
  {
    icon: Wrench,
    title: 'Manutencao',
    description:
      'Manutencao preventiva e corretiva para garantir o funcionamento ideal e prolongar a vida util do equipamento.',
  },
  {
    icon: Snowflake,
    title: 'Aluguel de Ar Condicionado',
    description:
      'Locacao de ar condicionado de 9.000 BTUs ate 60.000 BTUs para eventos, obras e necessidades temporarias.',
  },
  {
    icon: PenTool,
    title: 'Infra para Ar Condicionado',
    description:
      'Projeto e execucao de infraestrutura completa com tubulacao para instalacao de ar condicionado.',
  },
  {
    icon: Thermometer,
    title: 'Instalacao VRF',
    description:
      'Instalacao e manutencao de sistemas VRF para grandes ambientes comerciais e industriais.',
  },
  {
    icon: FileText,
    title: 'Servico de PMOC',
    description:
      'Plano de Manutencao, Operacao e Controle conforme legislacao vigente para seu estabelecimento.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Nossos Servicos
          </h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="scroll-reveal group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 p-8 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary group-hover:scale-110 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

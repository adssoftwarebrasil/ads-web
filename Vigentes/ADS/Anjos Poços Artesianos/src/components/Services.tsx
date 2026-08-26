import {
  Home,
  Droplets,
  Sprout,
  Building2,
  Factory,
  Mountain,
  LucideIcon,
} from 'lucide-react';
import { CheckCircleFilled, WHATSAPP_URL } from './icons';

interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Poços Semiartesianos',
    text: 'Perfuração de poços semiartesianos para chácaras, sítios e fazendas com eficiência e qualidade.',
    items: ['Chácaras', 'Sítios', 'Fazendas', 'Empresas'],
  },
  {
    icon: Droplets,
    title: 'Poços Artesianos Profundos',
    text: 'Perfuração de poços artesianos profundos com tecnologia avançada para grande volume de água.',
    items: [
      'Alta Capacidade',
      'Perfuração Profunda',
      'Equipamentos Modernos',
      'Garantia de Qualidade',
    ],
  },
  {
    icon: Sprout,
    title: 'Poços para Irrigação',
    text: 'Soluções especializadas em poços para sistemas de irrigação agrícola e projetos rurais.',
    items: [
      'Irrigação Agrícola',
      'Grande Vazão',
      'Projetos Customizados',
      'Análise do Solo',
    ],
  },
  {
    icon: Building2,
    title: 'Poços para Loteamentos',
    text: 'Perfuração de poços para abastecimento de loteamentos residenciais e comerciais.',
    items: [
      'Loteamentos',
      'Condomínios',
      'Abastecimento Contínuo',
      'Licenciamento',
    ],
  },
  {
    icon: Factory,
    title: 'Empresas de Grande Porte',
    text: 'Soluções completas para indústrias e empresas que necessitam de grande volume de água.',
    items: [
      'Alta Demanda',
      'Projetos Industriais',
      'Manutenção Preventiva',
      'Atendimento Prioritário',
    ],
  },
  {
    icon: Mountain,
    title: 'Perfuração em Rocha',
    text: 'Perfuração especializada em sedimentos e rocha com revestimentos de 4", 6", 8" e 10".',
    items: [
      'Sedimentos',
      'Rocha',
      'Diversos Revestimentos',
      'Técnica Avançada',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Soluções completas em perfuração e manutenção de poços artesianos
            para todos os tipos de necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.text}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircleFilled className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Manutenção de Poços
              </h3>
              <p className="text-gray-600">
                Serviços completos de manutenção preventiva e corretiva para
                garantir o funcionamento ideal do seu poço.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold whitespace-nowrap"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

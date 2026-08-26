import { Sun, Shield, Home, Layers, Warehouse, Wrench, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconName: string;
  bg: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Sun,
    iconName: 'sun',
    bg: 'bg-tropical-blue',
    title: 'Toldos em Lona',
    description:
      'Toldos retráteis e fixos em lona de alta resistência, ideais para varandas, fachadas e áreas externas. Proteção garantida contra sol e chuva.',
  },
  {
    icon: Shield,
    iconName: 'shield',
    bg: 'bg-tropical-navy',
    title: 'Coberturas em Policarbonato',
    description:
      'Translúcido, leve e resistente. O policarbonato permite a passagem de luz natural enquanto protege do sol e das chuvas com elegância.',
  },
  {
    icon: Home,
    iconName: 'home',
    bg: 'bg-tropical-green',
    title: 'Toldos Cortina Retrátil',
    description:
      'Solução versátil e moderna que oferece privacidade e proteção sob demanda. Ideal para sacadas, pátios e áreas de convivência.',
  },
  {
    icon: Layers,
    iconName: 'layers',
    bg: 'bg-tropical-brown',
    title: 'Telha Zinco e Sanduíche',
    description:
      'Coberturas em zinco, telha isotérmica e telha sanduíche para garagens, galpões, quintais e ambientes que exigem durabilidade e isolamento térmico.',
  },
  {
    icon: Warehouse,
    iconName: 'warehouse',
    bg: 'bg-tropical-blue',
    title: 'Garagens em Tela Sombrite',
    description:
      'Proteção eficiente contra raios UV e granizo para veículos. Estruturas leves, duráveis e com excelente conforto térmico para sua área externa.',
  },
  {
    icon: Wrench,
    iconName: 'wrench',
    bg: 'bg-tropical-navy',
    title: 'Serralheria em Geral',
    description:
      'Grades, portões, estruturas metálicas e soluções personalizadas em serralheria para todas as necessidades da sua residência ou comércio.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-tropical-blue font-semibold text-sm uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Soluções Completas em
            <span className="block text-tropical-blue">Toldos e Coberturas</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Do projeto à instalação, trabalhamos com materiais de primeira linha e estrutura metálica reforçada para
            entregar o melhor resultado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-tropical-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`lucide lucide-${service.iconName} text-white`} width={26} height={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <a
            href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Tropical%20Toldos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tropical-blue hover:bg-tropical-navy text-white font-bold px-10 py-4 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

import { Ruler, Clock, Leaf, Package, Award, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Ruler,
    iconClass: 'lucide lucide-ruler ',
    title: 'Precisão Absoluta',
    description:
      'Corte sob medida com precisão milimétrica. Cada peça é cortada exatamente conforme suas especificações, eliminando desperdícios.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock ',
    title: 'Eficiência no Trabalho',
    description:
      'Economize tempo precioso. Não precisa medir e cortar você mesmo. Receba as espumas prontas para aplicar direto nos seus projetos.',
  },
  {
    icon: Leaf,
    iconClass: 'lucide lucide-leaf ',
    title: 'Sustentabilidade',
    description:
      'Redução de resíduos através do corte preciso. Cada pedaço é utilizado eficientemente, promovendo práticas ecoconscientes.',
  },
  {
    icon: Package,
    iconClass: 'lucide lucide-package ',
    title: 'Variedade Completa',
    description:
      'Ampla gama de espumas com diferentes densidades e texturas. Encontre a espuma perfeita para cada tipo de projeto.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award ',
    title: 'Qualidade Certificada',
    description:
      'Utilizamos apenas espumas premium certificadas. Durabilidade e conforto excepcionais garantidos em cada produto.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users ',
    title: '31 Anos de Experiência',
    description:
      'História de pai e filho dedicados ao negócio. Mais de 500 trabalhos realizados e 439 clientes satisfeitos em Uberlândia.',
  },
];

export default function Services() {
  return (
    <div className="animate-slideUp delay-200">
      <section id="servicos" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Uber Espumas?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de três décadas oferecendo soluções em espumas com qualidade incomparável
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00218b] to-[#4A90E2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className={service.iconClass} width={32} height={32} stroke="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

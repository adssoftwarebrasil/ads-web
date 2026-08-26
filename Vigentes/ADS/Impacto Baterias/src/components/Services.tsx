import { Zap, Award, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Zap,
    title: 'Entrega e Instalação Grátis',
    description:
      'Ficou na mão? Não se preocupe. Pedindo sua bateria com a gente, a entrega e a instalação em Niquelândia são por nossa conta. Rapidez e comodidade garantidas.',
  },
  {
    icon: Award,
    title: 'As Melhores Marcas',
    description:
      'Trabalhamos com um portfólio completo das marcas de baterias mais confiáveis do mercado, garantindo durabilidade e o melhor desempenho para seu carro, moto ou caminhão.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description:
      'Nossa equipe é profissional e treinada para realizar a troca da sua bateria com segurança e eficiência, garantindo a performance do seu veículo e a sua tranquilidade.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            A Solução Completa em Baterias Automotivas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre a bateria ideal para seu veículo com quem mais entende do assunto em Goiás.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-[#FFD700]"
              >
                <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-[#333333]" />
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

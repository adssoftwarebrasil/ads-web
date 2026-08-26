import { Award, Headphones, Truck, Tag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    Icon: Award,
    title: 'Qualidade Garantida',
    desc: 'Matéria-prima rigorosamente selecionada e testada para desempenho excepcional.',
  },
  {
    Icon: Headphones,
    title: 'Suporte Técnico Especializado',
    desc: 'Especialistas prontos para tirar dúvidas, indicar o melhor material e acompanhar você em todas as etapas do projeto.',
  },
  {
    Icon: Truck,
    title: 'Entrega Rápida e Eficiente',
    desc: 'Logística própria que garante rapidez e pontualidade.',
  },
  {
    Icon: Tag,
    title: 'Condições Especiais',
    desc: 'Ofertas exclusivas para profissionais e clientes frequentes.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            POR QUE ESCOLHER A DOBRAÇO?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Compromisso com excelência em cada etapa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 text-center border-2 border-white border-opacity-10 hover:border-[rgb(139,0,2)] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[rgb(139,0,2)] mb-6 flex justify-center">
                <Icon width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

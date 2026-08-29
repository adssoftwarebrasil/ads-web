import React from 'react';
import { Factory, Headphones, Network, CheckCircle2 } from 'lucide-react';

interface Differential {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const Differentials: React.FC = () => {
  const differentials: Differential[] = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: 'Expertise em Alta Complexidade',
      description: 'Dominamos ambientes industriais críticos e infraestrutura energética que não pode falhar. Garantia de segurança e eficiência operacional.',
      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fmesa-controle-industrial.webp'
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'Suporte Técnico Contínuo',
      description: 'Não entregamos apenas a obra. Oferecemos suporte vitalício para garantir que seus sistemas operem com máxima confiabilidade.',
      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Ftrabalhadores-subestacao-eletrica.webp'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Soluções Integradas',
      description: 'Combinamos redes, subestações e energia solar em projetos únicos que otimizam sua operação e reduzem custos do início ao fim.',
      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fcabos-organizados-painel.webp'
    }
  ];

  return (
    <section id="differentials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-2 block">
            Nossos Pilares
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Por que escolher a Mais Luz?
          </h2>
          <p className="text-lg text-gray-600">
            Nossa metodologia une rigor técnico, segurança normativa e agilidade para entregar resultados que superam expectativas.
          </p>
        </div>

        {/* Differentials Flex Layout (Centraliza itens órfãos) */}
        <div className="flex flex-wrap justify-center gap-8">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] bg-[#0a1128] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <img
                  src={diff.image}
                  alt=""
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradiente Overlay - Mais escuro embaixo para leitura */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080e5c] via-[#080e5c]/90 to-[#080e5c]/70" />
              </div>

              {/* Borda lateral amarela animada */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400 transform origin-bottom scale-y-75 group-hover:scale-y-100 transition-transform duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Icon Box */}
                <div className="relative w-fit mb-6">
                  <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
                  <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-xl text-yellow-400 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {diff.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {diff.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {diff.description}
                </p>

                {/* Marcador visual no fim */}
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-yellow-400/80 group-hover:text-yellow-400 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
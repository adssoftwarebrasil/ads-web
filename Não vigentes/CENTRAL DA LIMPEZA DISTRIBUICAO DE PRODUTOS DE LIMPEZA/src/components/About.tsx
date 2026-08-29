import { CheckCircle, Users, Award, Heart } from 'lucide-react';

const diferenciais = [
  {
    icon: Award,
    title: 'Marcas líderes de mercado',
    description: 'Trabalhamos com Genco, Bralimpia, Condor e outras marcas reconhecidas pela qualidade.',
  },
  {
    icon: Users,
    title: 'Atendimento de excelência',
    description: 'Equipe preparada para entender a necessidade de cada cliente e oferecer a melhor solução.',
  },
  {
    icon: Heart,
    title: 'Loja física completa',
    description: 'Espaço amplo com variedade de produtos para você ver, comparar e escolher com confiança.',
  },
  {
    icon: CheckCircle,
    title: 'Entrega e atendimento local',
    description: 'Entregas ágeis em Pinhais e região, com praticidade e agilidade no seu dia a dia.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-brand-green-light text-brand-green text-sm font-semibold rounded-full mb-4">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Quem é a{' '}
              <span className="text-brand-blue">Central da</span>{' '}
              <span className="text-brand-green">Limpeza?</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Fundada em <strong className="text-gray-900">junho de 2016</strong>, a Central da Limpeza nasceu com
                um propósito claro: oferecer os melhores produtos de limpeza com atendimento humano e diferenciado.
              </p>
              <p>
                Ao longo de mais de 9 anos, construímos uma loja ampla com variedade de marcas, priorizando sempre
                a qualidade. Trabalhamos com equipamentos e produtos para limpeza de piscinas, com destaque para a
                marca <strong className="text-gray-900">Genco</strong>, uma das líderes do mercado.
              </p>
              <p>
                Nosso diferencial está no <strong className="text-gray-900">atendimento de excelência</strong>.
                Buscamos compreender a necessidade de cada pessoa que vem em busca de uma solução para Limpeza doméstica, profissional e tratamento de piscinas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-blue-light rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm font-semibold text-brand-blue">Loja física em Pinhais</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-orange-light rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">+10 marcas parceiras</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferenciais.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

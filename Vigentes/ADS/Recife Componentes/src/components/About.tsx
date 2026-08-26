import { Target, Award, TrendingUp, Users, LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  iconClass: string;
  bgClass: string;
  borderClass: string;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    icon: Target,
    iconClass: 'lucide lucide-target w-8 h-8 text-[rgb(231,195,37)]',
    bgClass: 'bg-[rgb(231,195,37)]/10',
    borderClass: 'border-[rgb(231,195,37)]',
    title: 'Nossa Missão',
    text: 'Ser a referência em acessórios para esquadrias, oferecendo qualidade e preço justo.',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award w-8 h-8 text-[rgb(187,133,19)]',
    bgClass: 'bg-[rgb(187,133,19)]/10',
    borderClass: 'border-[rgb(187,133,19)]',
    title: 'Qualidade',
    text: 'Produtos selecionados com rigor para garantir durabilidade e desempenho.',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up w-8 h-8 text-[rgb(231,195,37)]',
    bgClass: 'bg-[rgb(231,195,37)]/10',
    borderClass: 'border-[rgb(231,195,37)]',
    title: 'Inovação',
    text: 'Sempre em evolução, buscando as melhores soluções para nossos clientes.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users w-8 h-8 text-[rgb(187,133,19)]',
    bgClass: 'bg-[rgb(187,133,19)]/10',
    borderClass: 'border-[rgb(187,133,19)]',
    title: 'Atendimento',
    text: 'Rápido, eficaz e personalizado para atender suas necessidades específicas.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-[rgb(231,195,37)] uppercase tracking-wide mb-2">Sobre Nós</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[rgb(12,27,76)] leading-tight">Sua Revenda de Confiança em Recife</h3>
            </div>
            <div className="h-1 w-20 bg-[rgb(231,195,37)]"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos uma <strong>revenda especializada</strong> em acessórios para esquadrias de alumínio e ferragens para vidros, oferecendo produtos de <strong>qualidade excepcional</strong> com preços competitivos na região metropolitana de Recife.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com <strong>4 anos de atuação no mercado</strong>, construímos nossa reputação com base em <strong>atendimento rápido e eficaz</strong>, oferecendo tudo que você precisa em um só lugar: fechaduras para porta e portão, dobradiças, ferrolhos, parafusos, roldanas e muito mais.
            </p>
            <div className="bg-[rgb(12,27,76)] text-white p-6 rounded-lg">
              <p className="text-lg italic">"Nossa missão é fornecer produtos de qualidade superior com atendimento que supera as expectativas, inovando a cada dia para melhor servir nossos clientes."</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${card.borderClass}`}
                >
                  <div className={`w-14 h-14 ${card.bgClass} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={card.iconClass} />
                  </div>
                  <h4 className="text-xl font-bold text-[rgb(12,27,76)] mb-2">{card.title}</h4>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

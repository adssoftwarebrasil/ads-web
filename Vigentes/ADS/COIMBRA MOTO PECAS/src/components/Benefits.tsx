import {
  CircleDollarSign,
  Wrench,
  Gift,
  Clock,
  ThumbsUp,
  Headphones,
} from 'lucide-react';

const benefits = [
  {
    icon: CircleDollarSign,
    title: 'Melhores Preços da Região',
    text: 'Preços justos e competitivos sem comprometer a qualidade. Compare e comprove!',
  },
  {
    icon: Wrench,
    title: 'Instalação Gratuita de Pneus',
    text: 'Comprou pneu conosco? A instalação é totalmente grátis, sem custos adicionais!',
  },
  {
    icon: Gift,
    title: 'Sorteio de Moto Honda Pop 100',
    text: 'Ao comprar pneus, você ganha cupons para concorrer a uma moto nova!',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    text: 'Equipe experiente e atendimento rápido para você voltar à estrada o quanto antes',
  },
  {
    icon: ThumbsUp,
    title: 'Produtos de Qualidade',
    text: 'Trabalhamos apenas com produtos originais e de marcas reconhecidas no mercado',
  },
  {
    icon: Headphones,
    title: 'Atendimento Diferenciado',
    text: 'Suporte técnico especializado para tirar todas as suas dúvidas e orientar a melhor escolha',
  },
];

const workshopItems = [
  'Instalação gratuita de pneus',
  'Mecânicos experientes e qualificados',
  'Serviço rápido e de qualidade',
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-br from-[rgb(246,252,255)] to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(2,73,137)] mb-4">
              Por Que Escolher a Coimbra?
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,236,2)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubra as vantagens exclusivas que só a Coimbra Moto Peças oferece
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[rgb(255,236,2)]"
              >
                <div className="bg-gradient-to-br from-[rgb(2,73,137)] to-[rgb(1,58,109)] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <b.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(2,73,137)] mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/bandeira-pneu-oficina.webp"
                  alt="Oficina de pneus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(2,73,137)]/90 to-transparent"></div>
              </div>
              <div className="bg-[rgb(2,73,137)] p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Oficina Nota 1000!
                </h3>
                <p className="text-lg text-[rgb(246,252,255)] mb-6 leading-relaxed">
                  Nossa oficina é equipada para realizar serviços com excelência.
                  Instalação de pneus, manutenção preventiva e muito mais!
                </p>
                <ul className="space-y-4 mb-8">
                  {workshopItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center space-x-3 text-white"
                    >
                      <div className="w-2 h-2 bg-[rgb(255,236,2)] rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="http://wa.me/559591557077?text=Olá! Gostaria de agendar um serviço na oficina."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[rgb(255,236,2)] text-[rgb(2,73,137)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(255,246,102)] transition-all duration-300 shadow-lg text-center"
                >
                  Agende Seu Serviço
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

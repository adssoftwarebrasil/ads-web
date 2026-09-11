import { Target, Eye, Heart } from 'lucide-react';

const cards = [
  {
    Icon: Target,
    iconClass: 'lucide lucide-target text-white',
    title: 'Missão',
    text: 'Prover soluções completas e especializadas para o setor de autopeças, garantindo que cada caminhão permaneça rodando com máxima segurança e eficiência, através de um atendimento técnico de excelência e entrega rápida e precisa.',
  },
  {
    Icon: Eye,
    iconClass: 'lucide lucide-eye text-white',
    title: 'Visão',
    text: 'Ser reconhecida, em Medianeira e toda a região, como a autopeças referência no segmento para caminhões de todas as marcas, destacando-se pela competência de nossos colaboradores e pela abrangência e qualidade de nosso estoque.',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart text-white',
    title: 'Valores',
    text: 'Especialização técnica, compromisso de agilidade logística para minimizar o tempo de caminhão parado, abrangência total de estoque, tradição e confiança construídas em três décadas, e foco absoluto no sucesso do cliente.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[rgb(237,23,21)]/10 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/auto%20pecas%20diniz%2Fimg%2Floja-auto-pecas-frente.webp"
                alt="Loja Auto Peças Diniz"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <div className="inline-block mb-4">
              <span className="text-[rgb(237,23,21)] font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mais de <span className="text-[rgb(237,23,21)]">34 Anos</span>{' '}
              Atendendo Medianeira e Região
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                A <strong>Auto Peças Diniz</strong> está desde{' '}
                <strong>1991</strong> servindo clientes em Medianeira e toda a
                região Oeste do Paraná. Fundada por Edsom Luiz Diniz, nossa
                empresa construiu uma sólida reputação baseada na transparência,
                agilidade e expertise acumulada ao longo de mais de três
                décadas.
              </p>
              <p>
                Oferecemos atendimento otimizado e personalizado, combinando o
                conhecimento profundo do mercado de autopeças para caminhões com
                um compromisso inabalável com a satisfação do cliente. Nossa
                equipe de vendedores especialistas está sempre pronta para
                encontrar a peça exata que você precisa.
              </p>
              <p className="text-[rgb(237,23,21)] font-semibold">
                Seja para motor, freios, suspensão ou qualquer componente da
                linha diesel, garantimos soluções completas para manter seu
                caminhão rodando com máxima segurança e eficiência.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-[rgb(237,23,21)] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <card.Icon className={card.iconClass} width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

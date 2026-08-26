import { CheckCircle2, Store, Users, Trophy } from 'lucide-react';

const features = [
  { title: 'Qualidade Garantida', text: 'Produtos originais e certificados' },
  { title: 'Preços Justos', text: 'Melhores preços da região' },
  { title: 'Atendimento Rápido', text: 'Equipe especializada' },
  { title: 'Grande Estoque', text: 'Variedade e disponibilidade' },
];

const cards = [
  {
    icon: Store,
    title: 'Estrutura Completa',
    text: 'Loja ampla com estoque diversificado e oficina equipada para atender todas as suas necessidades',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    text: 'Profissionais experientes prontos para oferecer o melhor atendimento e orientação técnica',
  },
  {
    icon: Trophy,
    title: 'Reconhecimento',
    text: 'Empresa consolidada e reconhecida pela qualidade e confiabilidade em toda Roraima',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[rgb(246,252,255)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(2,73,137)] mb-4">
              Sobre a Coimbra Moto Peças
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,236,2)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Uma história de confiança, qualidade e dedicação ao motociclista
              roraimense
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/loja-moto-pecas-frente.webp"
                  alt="Fachada Coimbra Moto Peças"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[rgb(255,236,2)] rounded-xl p-6 shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[rgb(2,73,137)]">
                    10+
                  </div>
                  <div className="text-sm font-semibold text-[rgb(2,73,137)]">
                    Anos no Mercado
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[rgb(2,73,137)] mb-4">
                Tradição e Excelência em Moto Peças
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos uma <strong>empresa roraimense</strong> com mais de{' '}
                <strong>10 anos no mercado</strong>, construindo nossa reputação
                através do fornecimento dos melhores produtos com preços
                acessíveis e um atendimento verdadeiramente diferenciado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Especializados no ramo de{' '}
                <strong>venda de peças para motocicletas</strong>, oferecemos
                tudo o que você precisa para manter sua moto sempre em perfeito
                estado, desde óleo e filtros até carenagens e componentes
                elétricos.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[rgb(2,73,137)] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[rgb(2,73,137)]">
                        {f.title}
                      </h4>
                      <p className="text-sm text-gray-600">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-[rgb(2,73,137)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(2,73,137)] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

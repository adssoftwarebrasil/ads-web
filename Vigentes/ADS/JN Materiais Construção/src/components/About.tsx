import { Shield, Truck, ThumbsUp, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com marcas reconhecidas e produtos de alta qualidade para garantir a durabilidade e excelência em cada item.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    text: 'Sistema de entrega eficiente para você receber seus materiais no prazo certo, sem comprometer o andamento da sua obra.',
  },
  {
    icon: ThumbsUp,
    title: 'Melhor Custo-Benefício',
    text: 'Preços competitivos sem abrir mão da qualidade. Oferecemos o melhor investimento para o seu projeto de construção ou reforma.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Personalizado',
    text: 'Nossa equipe especializada está pronta para orientar você na escolha dos produtos ideais para cada necessidade do seu projeto.',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Nossa História
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(34,39,69)] leading-tight">
              Construindo Sonhos Desde 2009
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Com mais de{' '}
                <span className="font-bold text-[rgb(44,58,128)]">
                  15 anos de experiência
                </span>
                , a J N Materiais de Construção é referência em qualidade e
                confiabilidade no mercado de materiais de construção.
              </p>
              <p>
                Oferecemos uma linha completa de produtos para construção e
                reforma: cerâmicas, fechaduras, acabamentos, louças, materiais
                elétricos, encanamentos, hidráulica, tomadas e muito mais.
              </p>
              <p>
                Nossa missão é proporcionar aos nossos clientes{' '}
                <span className="font-bold text-[rgb(216,27,27)]">
                  produtos de qualidade superior
                </span>{' '}
                aliados a um atendimento diferenciado, garantindo que cada
                projeto seja realizado com excelência.
              </p>
              <p className="italic border-l-4 border-[rgb(216,27,27)] pl-4 bg-gray-50 py-3">
                "Desde 2009 oferecendo qualidade para nossos clientes,
                trabalhamos em loja física, fazemos entrega e temos tudo em
                acabamentos e cerâmicas, sempre buscando o melhor para nossos
                consumidores."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-prateleira-loja.webp"
                alt="Loja J N Materiais"
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/expositor-cubas-banheiro.webp"
                alt="Produtos de qualidade"
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(216,27,27)] text-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Anos no Mercado</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[rgb(44,58,128)] to-[rgb(34,39,69)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <f.icon className="text-white" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-[rgb(34,39,69)] mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

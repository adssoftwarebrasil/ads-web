import {
  Bed,
  Sofa,
  Home,
  CircleDot,
  Package,
  Award,
  Table,
  Armchair,
  LucideIcon,
} from 'lucide-react';

interface Product {
  icon: LucideIcon;
  iconGradient: string;
  title: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: Bed,
    iconGradient: 'from-[#004A69] to-[#003D5C]',
    title: 'Colchões',
    description:
      'Espumas especiais, molas ensacadas e viscoelástico para o sono perfeito.',
    features: ['Todos os tamanhos', 'Anti-ácaros', 'Até 10 anos garantia', 'Entrega imediata'],
  },
  {
    icon: Sofa,
    iconGradient: 'from-[#D1AD6E] to-[#C19B5E]',
    title: 'Sofás',
    description:
      'Reclináveis, retráteis e modulares com designs modernos e conforto premium.',
    features: ['2 e 3 lugares', 'Tecidos nobres', 'Mecanismos importados', 'Garantia estendida'],
  },
  {
    icon: Home,
    iconGradient: 'from-[#004A69] to-[#005A79]',
    title: 'Cabeceiras',
    description:
      'Acabamento sofisticado e designs exclusivos para complementar seu quarto.',
    features: ['Diversos modelos', 'Sob medida', 'Tecidos premium', 'Instalação incluída'],
  },
  {
    icon: CircleDot,
    iconGradient: 'from-[#C19B5E] to-[#B38B4E]',
    title: 'Travesseiros',
    description:
      'Conforto ergonômico e materiais de alta qualidade para seu descanso.',
    features: ['Viscoelástico', 'Espuma NASA', 'Anti-alérgicos', 'Vários tamanhos'],
  },
  {
    icon: Package,
    iconGradient: 'from-[#003D5C] to-[#002D4C]',
    title: 'Protetores',
    description:
      'Proteção completa para seu colchão com materiais impermeáveis e respiráveis.',
    features: ['Impermeáveis', 'Respiráveis', 'Anti-ácaros', 'Fácil higienização'],
  },
  {
    icon: Award,
    iconGradient: 'from-[#D1AD6E] to-[#A08A5E]',
    title: 'Roupas de Cama',
    description:
      'Lençóis, edredons e jogos completos com tecidos macios e duráveis.',
    features: ['100% algodão', 'Alta durabilidade', 'Cores variadas', 'Kits completos'],
  },
  {
    icon: Table,
    iconGradient: 'from-[#005A79] to-[#004A69]',
    title: 'Tapetes & Mesas',
    description:
      'Complementos perfeitos para decorar sua sala com estilo e funcionalidade.',
    features: ['Diversos estilos', 'Alta qualidade', 'Preços especiais', 'Pronta entrega'],
  },
  {
    icon: Armchair,
    iconGradient: 'from-[#B38B4E] to-[#D1AD6E]',
    title: 'Poltronas',
    description:
      'Seu cantinho especial de relaxamento com ergonomia e estilo em cada detalhe.',
    features: ['Reclináveis', 'Design exclusivo', 'Múltiplos tecidos', 'Massageadoras'],
  },
];

const reasons = [
  { num: '1', title: 'Qualidade Garantida', text: 'Produtos certificados com garantia estendida' },
  { num: '2', title: 'Melhor Preço', text: 'Condições especiais e descontos exclusivos' },
  { num: '3', title: 'Entrega Rápida', text: 'Pronta entrega para Marabá e região' },
  { num: '4', title: 'Atendimento Premium', text: 'Equipe especializada para te atender' },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D1AD6E] to-transparent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004A69] mb-4">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tudo para quarto e sala com qualidade e conforto que você merece
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 md:mb-16">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-[#D1AD6E]"
              >
                <div
                  className={`bg-gradient-to-br ${product.iconGradient} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#004A69] mb-3 sm:mb-4 group-hover:text-[#D1AD6E] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-5 sm:mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-xs sm:text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-[#D1AD6E] rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-[#004A69] to-[#003D5C] text-white py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:from-[#D1AD6E] hover:to-[#C19B5E] transition-all duration-300 transform group-hover:scale-105">
                  Consultar Preços
                </button>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-[#004A69] via-[#003D5C] to-[#004A69] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Condições Especiais de Pagamento
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Parcelamento em até 12x sem juros e descontos especiais à vista
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/559431986888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#D1AD6E] text-[#004A69] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicite um Orçamento
              </a>
              <a
                href="https://wa.me/559431986888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-[#004A69] transition-all duration-300 transform hover:scale-105"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border-2 border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#004A69] mb-6 sm:mb-8 text-center">
            Por que escolher a Anjos Colchões?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reasons.map((reason) => (
              <div key={reason.num} className="text-center">
                <div className="bg-gradient-to-br from-[#D1AD6E] to-[#C19B5E] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    {reason.num}
                  </span>
                </div>
                <h4 className="font-bold text-[#004A69] mb-2 text-base sm:text-lg">
                  {reason.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  CheckCircle2,
  Star,
  DollarSign,
  Handshake,
  LucideIcon,
} from 'lucide-react';

interface Highlight {
  Icon: LucideIcon;
  iconClass: string;
  bg: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    Icon: CheckCircle2,
    iconClass: 'lucide lucide-check-circle2 text-white',
    bg: 'from-green-500 to-green-600',
    title: 'Crescimento Sólido',
    description: 'Expandindo continuamente para melhor atender você',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star text-white',
    bg: 'from-blue-500 to-blue-600',
    title: 'Referência Regional',
    description: 'Confiança de centenas de clientes no DF e Entorno',
  },
];

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const features: Feature[] = [
  {
    Icon: CheckCircle2,
    iconClass: 'lucide lucide-check-circle2 text-white sm:w-7 sm:h-7',
    title: 'Material de Qualidade',
    description: 'Produtos selecionados e testados',
    delay: '300ms',
  },
  {
    Icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign text-white sm:w-7 sm:h-7',
    title: 'Preço Justo',
    description: 'Melhor custo-benefício do mercado',
    delay: '400ms',
  },
  {
    Icon: Handshake,
    iconClass: 'lucide lucide-handshake text-white sm:w-7 sm:h-7',
    title: 'Comprometimento',
    description: 'Parceria de longo prazo',
    delay: '500ms',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star text-white sm:w-7 sm:h-7',
    title: 'Galpões Sob Medida',
    description: 'Construção e execução completa',
    delay: '600ms',
  },
];

const GALPAO_1 =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=2tj%2Fgalpao_1.jpg&version_id=null';
const GALPAO_2 =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=2tj%2Fgalpao_2.jpg&version_id=null';

export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-[rgb(250,250,250)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="transition-all duration-1000 transform opacity-100 translate-x-0">
            <div className="inline-block bg-[rgb(238,115,62)] text-white px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 shadow-lg text-sm sm:text-base">
              🏆 3 anos no mercado
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(42,38,43)] mb-6">
              Por que escolher a 2TJ?
            </h2>
            <p className="text-base sm:text-lg text-[rgb(42,38,43)] leading-relaxed mb-8">
              Iniciamos nossa jornada há 3 anos com o objetivo de oferecer
              produtos de qualidade no mercado de telhas e telas. Hoje estamos
              construindo nossa sede própria e nos tornando referência no
              Distrito Federal.
            </p>
            <div className="space-y-4">
              {highlights.map(({ Icon, iconClass, bg, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon width={24} height={24} strokeWidth={2} className={iconClass} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(42,38,43)] mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="transition-all duration-1000 transform opacity-100 translate-x-0"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map(({ Icon, iconClass, title, description, delay }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 opacity-100 translate-y-0"
                  style={{ transitionDelay: delay }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgb(238,115,62)] to-orange-600 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <Icon width={24} height={24} strokeWidth={2} className={iconClass} />
                  </div>
                  <h4 className="font-bold text-[rgb(42,38,43)] mb-2 text-base sm:text-lg">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-12 sm:mt-16 transition-all duration-1000 transform opacity-100 translate-y-0"
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-gradient-to-r from-[rgb(238,115,62)] to-orange-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl sm:text-5xl font-bold">🏗️</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Construção de Galpões Sob Demanda
              </h3>
              <p className="text-white text-opacity-95 text-base sm:text-lg max-w-3xl mx-auto">
                Nossa própria sede é um exemplo do serviço completo de entrega e
                execução que prestamos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <img
                src={GALPAO_1}
                alt="Galpão 2TJ - Vista Externa"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={GALPAO_2}
                alt="Galpão 2TJ - Vista Interna"
                className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-6 sm:mt-8 pt-6 border-t border-white border-opacity-30">
              <p className="text-white text-opacity-95 text-base sm:text-lg text-center font-semibold">
                💼 Prestamos serviço completo de galpões sob medida para sua
                empresa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

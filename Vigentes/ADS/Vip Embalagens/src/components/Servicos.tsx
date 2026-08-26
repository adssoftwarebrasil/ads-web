import {
  ShoppingBag,
  Tag,
  Sticker,
  FileText,
  Palette,
  type LucideIcon,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/556294205040';

interface Servico {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const servicos: Servico[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-moda-feminina.webp',
    icon: ShoppingBag,
    title: 'Sacolas de Papel Personalizadas',
    description:
      'Sacolas elegantes e resistentes, personalizadas com sua marca. Perfeitas para lojas de moda, joalherias e boutiques.',
    features: ['Diversos tamanhos', 'Acabamento premium', 'Alças reforçadas'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-plastica-personalizada.webp',
    icon: ShoppingBag,
    title: 'Sacolas Plásticas Personalizadas',
    description:
      'Sacolas plásticas de alta qualidade com impressão personalizada. Ideais para varejo e e-commerce.',
    features: [
      'Material resistente',
      'Impressão de alta qualidade',
      'Diversos modelos',
    ],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/brincos-flores-folhas.webp',
    icon: Tag,
    title: 'Tags para Roupas e Joias',
    description:
      'Tags personalizadas que agregam valor ao seu produto. Desenvolvidas especialmente para moda e joalheria.',
    features: ['Design exclusivo', 'Papéis especiais', 'Acabamento diferenciado'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/cartoes-holograficos-mao.webp',
    icon: Sticker,
    title: 'Adesivos Personalizados',
    description:
      'Adesivos de alta qualidade para produtos, embalagens e branding. Material resistente e cores vibrantes.',
    features: ['Diversos formatos', 'Material durável', 'Cores vivas'],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/papel-presente-logotipo.webp',
    icon: FileText,
    title: 'Papel de Seda Personalizado',
    description:
      'Papel de seda com impressão exclusiva para embalagens sofisticadas. Deixe suas entregas ainda mais especiais.',
    features: [
      'Impressão personalizada',
      'Alta qualidade',
      'Cores personalizadas',
    ],
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vip%20color/img/cartoes-roxos-acessorios.webp',
    icon: Palette,
    title: 'Identidade Visual Completa',
    description:
      'Criação de logotipo e toda identidade visual da sua marca. Do conceito à aplicação em todos os materiais.',
    features: ['Design profissional', 'Manual de marca', 'Aplicações diversas'],
  },
];

export default function Servicos() {
  return (
    <section
      id="produtos"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(229,198,99)] font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <div className="h-1 w-20 bg-[rgb(229,198,99)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(3,101,84)] mb-6">
            Soluções Completas em Embalagens
          </h2>
          <p className="text-lg text-gray-700">
            Da criação da identidade visual às embalagens personalizadas,
            oferecemos tudo que sua marca precisa para se destacar no mercado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={servico.image}
                    alt={servico.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[rgb(3,101,84)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(3,101,84)]">
                    {servico.title}
                  </h3>
                  <p className="text-gray-600">{servico.description}</p>
                  <ul className="space-y-2">
                    {servico.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-[rgb(229,198,99)] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[rgb(3,101,84)] text-white px-6 py-3 rounded-full hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

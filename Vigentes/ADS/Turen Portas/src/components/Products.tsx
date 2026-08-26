import { CheckCircle2 } from 'lucide-react';

interface Product {
  image: string;
  alt: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  features: string[];
  whatsapp: string;
}

const products: Product[] = [
  {
    image:
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portas WPC Premium',
    badge: 'Mais Vendida',
    badgeClass: 'bg-[#DE8F52] text-white',
    title: 'Portas WPC Premium',
    description:
      'Nossa linha principal: portas 100% WPC (Wood Plastic Composite) que não absorvem água, não empenam e não apodrecem. Ideais para qualquer ambiente da sua residência ou comercial.',
    features: [
      '100% impermeável',
      'Resistência a fungos e bactérias',
      'Acabamento liso premium',
      'Diversas opções de cores',
    ],
    whatsapp:
      'https://wa.me/556699118484?text=Olá!%20Tenho%20interesse%20em%20Portas%20WPC%20Premium.%20Gostaria%20de%20mais%20informações.',
  },
  {
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portas PVC Premium',
    badge: 'Alto Padrão',
    badgeClass: 'bg-[#005143] text-white',
    title: 'Portas PVC Premium',
    description:
      'Linha exclusiva em PVC de alta densidade para ambientes com alto índice de umidade. Design moderno e elegante que se adapta a projetos residenciais e comerciais sofisticados.',
    features: [
      'Alta resistência à umidade',
      'Leveza e fácil instalação',
      'Excelente isolamento térmico',
      'Design contemporâneo',
    ],
    whatsapp:
      'https://wa.me/556699118484?text=Olá!%20Tenho%20interesse%20em%20Portas%20PVC%20Premium.%20Gostaria%20de%20mais%20informações.',
  },
  {
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Linha Moderna Interior',
    badge: 'Exclusivo',
    badgeClass: 'bg-[#ECC4A4] !text-[#005143] text-white',
    title: 'Linha Moderna Interior',
    description:
      'Portas com design arquitetônico moderno, criadas para projetos que exigem sofisticação e personalidade. Ideais para salas, escritórios e dormitórios de alto padrão.',
    features: [
      'Design arquitetônico exclusivo',
      'Valorização estética',
      'Opções de tamanho personalizado',
      'Instalação profissional',
    ],
    whatsapp:
      'https://wa.me/556699118484?text=Olá!%20Tenho%20interesse%20em%20Linha%20Moderna%20Interior.%20Gostaria%20de%20mais%20informações.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Soluções em Portas para Todo Projeto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Do residencial ao comercial, temos a porta ideal para transformar cada ambiente com
            qualidade e elegância.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 group flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005143]/60 to-transparent"></div>
                <span
                  className={`absolute top-4 left-4 ${p.badgeClass} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                >
                  {p.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#005143] mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 width={16} height={16} className="text-[#DE8F52] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#005143] hover:bg-[#003d32] text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

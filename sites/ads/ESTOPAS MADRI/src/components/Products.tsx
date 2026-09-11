import { Package, Car, Droplets } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface ProductCategory {
  icon: LucideIcon;
  iconClass: string;
  color: string;
  title: string;
  description: string;
  items: string[];
  delay: number;
}

const categories: ProductCategory[] = [
  {
    icon: Package,
    iconClass: 'lucide lucide-package',
    color: 'rgb(233, 50, 53)',
    title: 'Estopas e Panos Técnicos',
    description:
      'Produtos de qualidade industrial para limpeza profissional, polimento e absorção.',
    items: [
      'Pano costurado',
      'Pano para polimento',
      'Pano para graxa',
      'Pano toalha',
      'Pano multiuso',
      'Pano microfibra',
    ],
    delay: 0,
  },
  {
    icon: Car,
    iconClass: 'lucide lucide-car',
    color: 'rgb(17, 17, 17)',
    title: 'Linha Automotiva',
    description:
      'Tudo que seu veículo precisa para brilhar: produtos profissionais de limpeza e conservação.',
    items: [
      'Intercap',
      'Solupan',
      'Shampoo automotivo',
      'Silicone',
      'Limpa pneu',
      'Cera para polimento',
      'Limpa vidros',
    ],
    delay: 150,
  },
  {
    icon: Droplets,
    iconClass: 'lucide lucide-droplets',
    color: 'rgb(233, 50, 53)',
    title: 'Higiene e Limpeza Geral',
    description: 'Linha completa de produtos para higiene e limpeza, do uso pessoal ao industrial.',
    items: ['Rodos e vassouras', 'Galão de combustível', 'Papel higiênico', 'Papel toalha'],
    delay: 300,
  },
];

function rgba(color: string, alpha: number) {
  return color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
}

export default function Products() {
  return (
    <section id="produtos" className="py-20 sm:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E93235]/10 text-[#E93235] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-5">
            Produtos para cada <span className="text-[#E93235]">necessidade</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Do pano de limpeza ao produto automotivo mais específico, temos tudo que profissionais e
            empresas precisam com qualidade garantida.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 opacity-100 translate-y-0"
                style={{ transitionDelay: `${cat.delay}ms`, transitionDuration: '600ms' }}
              >
                <div className="h-2 w-full" style={{ backgroundColor: cat.color }}></div>
                <div className="p-7">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: rgba(cat.color, 0.082) }}
                  >
                    <Icon
                      width={28}
                      height={28}
                      className={cat.iconClass}
                      style={{ color: cat.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: cat.color }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`http://wa.me/556599164429?text=Olá! Tenho interesse em ${cat.title}. Podem me enviar mais informações?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 w-full flex items-center justify-center gap-2 border-2 font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:text-white"
                    style={{ borderColor: cat.color, color: cat.color }}
                  >
                    Solicitar Cotação
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Não encontrou o que procura? Entre em contato!</p>
          <a
            href="http://wa.me/556599164429?text=Olá! Estou procurando um produto específico e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E93235] hover:bg-[#CC1F22] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#E93235]/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { Coffee, Package2, ShoppingBag, Utensils, Box, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  iconClass: string;
  image: string;
  title: string;
  text: string;
  href: string;
}

const products: Product[] = [
  {
    icon: Coffee,
    iconClass: 'lucide lucide-coffee text-white',
    image: 'https://storage.lucasmendes.dev/site-sp/lr%20personalizacoes%2Fimg%2Fcopos-plasticos-personalizados.webp',
    title: 'Copos Plásticos Personalizados',
    text: 'Copos descartáveis com a identidade da sua marca, perfeitos para eventos e delivery',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Copos%20Pl%C3%A1sticos%20Personalizados.',
  },
  {
    icon: Package2,
    iconClass: 'lucide lucide-package2 text-white',
    image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg',
    title: 'Embalagens para Delivery',
    text: 'Caixas, sacolas e embalagens que valorizam seu produto e fortalecem sua marca',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Embalagens%20para%20Delivery.',
  },
  {
    icon: ShoppingBag,
    iconClass: 'lucide lucide-shopping-bag text-white',
    image: 'https://storage.lucasmendes.dev/site-sp/lr%20personalizacoes%2Fimg%2Fsacolas-personalizadas.webp',
    title: 'Sacolas Personalizadas',
    text: 'Sacolas plásticas e de papel com impressão de alta qualidade',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Sacolas%20Personalizadas.',
  },
  {
    icon: Utensils,
    iconClass: 'lucide lucide-utensils text-white',
    image: 'https://storage.lucasmendes.dev/site-sp/lr%20personalizacoes%2Fimg%2Fguardanapo-e-acessorios.webp',
    title: 'Guardanapos e Acessórios',
    text: 'Guardanapos personalizados e utensílios para complementar seu negócio',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Guardanapos%20e%20Acess%C3%B3rios.',
  },
  {
    icon: Box,
    iconClass: 'lucide lucide-box text-white',
    image: 'https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg',
    title: 'Potes e Sanduicheiras',
    text: 'Potes térmicos e sanduicheiras personalizadas para alimentos',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Potes%20e%20Sanduicheiras.',
  },
  {
    icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-white',
    image: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg',
    title: 'Soluções Personalizadas',
    text: 'Desenvolvemos produtos sob medida para atender sua necessidade específica',
    href: 'https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Solu%C3%A7%C3%B5es%20Personalizadas.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(203,13,13)]/10 text-[rgb(203,13,13)] px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,33,78)] mb-6">Embalagens que Fazem a Diferença</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mix completo de produtos personalizados para valorizar sua marca e encantar seus clientes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,33,78)]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[rgb(203,13,13)] p-3 rounded-lg">
                      <Icon width={24} height={24} className={product.iconClass} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(0,33,78)] mb-3 group-hover:text-[rgb(203,13,13)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.text}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(203,13,13)] font-semibold hover:text-[rgb(180,11,11)] transition-colors group"
                  >
                    Solicitar Orçamento
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(0,33,78)] to-[rgb(0,50,120)] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Não Encontrou o Que Procura?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Trabalhamos com soluções personalizadas! Entre em contato e vamos criar juntos a embalagem perfeita para seu negócio.
          </p>
          <a
            href="https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20falar%20sobre%20uma%20solução%20personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(203,13,13)] text-white px-8 py-4 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105"
          >
            Fale com Nossos Especialistas
          </a>
        </div>
      </div>
    </section>
  );
}

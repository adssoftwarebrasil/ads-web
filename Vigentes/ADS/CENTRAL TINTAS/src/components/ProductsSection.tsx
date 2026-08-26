import { useEffect, useRef } from 'react';
import { Palette, Car, Gem, Wrench, MessageCircle, ArrowRight } from 'lucide-react';

const products = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fbaldes-tinta-empilhados.webp',
    icon: Palette,
    title: 'Tintas para Parede',
    description: 'Mais de 10 mil cores disponíveis. Marcas Sherwin-Williams e Lazzuril para transformar qualquer ambiente.',
    badge: null,
    whatsappMsg: 'Olá! Tenho interesse nas tintas para parede.'
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fgarrafas-coloridas-tintas-prateleira.webp',
    icon: Car,
    title: 'Tintas Automotivas',
    description: 'Colorista especializado: personalizamos tintas automotivas na cor exata que você precisa.',
    badge: 'Personalização Exclusiva',
    whatsappMsg: 'Olá! Gostaria de cotar tinta automotiva personalizada.'
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fprodutos-tintas-prateleira.webp',
    icon: Gem,
    title: 'Pedras e Estética',
    description: 'Pedras Naturais Roma e Anjo, além da linha completa de produtos Vonixx para estética automotiva.',
    badge: null,
    whatsappMsg: 'Olá! Queria saber mais sobre pedras naturais e produtos Vonixx.'
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fpistolas-pintura-banco.webp',
    icon: Wrench,
    title: 'Ferramentas Pro',
    description: 'Pistolas de pintura de alta precisão e ferramentas de qualidade para um acabamento perfeito.',
    badge: null,
    whatsappMsg: 'Olá! Estou buscando ferramentas profissionais de pintura.'
  }
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-[#ec3237] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Nossa Loja
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3f4196] mb-4">
            Produtos e Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Da construção à estética automotiva, temos a solução completa para o seu projeto com as melhores marcas do mercado.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-20 bg-[#ec3237] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg text-[#3f4196] group-hover:bg-[#3f4196] group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#3f4196] transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Botão de Ação */}
                  <a
                    href={`https://wa.me/5577999571092?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 text-gray-700 font-medium hover:bg-[#3f4196] hover:text-white transition-all duration-300 group/btn"
                  >
                    <MessageCircle size={18} />
                    <span>Tenho Interesse</span>
                    <ArrowRight size={16} className="opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
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
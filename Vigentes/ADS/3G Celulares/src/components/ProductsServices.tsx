import { Smartphone, RefreshCw, Wrench, Package, Shield, Monitor, Headphones, Watch, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProductCard {
  image: string;
  icon: any;
  title: string;
  description: string;
  badge?: string;
}

const products: ProductCard[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixas-smartphones-mesa.webp',
    icon: Smartphone,
    title: 'Celulares Novos',
    description: 'As últimas novidades das principais marcas com garantia e procedência',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fcaixas-celulares-samsung.webp',
    icon: RefreshCw,
    title: 'Celulares Seminovos',
    description: 'Aparelhos revisados com qualidade garantida e preços acessíveis',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fiphone16-azul.webp',
    icon: Wrench,
    title: 'Troca de Tela iPhone',
    description: 'Especialistas em reparo de iPhone com peças originais e garantia',
    badge: 'Especialidade',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fcarregadores-celulares-embalagens.webp',
    icon: Package,
    title: 'Acessórios Originais',
    description: 'Carregadores, fones, capinhas e tudo para seu smartphone',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fcapinhas-iphone-16.webp',
    icon: Shield,
    title: 'Capinhas de Proteção',
    description: 'Variedade de modelos e estilos para todos os aparelhos',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fpeliculas-protecao-iphone.webp',
    icon: Monitor,
    title: 'Películas Hidrogel',
    description: 'Proteção premium com aplicação profissional gratuita',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Ffones-ouvido-jbl.webp',
    icon: Headphones,
    title: 'Fones de Ouvido',
    description: 'Das melhores marcas para sua experiência sonora',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/3G%2Fsmartwatch-relogio-inteligente-rosa.webp',
    icon: Watch,
    title: 'Smartwatches',
    description: 'Tecnologia vestível para seu dia a dia',
  },
];

function ProductCard({ product, index }: { product: ProductCard; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {product.badge && (
        <div className="absolute top-4 right-4 bg-[#f7cb0c] text-[#172059] px-3 py-1 rounded-full text-sm font-bold z-10">
          {product.badge}
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="w-14 h-14 bg-[#00adec] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#81c227] transition-colors duration-300">
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="text-xl font-bold text-[#172059] mb-3">{product.title}</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}

export default function ProductsServices() {
  const [buttonVisible, setButtonVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setButtonVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#172059] mb-4">
            Nossos Produtos e Serviços
          </h2>
          <div className="w-24 h-1 bg-[#81c227] mx-auto mb-3"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de produtos e serviços com qualidade garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Botão Ver Mais Produtos */}
        <div 
          ref={buttonRef}
          className={`mt-12 lg:mt-16 text-center transition-all duration-700 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-[#f5f5f5] to-white rounded-2xl p-8 max-w-3xl mx-auto shadow-md">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#172059] mb-3">
              Temos Muito Mais!
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Esses são apenas alguns dos nossos produtos. Entre em contato e descubra toda nossa variedade de celulares, acessórios e serviços.
            </p>
            
            
              <a href="https://wa.me/5549999504348?text=Olá!%20Gostaria%20de%20conhecer%20mais%20produtos%20da%203G%20Celulares."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#81c227] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#6fa01f] transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Ver Mais Produtos
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </a>

            <p className="text-sm text-gray-500 mt-4">
              Resposta rápida via WhatsApp • Atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
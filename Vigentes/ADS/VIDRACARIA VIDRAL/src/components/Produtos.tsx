import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon, ChevronLeftSmall, ChevronRightSmall } from './icons';

interface Produto {
  image: string;
  title: string;
  description: string;
  dots: number;
  premium?: boolean;
  delay: string;
}

const produtos: Produto[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vidral%2FLinha%20Gold%20-%20esquadrias%2FWhatsApp%20Image%202025-11-18%20at%2009.15.44%20(3).jpeg',
    title: 'Linhas Gold/Suprema/30',
    description:
      'Esquadrias de alta durabilidade e acabamento premium. Perfis de 32mm (Gold) e 25mm (Suprema) para projetos exigentes que valorizam qualidade e resistência.',
    dots: 5,
    premium: true,
    delay: '0s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vidral%2FPaineis%20Ripados%2FWhatsApp%20Image%202025-11-18%20at%2009.15.40%20(4).jpeg',
    title: 'Painéis Ripados, Pergolados e Biombos',
    description:
      'Elementos decorativos modernos que valorizam ambientes internos e externos, criando espaços de convivência com estilo e funcionalidade.',
    dots: 4,
    delay: '0.1s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vidral%2FPortas%20e%20Janelas%2FWhatsApp%20Image%202025-11-18%20at%2009.15.41%20(6).jpeg',
    title: 'Portas e Janelas com Persianas Integradas',
    description:
      'Conforto e praticidade com integração de persianas, facilitando o controle de luz, temperatura e privacidade.',
    dots: 5,
    delay: '0.2s',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/vidral%2Fportao%2FPortao1.jpeg',
    title: 'Portões (Social e Elevadiço)',
    description:
      'Soluções robustas e seguras para entradas e acessos, com modelos adaptáveis às exigências de segurança e estética.',
    dots: 2,
    delay: '0.3s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vidral%2Ffachada%20de%20vidro%20e%20aluminio%2FWhatsApp%20Image%202025-11-18%20at%2009.15.48%20(1).jpeg',
    title: 'Fachadas de Vidro e Alumínio',
    description: 'Fachadas modernas de alto impacto visual para projetos arquitetônicos sofisticados.',
    dots: 3,
    delay: '0.4s',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/vidral%2FDiviso%CC%81rias%20e%20Brises%2F855541145461900.jpg',
    title: 'Divisórias e Brises',
    description:
      'Soluções de separação de ambientes e controle solar, adequadas para ambientes corporativos e residenciais.',
    dots: 3,
    delay: '0.5s',
  },
];

function ProductCard({ produto }: { produto: Produto }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#29456D] overflow-hidden ${
        inView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: produto.delay }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={produto.image}
          alt={produto.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#29456D] w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10"
          aria-label="Imagem anterior"
        >
          <ChevronLeftSmall className="w-5 h-5" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#29456D] w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10"
          aria-label="Próxima imagem"
        >
          <ChevronRightSmall className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {Array.from({ length: produto.dots }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 0 ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            ></button>
          ))}
        </div>
        {produto.premium && (
          <div className="absolute top-4 right-4 bg-white text-[#29456D] text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
            Premium
          </div>
        )}
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-[#29456D] mb-3 group-hover:text-[#1f3657] transition-colors leading-tight">
          {produto.title}
        </h3>
        <p className="text-[#666666] text-[15px] leading-relaxed">{produto.description}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-transparent via-[#29456D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
}

export default function Produtos() {
  const [activeTab, setActiveTab] = useState<'esquadrias' | 'vidros'>('esquadrias');

  return (
    <section id="produtos" className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#29456D] text-4xl lg:text-5xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-[#666666] text-lg lg:text-xl max-w-2xl mx-auto">
            Produtos de alto padrão para valorizar seu patrimônio
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('esquadrias')}
            className={`px-10 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
              activeTab === 'esquadrias'
                ? 'bg-[#29456D] text-white shadow-xl scale-105'
                : 'bg-white text-[#29456D] hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            Esquadrias
          </button>
          <button
            onClick={() => setActiveTab('vidros')}
            className={`px-10 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
              activeTab === 'vidros'
                ? 'bg-[#29456D] text-white shadow-xl scale-105'
                : 'bg-white text-[#29456D] hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            Vidros Temperados
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {produtos.map((produto) => (
            <ProductCard key={produto.title} produto={produto} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://wa.me/556596603393?text=Olá! Gostaria de saber mais sobre os produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#29456D] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#1f3657] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Solicite Mais Informações
          </a>
        </div>
      </div>
    </section>
  );
}

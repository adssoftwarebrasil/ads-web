import {
  Briefcase,
  Star,
  Calendar,
  Trophy,
  PartyPopper,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface Product {
  Icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

const products: Product[] = [
  { Icon: Briefcase, title: 'Camisetas Corporativas', desc: 'Uniformes personalizados para empresas', delay: 100 },
  { Icon: Star, title: 'Linha Premium', desc: 'Alta qualidade para eventos especiais', delay: 200 },
  { Icon: Calendar, title: 'Camisetas para Eventos', desc: 'Perfeitas para congressos e encontros', delay: 300 },
  { Icon: Trophy, title: 'Uniformes Esportivos', desc: 'Tecido respirável e durável', delay: 400 },
  { Icon: PartyPopper, title: 'Abadás Personalizados', desc: 'Para festivais e carnavais', delay: 500 },
  { Icon: ShieldCheck, title: 'Coletes de Identificação', desc: 'Segurança e visibilidade', delay: 600 },
];

const gallery = [
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-itau-laranja.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-itau-preta.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-pascom-preta.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2Fcamisa-record-azul.jpg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2FWhatsApp%20Image%202025-11-18%20at%2013.50.45.jpeg',
  'https://storage.lucasmendes.dev/site-sp/brasil-camisetas%2FWhatsApp%20Image%202025-11-18%20at%2013.50.41.jpeg',
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(0, 45, 100) 0%, rgb(6, 138, 80) 100%)' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-8"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 font-semibold text-sm"
            style={{
              backgroundColor: 'rgba(255, 241, 20, 0.2)',
              color: 'rgb(255, 241, 20)',
              border: '2px solid rgba(255, 241, 20, 0.4)',
            }}
          >
            ✨ Nossos Produtos
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">O Que Produzimos</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tecnologia de ponta e acabamento impecável em cada peça
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="animate-on-scroll opacity-0 group animate-fade-in-up"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(6, 138, 80, 0.1)' }}
                >
                  <Icon size={32} style={{ color: 'rgb(6, 138, 80)' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(0, 45, 100)' }}>
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
                <div
                  className="w-12 h-1 rounded-full mt-4 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'rgb(255, 241, 20)' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mb-16">
          <div className="h-px flex-1 bg-white/20 max-w-xs"></div>
          <span className="px-6 text-white/60 text-sm font-medium">Galeria de Produtos</span>
          <div className="h-px flex-1 bg-white/20 max-w-xs"></div>
        </div>
        <div className="animate-on-scroll opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
              >
                <img
                  src={src}
                  alt={`Produto Brasil Camisetas ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="text-white font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver Detalhes
                  </span>
                </div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgb(255, 241, 20)', color: 'rgb(0, 45, 100)' }}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="text-center mt-16 animate-on-scroll opacity-0 animate-fade-in-up"
          style={{ animationDelay: '800ms' }}
        >
          <div
            className="inline-block rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-white/20"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <p className="text-lg text-white/90 mb-4 max-w-2xl">
              Não encontrou exatamente o que procura?
            </p>
            <p className="text-2xl font-bold mb-6 text-white">
              Criamos produtos sob medida para você!
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgb(255, 241, 20)', color: 'rgb(0, 45, 100)' }}
            >
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

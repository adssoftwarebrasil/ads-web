import type { LucideIcon } from 'lucide-react';
import { ChevronLeft, ChevronRight, Bed, Shield, Bath, Blinds, Shirt, Sofa, Mountain, RectangleHorizontal } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

interface Product {
  name: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  count: number;
  ownProduction?: boolean;
}

const products: Product[] = [
  { name: 'Lençóis', description: 'Diversos tamanhos e estampas de alta qualidade', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Flenc%CC%A7ol%2F24cbaca7-0b15-48be-a1d8-b8c22c759485.jpeg', Icon: Bed, count: 2, ownProduction: true },
  { name: 'Cobre-leito', description: 'Proteção e beleza para sua cama', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fcobre-leito%2FWhatsApp%20Image%202025-11-05%20at%2017.10.57%20%281%29.jpeg', Icon: Shield, count: 8 },
  { name: 'Toalhas', description: 'Macias e absorventes para seu banho', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Ftoalhas%2FWhatsApp%20Image%202025-11-05%20at%2017.13.45%20%282%29.jpeg', Icon: Bath, count: 11 },
  { name: 'Cortinas', description: 'Privacidade com elegância e sofisticação', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fcortinas%2FWhatsApp%20Image%202025-11-05%20at%2017.12.33%20%281%29.jpeg', Icon: Blinds, count: 7 },
  { name: 'Mantas de Sofá', description: 'Aquecimento e conforto nas noites frias', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fmantadesofa%2FWhatsApp%20Image%202025-11-11%20at%2010.53.10.jpeg', Icon: Shirt, count: 4 },
  { name: 'Capas de Colchão', description: 'Proteção e higiene para seu colchão', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fcapadecolchao%2FWhatsApp%20Image%202025-11-05%20at%2017.15.31.jpeg', Icon: Shield, count: 6, ownProduction: true },
  { name: 'Capas de Sofá', description: 'Renove seu sofá com praticidade', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fcapadesofa%2Fcapa%20de%20sofa%202.jpeg', Icon: Sofa, count: 2, ownProduction: true },
  { name: 'Redes', description: 'Relaxamento e descanso garantidos', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Fredes%2FWhatsApp%20Image%202025-11-05%20at%2011.35.20%20%281%29.jpeg', Icon: Mountain, count: 6 },
  { name: 'Tapetes', description: 'Conforto e estilo para todos os ambientes', image: 'https://storage.lucasmendes.dev/site-sp/mn%2Ftapete%2FWhatsApp%20Image%202025-11-11%20at%2010.52.23%20%282%29.jpeg', Icon: RectangleHorizontal, count: 8 },
];

const ctaStats = [
  { value: '9', label: 'Categorias' },
  { value: '50+', label: 'Produtos' },
  { value: '100%', label: 'Qualidade' },
];

function ProductCard({ product }: { product: Product }) {
  const { name, description, image, Icon, count, ownProduction } = product;
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
      {ownProduction && (
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-gradient-to-r from-[rgb(155,39,40)] to-[rgb(120,30,31)] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="inline-block mr-1">✦</span> Fabricação Própria
          </span>
        </div>
      )}
      <div className="relative h-80 overflow-hidden">
        <img src={image} alt={`${name} - 1`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[rgb(155,39,40)] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 z-10" aria-label="Imagem anterior">
          <ChevronLeft size={20} strokeWidth={2.5} className="lucide lucide-chevron-left" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[rgb(155,39,40)] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 z-10" aria-label="Próxima imagem">
          <ChevronRight size={20} strokeWidth={2.5} className="lucide lucide-chevron-right" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {Array.from({ length: count }).map((_, i) => (
            <button key={i} className={`transition-all duration-300 rounded-full ${i === 0 ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/75'}`} aria-label={`Ir para imagem ${i + 1}`}></button>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">1/{count}</div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-[rgb(155,39,40)] via-[rgb(180,50,52)] to-[rgb(155,39,40)]"></div>
      <div className="p-8 lg:p-10 relative">
        <div className="relative mb-6 flex justify-center">
          <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center transform transition-all duration-700 shadow-lg scale-100 rotate-0" style={{ background: 'linear-gradient(135deg, rgba(155, 39, 40, 0.08) 0%, rgba(155, 39, 40, 0.12) 100%)' }}>
            <Icon size={32} className="transition-all duration-500 text-[rgb(155,39,40)]" />
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-center group-hover:text-[rgb(155,39,40)] transition-colors duration-300 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</h3>
        <p className="text-base text-gray-600 text-center leading-relaxed min-h-[3rem] font-normal mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{description}</p>
        <div className="h-1 rounded-full mx-auto transition-all duration-500 w-16 bg-[rgb(155,39,40)]"></div>
      </div>
      <div className="absolute inset-0 border-2 border-[rgb(155,39,40)] rounded-3xl transition-all duration-500 pointer-events-none opacity-0 scale-100"></div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgba(155,39,40,0.03)] rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(155, 39, 40) 1px, transparent 0px)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-block mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[rgb(155,39,40)] bg-[rgba(155,39,40,0.08)] px-6 py-3 rounded-full border border-[rgba(155,39,40,0.2)]" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>Catálogo Completo</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>Nossos Produtos</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[rgb(155,39,40)] to-transparent mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: '"Crimson Pro", serif' }}>Explore nossa linha completa de enxovais para cama, mesa e banho.<br /><span className="text-[rgb(155,39,40)] font-semibold">Qualidade excepcional</span> em cada produto.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="mt-20 lg:mt-24 bg-gradient-to-br from-[rgb(155,39,40)] via-[rgb(140,35,36)] to-[rgb(120,30,31)] rounded-[2rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>Gostou dos nossos produtos?</h3>
              <p className="text-white/95 text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: '"Crimson Pro", serif' }}>Entre em contato conosco para mais informações,<br className="hidden lg:block" />fazer pedidos ou tirar suas dúvidas!</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[rgb(155,39,40)] rounded-2xl font-bold hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <WhatsAppIcon className="w-6 h-6" />Fale Conosco no WhatsApp
                </a>
                <button onClick={() => scrollToSection('contact')} className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-[rgb(155,39,40)] hover:scale-105 transform transition-all duration-300 backdrop-blur-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ver Informações de Contato</button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {ctaStats.map((s) => (
                  <div key={s.label} className="text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl lg:text-5xl font-extrabold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.value}</div>
                    <div className="text-base lg:text-lg text-white/90 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Cog, Droplet, Fuel, Shovel, Wrench, Settings, 
  MessageCircle, ChevronLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';

// Sub-componente para gerenciar o estado do slide individualmente
const ProductCard = ({ product, whatsappNumber }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      
      {/* Área da Imagem (Carrossel) - Alterado para Aspect Square para suportar 1080x1080 */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {/* Imagem Atual - object-contain garante que a imagem apareça inteira */}
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.title} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradiente Overlay (sutil) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40"></div>

        {/* Botões de Navegação (Aparecem no Hover) */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.preventDefault(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#fbba00] shadow-sm z-10"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#fbba00] shadow-sm z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {product.images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'w-6 bg-[#fbba00]' : 'w-1.5 bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Ícone Badge */}
        <div className={`absolute top-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg text-gray-700`}>
           <product.icon size={24} className="text-[#fbba00]" />
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1a1a18] mb-4 group-hover:text-[#fbba00] transition-colors">
          {product.title}
        </h3>

        <ul className="space-y-3 mb-6 flex-grow">
          {product.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
              <CheckCircle2 size={16} className="text-gray-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${product.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#f0f2f5] hover:bg-[#25D366] text-[#1a1a18] hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 group/btn"
          >
            <MessageCircle size={20} className="text-[#25D366] group-hover/btn:text-white transition-colors" />
            <span>Solicitar Cotação</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const whatsappNumber = "5595984303773";

  const products = [
    {
      icon: Cog,
      title: 'Material Rodante',
      items: ['Esteiras', 'Roletes', 'Roda Guia', 'Segmento', 'Aro Motriz'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F26.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F27.png'
      ]
    },
    {
      icon: Droplet,
      title: 'Sistema Hidráulico',
      items: ['Bombas Hidráulicas', 'Motores de Giro', 'Comando Final', 'Cilindros'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F09.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F10.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F12.png'
      ]
    },
    {
      icon: Fuel,
      title: 'Motores e Filtros',
      items: ['Motores Cummins', 'Isuzu', 'Filtros de Ar', 'Óleo e Diesel'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F05.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F06.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F11.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F14.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F16.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F28.png'
      ]
    },
    {
      icon: Shovel,
      title: 'Caçambas e Desgaste',
      items: ['Dentes', 'Pontas', 'Adaptadores', 'Lâminas', 'Cortantes'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F01.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F02.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F03.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F04.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F31.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F33.png'
      ]
    },
    {
      icon: Wrench,
      title: 'Implementos',
      items: ['Buchas', 'Pinos', 'Mancais', 'Kits Completos'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F25.png'
      ]
    },
    {
      icon: Settings,
      title: 'Peças Especiais',
      items: ['Transmissão', 'Estrutura', 'Componentes Diversos'],
      images: [
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F13.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F15.png',
        'https://storage.lucasmendes.dev/site-sp/lyon-trator-pecas%2Fnova-imagens%2F18.png'
      ]
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#fbba00]/10 text-[#fbba00] font-semibold text-sm mb-4">
            CATÁLOGO COMPLETO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a18] mb-6">
            Soluções em Peças Pesadas
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Qualidade garantida e entrega ágil para manter sua frota em movimento. Selecione um produto abaixo para falar com um especialista.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              whatsappNumber={whatsappNumber} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
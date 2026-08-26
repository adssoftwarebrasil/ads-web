import { useState } from 'react';
import { Tag, ArrowRight, MessageCircle } from 'lucide-react';

const promotionImages = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Fpromocoes%2Fambiente%20Elizabeth%20Calacatta-Gold-ac-100x100cm_11zon.jpg',
    title: 'Calacatta Gold',
    brand: 'Elizabeth',
    discount: '30% OFF'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Fpromocoes%2Fambiente%20Elizabeth-alvorada-offwhite-esm-acet-100x100cm_11zon.jpg',
    title: 'Alvorada Off White',
    brand: 'Elizabeth',
    discount: '25% OFF'
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fnovas%2Fpromocoes%2Feliane-khali-off-white-ac-120x120cm_11zon.jpg',
    title: 'Khali Off White',
    brand: 'Eliane',
    discount: '20% OFF'
  },
];

export default function MonthlyPromotion() {
  const [isPaused, setIsPaused] = useState(false);
  const phoneNumber = '5581992928284';

  // 1. WhatsApp para um item específico (Card)
  const handleItemWhatsApp = (item: typeof promotionImages[0]) => {
    const message = `Olá! Vi a oferta do *${item.title}* (Marca: ${item.brand}) com *${item.discount}* no site e gostaria de garantir essa condição.`;
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  // 2. WhatsApp Geral (Botão Principal)
  const handleGeneralWhatsApp = () => {
    const message = `Olá! Vi as *Ofertas Especiais* no site e gostaria de solicitar o catálogo completo de promoções.`;
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements - Textura sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-500/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Oportunidade Única</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Seleção do Mês
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-light border-l-2 border-red-500 pl-4">
              Produtos exclusivos com descontos agressivos. <br className="hidden md:block"/>
              Clique nos itens ou no botão abaixo para falar conosco.
            </p>
          </div>

          {/* Botão Principal - Agora vai para o WhatsApp */}
          <button
            onClick={handleGeneralWhatsApp}
            className="group flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#25D366] hover:bg-[#1faa53] text-white font-bold rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 w-full md:w-auto mt-4 md:mt-0 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Catálogo Completo
          </button>
        </div>
      </div>

      {/* Carrossel Infinito */}
      <div className="relative z-20 py-4">
        <div
          className="flex gap-6 animate-scroll-left pl-4"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Loop Triplo para efeito infinito perfeito */}
          {[...promotionImages, ...promotionImages, ...promotionImages].map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              onClick={() => handleItemWhatsApp(item)}
              className="group relative flex-shrink-0 w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-gray-900 mx-2 hover:border-red-500/30 transition-colors duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>

              {/* Badge Desconto */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg border border-red-400/50">
                  {item.discount}
                </div>
              </div>

              {/* Botão Hover "Eu quero" */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/40 backdrop-blur-[2px]">
                <div className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-gray-100">
                  <MessageCircle size={18} className="text-green-600" />
                  Eu quero este!
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-2 py-1 bg-white/10 rounded text-gray-300 text-[10px] uppercase tracking-wider mb-2 backdrop-blur-md">
                  {item.brand}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight mb-2 drop-shadow-lg">{item.title}</h3>
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_red]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
import { Phone, MessageCircle, ChevronDown, Flame } from 'lucide-react';

const WA_LINK = 'http://wa.me/553184631447';
const PHONE = '(31) 3565-4833';

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/img/hero-background.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Atualizado: Mais claro no geral, focando o escuro apenas na esquerda onde fica o texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Flame size={12} />
            +8 Anos de Experiência em Soldagem
          </div>

          {/* Adicionado drop-shadow-lg para manter o contraste do texto branco contra o fundo mais claro */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 drop-shadow-lg">
            Tudo que você precisa para
            <span className="text-brand-red block mt-1 drop-shadow-md">soldar com qualidade</span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl drop-shadow-md">
            Máquinas de solda, EPIs, consumíveis e ferramentas para soldadores profissionais,
            serralherias e indústrias em Contagem, BH e região. Atendimento especializado
            e preços imbatíveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-red-600 text-white font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              <Phone size={20} />
              {PHONE}
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex flex-col drop-shadow-md">
              <span className="text-white font-bold text-2xl">+8</span>
              <span className="text-gray-300">Anos no mercado</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col drop-shadow-md">
              <span className="text-white font-bold text-2xl">4.7★</span>
              <span className="text-gray-300">Avaliação Google</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col drop-shadow-md">
              <span className="text-white font-bold text-2xl">100+</span>
              <span className="text-gray-300">Produtos em estoque</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce drop-shadow-md"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
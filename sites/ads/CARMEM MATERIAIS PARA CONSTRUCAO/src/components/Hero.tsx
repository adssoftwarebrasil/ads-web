import { ChevronDown } from 'lucide-react';
import { WHATSAPP_URL, WhatsAppIcon, StarIcon } from './icons';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao%2Fimg%2Fbackground-hero.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-block bg-[#2F44C8] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Desde 2009 em Santa Carmem/MT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Tudo para sua <span className="text-[#2F44C8]">construção</span>, em um só lugar.
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
            Do alicerce ao acabamento, a Carmem Materiais oferece mais de 16 anos de experiência, variedade completa de produtos e o atendimento de quem realmente entende da sua obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#2F44C8] hover:bg-white hover:text-[#2F44C8] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-lg shadow-blue-900/30">
              <WhatsAppIcon className="w-5 h-5 fill-current" />Falar com a Loja
            </a>
            <button onClick={() => scrollTo('produtos')} className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base">
              Ver Produtos
            </button>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((l) => (
                <div key={l} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2F44C8] to-[#29394C] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-white/70 text-sm">
                <strong className="text-white">4.7</strong> — Avaliado no Google
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scrollTo('sobre')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce" aria-label="Rolar para baixo">
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

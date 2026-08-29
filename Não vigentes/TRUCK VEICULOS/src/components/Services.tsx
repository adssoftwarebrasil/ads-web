import { ShoppingCart, TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicos" className="bg-[#010101] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block bg-[#af0201]/15 border border-[#af0201]/30 text-[#af0201] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#fefefe] leading-tight">
            Compra, Venda e Troca
            <br />
            <span className="text-[#af0201]">Tudo em um só lugar</span>
          </h2>
          <p className="mt-4 text-[#fefefe]/60 max-w-xl mx-auto text-base sm:text-lg">
            Na Truck Veículos, oferecemos soluções completas para quem precisa de
            veículos pesados e utilitários com agilidade e segurança.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="animate-on-scroll group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#af0201] border-[#af0201] hover:bg-[#600202]"
            style={{ transitionDelay: '0ms' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/20">
              <ShoppingCart width={22} height={22} className="text-[#fefefe]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fefefe]">Compra de Veículos</h3>
            <p className="text-sm leading-relaxed mb-6 text-white/80">
              Encontre o caminhão ou utilitário ideal para o seu negócio. Amplo
              estoque com as melhores marcas do mercado — Ford, Volkswagen,
              Mercedes-Benz e muito mais.
            </p>
            <a
              href="#estoque"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3 text-[#fefefe]"
            >
              Ver Estoque
              <ArrowRight width={16} height={16} />
            </a>
          </div>
          <div
            className="animate-on-scroll group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#fefefe]/04 border-white/10 hover:border-[#af0201]/40 hover:bg-white/[0.07]"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#af0201]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#af0201]/15 border border-[#af0201]/20">
              <TrendingUp width={22} height={22} className="text-[#af0201]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fefefe]">Venda Seu Veículo</h3>
            <p className="text-sm leading-relaxed mb-6 text-[#fefefe]/55">
              Quer vender seu caminhão ou carro? Faça uma avaliação gratuita com a
              nossa equipe e receba uma proposta justa e imediata.
            </p>
            <a
              href="http://wa.me/559292834895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3 text-[#af0201] hover:text-[#fefefe]"
            >
              Solicitar Avaliação
              <ArrowRight width={16} height={16} />
            </a>
          </div>
          <div
            className="animate-on-scroll group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#fefefe]/04 border-white/10 hover:border-[#af0201]/40 hover:bg-white/[0.07]"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#af0201]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#af0201]/15 border border-[#af0201]/20">
              <RefreshCw width={22} height={22} className="text-[#af0201]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fefefe]">Troca com Facilidade</h3>
            <p className="text-sm leading-relaxed mb-6 text-[#fefefe]/55">
              Troque seu veículo atual pelo modelo que você sempre quis. Processo
              simples, transparente e sem burocracia. Fale com nosso time agora.
            </p>
            <a
              href="http://wa.me/559292834895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3 text-[#af0201] hover:text-[#fefefe]"
            >
              Fazer uma Troca
              <ArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle, ChevronDown } from './icons';

const stats = [
  { value: '3+', label: 'Anos de Mercado' },
  { value: '30+', label: 'Tipos de Produtos' },
  { value: '6', label: 'Cidades Atendidas' },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Montante%20Drywall.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-[#EE1E23]/30"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EE1E23]"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#EE1E23]/20 border border-[#EE1E23]/40 text-[#EE1E23] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          Distribuidor em Jundiaí desde 2021
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Gesso e Drywall<span className="block text-[#EE1E23]">com o Melhor Preço</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
          Materiais de qualidade para gesseiros e construtores em Jundiaí e região. Atendimento
          especializado, entrega rápida e preços competitivos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5511933943710"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#EE1E23] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/40 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            Peça seu Orçamento
          </a>
          <a
            href="#produtos"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 border border-white/20 w-full sm:w-auto justify-center"
          >
            Ver Produtos
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[#EE1E23]">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

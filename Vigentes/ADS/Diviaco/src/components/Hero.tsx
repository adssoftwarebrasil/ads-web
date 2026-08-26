import { ArrowDown, MessageCircle } from 'lucide-react';

const HERO_BG =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2FWhisk_776bd40f205dc96a8cb4f9bd18fca0e6dr.jpeg&version_id=null';

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block bg-[#E76012]/20 border border-[#E76012]/40 text-[#E76012] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          Construção Civil &amp; Construção a Seco
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Soluções Completas em{' '}
          <span className="text-[#E76012]">Divisórias</span>{' '}
          e{' '}
          <span className="text-[#E76012]">Forros</span>
        </h1>

        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Materiais de alta qualidade para sua obra. Telhas sanduíche, drywall, PVC, gesso e muito mais — entregues com agilidade e expertise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/558432239388"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#E76012] hover:bg-[#c9520f] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-2xl shadow-orange-900/40 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento
          </a>
          <button
            onClick={scrollToProducts}
            className="flex items-center gap-3 border-2 border-white/30 hover:border-[#E76012] text-white hover:text-[#E76012] font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 w-full sm:w-auto justify-center backdrop-blur-sm hover:bg-[#E76012]/10"
          >
            Ver Produtos
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-14">
          {[
            { value: '12+', label: 'Produtos' },
            { value: '100%', label: 'Qualidade' },
            { value: '24h', label: 'Atendimento ágil' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#E76012]">{stat.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#E76012] transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}

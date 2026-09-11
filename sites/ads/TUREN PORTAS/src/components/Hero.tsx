import { Droplets, ShieldCheck, Star, ChevronDown } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/turen%20portas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#005143]/90 via-[#005143]/70 to-[#005143]/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#005143]/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#DE8F52] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              Pioneiros na Região Centro-Oeste
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Portas 100% WPC <span className="text-[#ECC4A4]">À Prova D'Água</span>
            <br />
            Para Ambientes de <span className="text-[#DE8F52]">Alto Padrão</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#ECC4A4]/90 mb-8 leading-relaxed max-w-2xl">
            Transforme o interior do seu imóvel com portas que unem sofisticação, durabilidade e
            tecnologia avançada. Líderes em Sinop e região desde 2020.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollTo('contato')}
              className="bg-[#DE8F52] hover:bg-[#c47a40] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg"
            >
              Solicitar Orçamento Grátis
            </button>
            <button
              onClick={() => scrollTo('produtos')}
              className="border-2 border-[#ECC4A4] text-[#ECC4A4] hover:bg-[#ECC4A4] hover:text-[#005143] px-8 py-4 rounded-full font-bold text-base transition-all duration-300"
            >
              Conhecer Produtos
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Droplets width={18} height={18} className="text-[#DE8F52]" />
              <span className="text-sm font-medium">100% à prova d'água</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck width={18} height={18} className="text-[#DE8F52]" />
              <span className="text-sm font-medium">Alta durabilidade</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Star width={18} height={18} className="text-[#DE8F52] fill-[#DE8F52]" />
              <span className="text-sm font-medium">Avaliação 5.0 no Google</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('beneficios')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#ECC4A4]/70 hover:text-[#ECC4A4] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}

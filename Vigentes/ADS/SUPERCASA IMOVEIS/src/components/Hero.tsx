import { ArrowRight, Search } from 'lucide-react';

const WHATSAPP =
  'https://api.whatsapp.com/send/?phone=556699231818&text&type=phone_number&app_absent=0';

const stats = [
  { value: '+20', label: 'Anos de Experiência' },
  { value: '+40', label: 'Cidades Atendidas' },
  { value: '100%', label: 'Transparência' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center animate-fade-in">
        <span className="inline-block text-[#d5a222] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium">
          Sinop — Mato Grosso
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] text-balance">
          O imóvel dos seus sonhos,
          <span className="block text-[#d5a222] mt-2">com a experiência que você merece.</span>
        </h1>
        <p className="mt-6 md:mt-8 text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
          Mais de 20 anos conectando pessoas aos melhores imóveis de médio e alto padrão em Sinop e
          região. Venda, locação, lançamentos e investimentos exclusivos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#d5a222] text-black px-8 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Falar com um corretor
            <ArrowRight size={18} />
          </a>
          <a
            href="https://supercasaimoveis.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            <Search size={18} />
            Ver catálogo completo
          </a>
        </div>
        <div className="mt-16 hidden md:grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl lg:text-4xl text-[#d5a222]">{s.value}</div>
              <div className="text-xs tracking-widest uppercase text-neutral-300 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#d5a222] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}

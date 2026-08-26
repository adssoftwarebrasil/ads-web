import { CalendarCheck, Star, Users, Phone } from 'lucide-react';

const WA_LINK = 'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const STATS = [
  { icon: Star, value: '+20', label: 'Anos de Experiência' },
  { icon: Users, value: '+3.000', label: 'Pacientes Atendidos' },
  { icon: CalendarCheck, value: '2005', label: 'Em Várzea Grande' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2e2b] via-[#1a4a46] to-[#217a74]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#32A19A]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-[#A9C5C3]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#32A19A]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#32A19A]/10" />
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-5"
          viewBox="0 0 400 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="300" cy="150" r="120" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="400" r="180" stroke="white" strokeWidth="1" />
          <circle cx="350" cy="650" r="100" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-[#A9C5C3] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9C5C3]" />
            CRO-MT 3988 — Implantodontia & Prótese
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-shadow-lg mb-5">
            Odontologia de
            <span className="block text-[#A9C5C3] italic">Qualidade ao Alcance</span>
            <span className="text-white">de Todos</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Implantes, próteses e estética dental com o cuidado e precisão que o seu sorriso merece.
            Mais de 20 anos transformando vidas em Várzea Grande — MT.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#32A19A] hover:bg-[#A9C5C3] hover:text-gray-900 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck size={20} />
              Agendar Avaliação Gratuita
            </a>
            <a
              href="tel:+556530263254"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300"
            >
              <Phone size={18} />
              (65) 3026-3254
            </a>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#A9C5C3]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Role para ver mais</span>
      </div>
    </section>
  );
}

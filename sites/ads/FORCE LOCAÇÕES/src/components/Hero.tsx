import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

const badges = ['50+ Equipamentos', 'Vistoria Grátis', 'Frota Própria'];

const stats = [
  { value: '50+', label: 'Equipamentos' },
  { value: '300t', label: 'Capacidade' },
  { value: '20+', label: 'Anos' },
  { value: '7d', label: 'Operação' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-force-blue via-force-dark-blue to-slate-900"
    >
      <div className="absolute inset-0 bg-[url('https://storage.lucasmendes.dev/site-sp/force%2Fcrane-lifting-heavy-load.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-2.5 h-2.5 bg-force-yellow rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">Operação 7 dias por semana</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Locação de Guindastes
              <br />
              <span className="text-force-yellow">em Belém-PA</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium">
              Frota completa de 30 a 300 toneladas com mais de 20 anos de experiência
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {badges.map((b) => (
              <div
                key={b}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-force-yellow flex-shrink-0" />
                <span className="text-sm font-medium text-white">{b}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#orcamento"
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-force-yellow text-force-dark-blue px-8 py-4 rounded-xl font-bold text-base hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span>Solicitar Orçamento Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5591985785150"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp: (91) 98578-5150</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-bold text-force-yellow mb-2">{s.value}</div>
                <div className="text-sm text-slate-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

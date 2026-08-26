import { Calendar, Phone } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-sm">Atendimento de Emergência 24h</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Seu Sorriso Merece o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Melhor Cuidado
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Mais de <span className="font-bold text-teal-600">30 anos</span> transformando
                sorrisos com excelência, tecnologia e atendimento humanizado.
              </p>
            </div>
            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-2xl my-6">
              <img
                src="https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Ffachadadeiniciohero.jpeg"
                alt="Clínica Menardi"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="group bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} className="lucide lucide-calendar " />
                Agendar Consulta
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button
                onClick={() => scrollToSection('emergencias')}
                className="group border-2 border-red-500 text-red-600 px-8 py-4 rounded-xl font-semibold text-base hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} className="lucide lucide-phone " />
                Emergência 24h
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-teal-600">30+</div>
                <div className="text-sm text-slate-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">15mil+</div>
                <div className="text-sm text-slate-600">Pacientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-slate-600">Emergências</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/agenciaeua/clinicamenardi%2Ffachadadeiniciohero.jpeg"
                alt="Clínica Menardi"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, ArrowRight, MapPin, GraduationCap, ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 lg:pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[rgb(30,60,140)] via-[rgb(40,100,180)] to-[rgb(30,60,140)]"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgb(62,215,252)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-[rgb(62,215,252)] text-sm font-semibold mb-2">
                <Award width={16} height={16} />
                <span>Consultoria de Alta Performance</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white tracking-tight">
                Transforme Resultados em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(62,215,252)] to-white">
                  Decisões Estratégicas
                </span>
              </h1>
              <p className="text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Consultoria especializada em gestão financeira e operacional para empresas que buscam o próximo nível.
                Atuando há 13 anos no mercado com profissionais mestres.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-150">
              <a
                href="http://wa.me/5516991931444"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[rgb(30,60,140)] rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Falar com Especialista
                <ArrowRight width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Conheça os Serviços
              </button>
            </div>
            <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 animate-in fade-in duration-1000 delay-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                  <Award width={20} height={20} className="text-[rgb(62,215,252)]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">13 Anos</p>
                  <p className="text-blue-200 text-xs">de Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                  <MapPin width={20} height={20} className="text-[rgb(62,215,252)]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Regional</p>
                  <p className="text-blue-200 text-xs">Ribeirão e Região</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                  <GraduationCap width={20} height={20} className="text-[rgb(62,215,252)]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Expertise</p>
                  <p className="text-blue-200 text-xs">Mestres e Pós-Graduados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 animate-in slide-in-from-right duration-700 delay-200">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative group hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500">
              <div className="h-2 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] w-full"></div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Diagnóstico Gratuito</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Preencha os dados abaixo e receba uma análise preliminar do seu negócio sem custo.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">
                      E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-gray-400 text-gray-800"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 ml-1 uppercase tracking-wide">Segmento</label>
                      <select
                        className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:border-[rgb(64,102,215)] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-600"
                        required
                        defaultValue=""
                      >
                        <option value="">Selecione...</option>
                        <option value="Indústria">Indústria</option>
                        <option value="Comércio">Comércio</option>
                        <option value="Serviços">Serviços</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)] text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    Solicitar Análise
                    <ChevronRight width={20} height={20} strokeWidth={3} />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Seus dados estão seguros. Responderemos em até 24h.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

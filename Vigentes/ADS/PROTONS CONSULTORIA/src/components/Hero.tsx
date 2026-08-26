import { ArrowRight, CheckCircle2, TrendingUp, Globe, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional business background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c5b]/95 via-[#3d3d7a]/90 to-[#2c2c5b]/95"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Especialistas em <span className="text-[#c9a962]">Lucro Real</span> e<br />
              Planejamento Tributário
            </h1>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Há mais de 14 anos transformando a gestão tributária de empresas em todo o Brasil.
              Reduza sua carga tributária de forma legal e segura.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://wa.me/5562998005803"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#4a90a4] hover:bg-[#3d8390] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Solicite uma Análise Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              Conheça Nossos Serviços
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-[#c9a962]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">+14 anos</div>
              <div className="text-white/80 text-sm">de mercado</div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-[#c9a962]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Nacional</div>
              <div className="text-white/80 text-sm">Atendimento em todo Brasil</div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#c9a962]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Lucro Real</div>
              <div className="text-white/80 text-sm">Especialização comprovada</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

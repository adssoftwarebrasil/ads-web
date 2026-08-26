import { ArrowRight, Star, Clock, Scale } from 'lucide-react';
import { scrollToSection } from '../useScrollReveal';

const patternBg =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eec45e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-red-dark/90 to-gray-900"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: patternBg }}></div>
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-left visible">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] gold-gradient"></div>
              <span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase">
                Desde 2015
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Advocacia com <span className="text-gold-gradient">Excelência</span> e Dedicação
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Transformamos conhecimento jurídico em soluções concretas para proteger seus direitos.
              Atendimento exclusivo e personalizado em Macapá e todo o Amapá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/559691327966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-white font-semibold rounded-lg shadow-lg shadow-brand-gold-dark/30 hover:shadow-xl hover:shadow-brand-gold-dark/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Agende sua Consulta
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Nossos Serviços
              </button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-right visible">
            <div className="relative">
              <div className="absolute -inset-4 gold-gradient rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/silvia%20moreira%2Fimg%2Fsilvia-moreira-foto.webp"
                  alt="Dra. Silvia Moreira"
                  className="w-full h-[540px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-800">5.0</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Avaliação no Google</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 animate-fade-up visible"
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-sm text-white/60">Anos de Experiência</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5.0</p>
              <p className="text-sm text-white/60">Avaliação Google</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-white/60">Comprometimento</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-white to-transparent"></div>
    </section>
  );
}

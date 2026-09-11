import { Sparkles, ArrowRight, Award, Package } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/556294205040';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[rgb(3,101,84)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-[rgb(229,198,99)]/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-[rgb(229,198,99)]" />
                <span className="text-sm font-semibold text-white">
                  15 Anos de Experiência
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Embalagens Personalizadas que{' '}
                <span className="text-[rgb(229,198,99)]">Valorizam sua Marca</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Transforme suas embalagens em experiências memoráveis. Da
                identidade visual às sacolas personalizadas, criamos cada detalhe
                com excelência e atenção especial para o seu negócio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[rgb(229,198,99)] text-[rgb(3,101,84)] px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:shadow-[rgb(229,198,99)]/20 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Solicitar Orçamento Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(3,101,84)] hover:border-white transition-all duration-300 font-semibold shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-[rgb(229,198,99)]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Anos no Mercado</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Package className="w-8 h-8 text-[rgb(229,198,99)]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  1000+
                </div>
                <div className="text-sm text-gray-300">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles className="w-8 h-8 text-[rgb(229,198,99)]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  100%
                </div>
                <div className="text-sm text-gray-300">Personalizado</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(229,198,99)]/30 to-white/10 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-branca-logo.webp"
                  alt="Sacola personalizada"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-preta-dourada.webp"
                  alt="Sacola premium"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-dourada-loja.webp"
                  alt="Sacola dourada"
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-roxa-coracao.webp"
                  alt="Embalagens personalizadas"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

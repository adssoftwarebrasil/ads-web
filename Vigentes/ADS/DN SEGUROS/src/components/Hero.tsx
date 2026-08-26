import { Shield, Star, ChevronDown } from 'lucide-react';

const quoteTypes = ['Automóvel', 'Vida', 'Residencial', 'Empresarial', 'Viagem'];
const avatars = ['A', 'B', 'C', 'D'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dn%20seguros/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/85 via-brand-blue/70 to-brand-blue-dark/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-28 pb-16 lg:py-0">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield size={16} className="lucide lucide-shield text-brand-red" />
              Grupo com mais de 35 anos de mercado
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Proteja o que<span className="block text-brand-red">mais importa</span>para você
            </h1>
            <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Cotações personalizadas para seguro de automóvel, vida, residencial, empresarial e viagem
              com o melhor custo-benefício.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-base px-8 py-4 rounded-xl">Solicitar Cotação Grátis</button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                Conhecer Coberturas
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {avatars.map((a) => (
                    <div
                      key={a}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-red to-brand-blue border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="lucide lucide-star text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs">+500 clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-5 max-w-sm">
                <h3 className="text-white font-bold text-xl">Cotação Rápida</h3>
                <p className="text-white/70 text-sm">Receba sua cotação em minutos direto no WhatsApp</p>
                <div className="grid grid-cols-2 gap-3">
                  {quoteTypes.map((type) => (
                    <div
                      key={type}
                      className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-3 text-center cursor-pointer transition-all duration-200"
                    >
                      <span className="text-white text-sm font-medium">{type}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary py-3 text-center rounded-xl">Cotar Agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce z-10">
        <ChevronDown size={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}

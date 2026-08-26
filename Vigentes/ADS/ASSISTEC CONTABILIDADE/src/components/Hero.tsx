import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const scrollToServicos = () => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/assistec%20contabilidade/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy/85 via-brand-burgundy/70 to-brand-burgundy-dark/90"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-brand-blue-light text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
              Escritório de Contabilidade em Primavera do Leste – MT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg mb-6">
              Sua Empresa em Dia, <span className="text-brand-blue-light">Seus Resultados</span> em Crescimento
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Há mais de 30 anos, a Assistec Contabilidade oferece assessoria contábil completa para empresas,
              produtores rurais e profissionais que buscam segurança fiscal, organização financeira e crescimento
              sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/5566999538963?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20contábeis."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:scale-105 text-base"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} strokeWidth={2} />
              </a>
              <button
                onClick={scrollToServicos}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 hover:bg-white/10 text-base"
              >
                Conheça nossos Serviços
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="lucide lucide-shield text-brand-blue-light" width={16} height={16} strokeWidth={2} />
                </div>
                <span className="text-white/80 text-sm font-medium">Mais de 30 Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock text-brand-blue-light" width={16} height={16} strokeWidth={2} />
                </div>
                <span className="text-white/80 text-sm font-medium">Atendimento Online em Todo o Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center flex-shrink-0">
                  <Award className="lucide lucide-award text-brand-blue-light" width={16} height={16} strokeWidth={2} />
                </div>
                <span className="text-white/80 text-sm font-medium">Nota 5.0 no Google</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue/20 rounded-3xl blur-2xl transform scale-105"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-sm">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/assistec%20contabilidade/img/logo-sem-fundo.webp"
                  alt="Assistec Contabilidade"
                  className="w-48 mx-auto mb-6 animate-float"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-brand-blue/30 rounded-xl flex items-center justify-center">
                      <Award className="lucide lucide-award text-brand-blue-light" width={20} height={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">5.0 ★★★★★</div>
                      <div className="text-white/60 text-xs">Avaliação no Google</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-brand-blue/30 rounded-xl flex items-center justify-center">
                      <Shield className="lucide lucide-shield text-brand-blue-light" width={20} height={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">+30 Anos</div>
                      <div className="text-white/60 text-xs">de experiência no mercado</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-brand-blue/30 rounded-xl flex items-center justify-center">
                      <Clock className="lucide lucide-clock text-brand-blue-light" width={20} height={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Atendimento Online</div>
                      <div className="text-white/60 text-xs">Para todo o Brasil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToServicos}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-200 group"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-widest uppercase">Saiba mais</span>
          <div className="w-6 h-10 border-2 border-white/30 group-hover:border-white/60 rounded-full flex justify-center pt-2 transition-colors duration-200">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
}

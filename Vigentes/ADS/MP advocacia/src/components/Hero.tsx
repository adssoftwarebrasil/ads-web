import { ArrowRight, Scale, Shield, Award } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/mp%20advocacia/img/hero-background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(3,74,41)]/95 via-[rgb(3,74,41)]/85 to-[rgb(46,81,35)]/75"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-[rgb(249,253,249)] space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="bg-[rgb(153,138,71)] text-[rgb(8,16,20)] px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                DESDE 2023 EM URUAÇU/GO
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Segurança Jurídica para Seu{' '}
              <span className="text-[rgb(153,138,71)]">Negócio</span> e Suas{' '}
              <span className="text-[rgb(153,138,71)]">Terras</span>
            </h1>
            <p className="text-lg sm:text-xl text-[rgb(249,253,249)]/90 leading-relaxed">
              Especialistas em Direito Ambiental, Tributário e Empresarial. Defendemos produtores
              rurais e empresários com soluções jurídicas estratégicas, técnicas e personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="group flex items-center justify-center space-x-2 bg-[rgb(153,138,71)] text-[rgb(8,16,20)] px-8 py-4 rounded-lg hover:bg-[rgb(146,118,47)] transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-[rgb(153,138,71)]/50 hover:scale-105"
              >
                <span>Fale com Especialista</span>
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="http://wa.me/556281931078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-[rgb(249,253,249)] text-[rgb(249,253,249)] px-8 py-4 rounded-lg hover:bg-[rgb(249,253,249)] hover:text-[rgb(3,74,41)] transition-all duration-300 font-bold text-lg"
              >
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgb(249,253,249)]/20">
              <div className="flex items-start space-x-3">
                <Scale className="lucide lucide-scale w-8 h-8 text-[rgb(153,138,71)] flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl text-[rgb(249,253,249)]">5.0</p>
                  <p className="text-sm text-[rgb(249,253,249)]/80">Avaliação Google</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="lucide lucide-shield w-8 h-8 text-[rgb(153,138,71)] flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl text-[rgb(249,253,249)]">100+</p>
                  <p className="text-sm text-[rgb(249,253,249)]/80">Casos Resolvidos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="lucide lucide-award w-8 h-8 text-[rgb(153,138,71)] flex-shrink-0" />
                <div>
                  <p className="font-bold text-2xl text-[rgb(249,253,249)]">3</p>
                  <p className="text-sm text-[rgb(249,253,249)]/80">Áreas Especializadas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mp%20advocacia/img/simbolo.webp"
              alt="Advocacia e Consultoria Jurídica"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(249,253,249)] to-transparent"></div>
    </section>
  );
}

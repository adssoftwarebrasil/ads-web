import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const BADGES = [
  'Entrega Rápida',
  'Alta Qualidade',
  'Atendimento Personalizado',
];

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/fergrafe/img/hero-background.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(53,80,155)]/90 via-[rgb(53,80,155)]/75 to-[rgb(0,180,215)]/70" />

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-[rgb(255,240,1)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <Star size={14} className="text-[rgb(255,240,1)] fill-[rgb(255,240,1)]" />
              <span className="text-white text-sm font-medium">+15 anos imprimindo qualidade em Aracaju</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Sua Marca{' '}
              <span className="text-[rgb(255,240,1)]">Impressa</span>{' '}
              com{' '}
              <span className="relative inline-block">
                <span className="text-[rgb(0,180,215)]">Excelência</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(0,180,215)] rounded-full opacity-60" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Da ideia ao produto final — banners, panfletos, fardamentos, brindes personalizados e muito mais.
              Qualidade profissional, agilidade na entrega e atendimento que faz a diferença.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2"
                >
                  <CheckCircle size={14} className="text-[rgb(122,200,160)]" />
                  <span className="text-white text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="http://wa.me/557988448494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(255,240,1)] text-[rgb(53,80,155)] font-bold px-8 py-4 rounded-full text-base hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-400/30"
              >
                Solicitar Orçamento Grátis
                <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/25 transition-all duration-200"
              >
                Falar com a Equipe
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-4">
            
            {/* IMAGEM DA FACHADA ADICIONADA AQUI */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 w-full max-w-md">
              <img
                src="https://storage.lucasmendes.dev/site-sp/fergrafe/img/fachada.webp"
                alt="Fachada Fer Grafe"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* AVALIAÇÕES (MANTIDAS) */}
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-6 py-4 w-full max-w-md flex items-center gap-4">
              <div className="flex -space-x-2">
                {['F', 'T', 'E'].map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white bg-[rgb(0,180,215)] flex items-center justify-center text-white font-bold text-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-[rgb(255,240,1)] fill-[rgb(255,240,1)]" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.8</span>
                </div>
                <p className="text-white/80 text-xs">+100 clientes satisfeitos em Sergipe</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L1440 60 L1440 20 Q720 80 0 20 Z" fill="rgb(252,254,255)" />
        </svg>
      </div>
    </section>
  );
}
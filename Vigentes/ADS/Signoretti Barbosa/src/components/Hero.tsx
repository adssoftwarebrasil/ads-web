import { Scale, ArrowRight, Shield } from 'lucide-react';
import { WHATSAPP_URL, scrollToId } from '../constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#10202F]/95 via-[#10202F]/85 to-[#10202F]/70"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#EB7104]/10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-[#EB7104]/8 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#EB7104]/15 border border-[#EB7104]/30 rounded-full px-4 py-1.5 mb-6">
              <Scale width={14} height={14} className="lucide lucide-scale text-[#EB7104]" />
              <span className="text-[#EB7104] text-xs font-semibold tracking-widest uppercase">
                Advocacia de Excelência
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Defendendo<br />
              <span className="text-[#EB7104]">seus direitos</span><br />
              com excelência
            </h1>
            <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Comprometidos com a advocacia ética, transparente e inovadora. Atendimento personalizado em Lucas do Rio Verde/MT e região.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#EB7104] hover:bg-[#d46303] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                Consulta Gratuita
                <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
              </a>
              <button
                onClick={() => scrollToId('areas')}
                className="flex items-center gap-2 border-2 border-white/30 hover:border-[#EB7104] text-white hover:text-[#EB7104] px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Áreas de Atuação
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#EB7104]">10+</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#EB7104]">500+</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#EB7104]">6</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">Áreas do Direito</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#EB7104]/20 blur-2xl scale-110"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-6 max-w-xs">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/signorettiebarbosa/si%CC%81mbolo.png"
                  alt="Símbolo Signoretti & Barbosa"
                  className="w-28 h-28 object-contain brightness-0 invert opacity-90"
                />
                <div className="text-center">
                  <p className="text-white font-semibold text-lg leading-snug">Signoretti &amp; Barbosa</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase mt-1">Sociedade de Advogados</p>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Shield width={14} height={14} className="lucide lucide-shield text-[#EB7104]" />
                  <span>Ética · Transparência · Inovação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}

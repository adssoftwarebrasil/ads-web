import { ArrowRight, MessageCircle, ShieldCheck, Scan, Wrench } from 'lucide-react';
import { ANOS_DE_TRADICAO, WHATSAPP_PADRAO } from '../lib/contato';

const destaques = [
  { icon: Scan, texto: 'Escaneamento 3D' },
  { icon: Wrench, texto: 'Oficina própria' },
  { icon: ShieldCheck, texto: 'Sob medida' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full flex flex-col justify-center bg-gradient-to-br from-[#0b3d5c] via-[#0e5170] to-[#0e6d8f] overflow-hidden py-20 md:py-28"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[520px] h-[520px] bg-[#14a3c7]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] bg-[#f59e0b]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
            <ShieldCheck size={14} />
            {ANOS_DE_TRADICAO} anos de tradição em Fortaleza
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Soluções ortopédicas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14a3c7] to-[#f59e0b]">
              feitas para você
            </span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Próteses, órteses, coletes 3D e palmilhas sob medida, produzidos em oficina própria com
            tecnologia de escaneamento e fresagem CNC. Cada peça é feita a partir da anatomia real do
            paciente.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {destaques.map(({ icon: Icon, texto }) => (
              <div
                key={texto}
                className="flex items-center gap-2 text-white/90 text-sm font-medium bg-white/10 border border-white/15 rounded-lg px-4 py-2"
              >
                <Icon size={16} className="text-[#14a3c7]" />
                {texto}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_PADRAO}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#0b3d5c] px-7 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-black/20 active:scale-[0.98]"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Ver produtos
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

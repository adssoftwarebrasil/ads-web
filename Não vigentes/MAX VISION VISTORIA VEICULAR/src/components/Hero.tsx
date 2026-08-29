import { Shield, CheckCircle, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20veicular.`;

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/max-vision%2Fvistoria-veicular-fachada.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#e6282f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Credenciada Detran-GO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Vistoria Veicular{' '}
            <span className="text-[#efcf05]">Rápida</span>{' '}
            e{' '}
            <span className="text-[#efcf05]">Confiável</span>{' '}
            em Aparecida de Goiânia
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
            Transferência, seguradoras e regularização veicular com agilidade e segurança.
            Somos credenciados pelo Detran-GO para garantir que tudo esteja em perfeita ordem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#efcf05] text-black font-black px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg shadow-yellow-500/30"
            >
              Agendar Vistoria Agora
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:border-[#efcf05] hover:text-[#efcf05] transition-all duration-200"
            >
              Ver Serviços
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Shield size={20} />, text: 'Autorizada Detran-GO' },
              { icon: <CheckCircle size={20} />, text: 'Laudo em até 24h' },
              { icon: <Clock size={20} />, text: 'Atendimento Ágil' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
              >
                <span className="text-[#efcf05]">{item.icon}</span>
                <span className="text-white text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#servicos" className="text-white/60 hover:text-[#efcf05] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

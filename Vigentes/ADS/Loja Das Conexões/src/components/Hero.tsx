import { MessageCircle, Settings, ShieldCheck, History, ArrowDown } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

const features = [
  { Icon: Settings, label: 'Produtos de Alta Qualidade' },
  { Icon: ShieldCheck, label: 'Atendimento Personalizado' },
  { Icon: History, label: 'Experiência no Mercado' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/lojadasconexoes%2Fhero-lojadasconex.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(45,48,145)]/90 via-[rgb(45,48,145)]/70 to-black/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-1 items-center gap-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Conexões e Válvulas de <span className="text-[rgb(248,232,48)]">Alta Performance</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              O seu parceiro estratégico em soluções industriais. Qualidade garantida para a segurança e eficiência da sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href={WHATSAPP_ACCENTED}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-10 py-4 rounded-full text-lg font-black hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(248,232,48,0.3)] flex items-center gap-2"
              >
                <MessageCircle size={24} />
                SOLICITAR ORÇAMENTO
              </a>
              <a
                href="#servicos"
                className="text-white border-2 border-white/50 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Ver Catálogo
              </a>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors"
                >
                  <Icon size={24} className="text-[rgb(248,232,48)]" />
                  <p className="text-white text-base font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs font-light tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={24} className="w-5 h-5 text-white animate-bounce" />
      </div>
    </section>
  );
}

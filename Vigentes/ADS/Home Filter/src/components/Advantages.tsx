import { Filter, Cpu, Settings, MessageSquare, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  num: string;
  Icon: LucideIcon;
  cls: string;
  title: string;
  desc: string;
}

const advantages: Advantage[] = [
  {
    num: '01',
    Icon: Filter,
    cls: 'lucide lucide-filter text-white',
    title: 'Máxima Pureza',
    desc: 'Sistema Soft de filtragem que retém impurezas, reduz o cloro e elimina sabores indesejados.',
  },
  {
    num: '02',
    Icon: Cpu,
    cls: 'lucide lucide-cpu text-white',
    title: 'Tecnologia Soft',
    desc: 'Equipamentos com compressor de alta performance: água gelada de verdade até nos dias mais quentes.',
  },
  {
    num: '03',
    Icon: Settings,
    cls: 'lucide lucide-settings text-white',
    title: 'Suporte Ágil',
    desc: 'Esqueça a demora. Nossa assistência técnica para troca de refil e reparos é a mais rápida da região.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Diferenciais que <span className="text-blue-600">fazem a diferença</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            Escolher a Home Filter é investir na longevidade do seu equipamento e na saúde de quem você ama.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {advantages.map((a) => (
            <div
              key={a.num}
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <span className="absolute top-6 right-10 text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                {a.num}
              </span>
              <div className="relative z-10">
                <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <a.Icon className={a.cls} width={28} height={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{a.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-white/20">
              <MessageSquare className="lucide lucide-message-square text-blue-200" width={16} height={16} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Atendimento Imediato</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
              Pronto para ter água <br className="hidden md:block" /> pura de verdade?
            </h3>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
              Solicite um orçamento hoje mesmo. Nossa equipe está pronta para te ajudar a escolher o modelo ideal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=556284455153&text=Olha..."
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center px-12 py-5 bg-white text-blue-900 rounded-full text-xl font-black hover:bg-blue-50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 transform active:scale-95"
              >
                FALAR NO WHATSAPP
                <ArrowRight className="lucide lucide-arrow-right ml-3 group-hover/btn:translate-x-2 transition-transform" width={24} height={24} />
              </a>
              <div className="flex items-center text-blue-200 font-medium">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Consultores online agora
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

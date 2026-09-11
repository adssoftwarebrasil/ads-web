import { ShieldCheck, Droplets, Cog, Wrench, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  cls: string;
  badge: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    Icon: ShieldCheck,
    cls: 'lucide lucide-shield-check text-blue-600',
    badge: 'Autorizada Soft',
    title: 'Venda de Purificadores',
    desc: 'Linha completa de purificadores Soft Everest com tecnologia de filtragem avançada.',
  },
  {
    Icon: Droplets,
    cls: 'lucide lucide-droplets text-blue-600',
    badge: 'Alta Performance',
    title: 'Bebedouros de Coluna',
    desc: 'Soluções robustas para empresas e residências, garantindo água gelada e pura o dia todo.',
  },
  {
    Icon: Cog,
    cls: 'lucide lucide-cog text-blue-600',
    badge: 'Técnicos Treinados',
    title: 'Manutenção e Refil',
    desc: 'Troca de elemento filtrante (vela) e limpeza técnica para manter a qualidade da sua água.',
  },
  {
    Icon: Wrench,
    cls: 'lucide lucide-wrench text-blue-600',
    badge: 'Especializada',
    title: 'Assistência Multimarcas',
    desc: 'Conserto e manutenção técnica para diversas marcas de purificadores e bebedouros do mercado.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Nossos <span className="text-blue-600 text-outline">Serviços</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-slate-50 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-colors"></div>
              <div className="mb-8 relative inline-flex">
                <div className="bg-white shadow-sm p-4 rounded-2xl border border-slate-100 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                  <s.Icon className={s.cls} width={28} height={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-grow">
                <div className="inline-flex items-center mb-4">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-blue-100/50">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="flex items-center text-[13px] font-bold text-slate-400 group-hover:text-blue-600 transition-all">
                  Saber mais
                  <ArrowUpRight className="lucide lucide-arrow-up-right ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" width={14} height={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

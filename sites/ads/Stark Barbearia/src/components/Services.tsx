import { Plus, MessageCircle } from 'lucide-react';
import { services, WHATSAPP_URL } from '../data';

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-amber-600 font-bold uppercase tracking-[0.4em] text-xs mb-4">
              Menu de Experiências
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-none">
              Nossos <span className="text-zinc-400">Serviços</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-1 bg-zinc-900 mb-2"></div>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">
              Excelência &amp; Visagismo
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="relative bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:border-amber-500/30 transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-black text-xl text-zinc-900 uppercase tracking-tight leading-tight">
                  {title}
                </h3>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-600 text-[15px] font-medium group/item hover:text-zinc-900 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-amber-500 mt-1 opacity-50 group-hover/item:opacity-100 group-hover/item:rotate-90 transition-all" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-between bg-zinc-900 text-white px-6 py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-amber-600 transition-all duration-300 group/btn overflow-hidden relative"
              >
                <span className="relative z-10">Solicitar Agendamento</span>
                <MessageCircle className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine"></div>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-zinc-400 text-sm font-medium italic">
            *Todos os nossos serviços incluem consultoria básica de visagismo.
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { services, WHATSAPP_URL } from '../data';

export default function Servicos() {
  return (
    <section id="servicos" className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#000EFF] font-bold uppercase tracking-widest text-sm mb-4 block">
              Catálogo Completo
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Soluções em <span className="text-[#000EFF]">Personalização</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-md md:text-right">
            Transformamos itens comuns em lembranças inesquecíveis com acabamento de alta precisão.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#000EFF] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {service.badge}
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-[2px] bg-[#000EFF] rounded-full"></div>
                  <span className="text-xs font-bold text-[#000EFF] uppercase tracking-wider">
                    Qualidade BS
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#000EFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed min-h-[3rem]">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 group-hover:bg-[#000EFF] group-hover:text-white transition-all duration-300 font-bold"
                >
                  <span>Orçamento Rápido</span>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#000EFF] shadow-sm">
                    <ArrowRight width={20} height={20} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Não encontrou o que procurava?</h3>
            <p className="text-slate-400">Personalizamos diversos outros itens sob consulta.</p>
          </div>
          <a
            href={WHATSAPP_URL}
            className="whitespace-nowrap px-10 py-5 bg-[#000EFF] hover:bg-white hover:text-[#000EFF] rounded-full font-black transition-all duration-300 transform hover:scale-105"
          >
            Consultar Outros Brindes
          </a>
        </div>
      </div>
    </section>
  );
}

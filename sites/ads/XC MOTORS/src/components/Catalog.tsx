import { useState } from 'react';
import { ZoomIn, MessageCircle } from 'lucide-react';
import { vehicles, catalogFilters, interestLink, WHATSAPP_PHONE } from '../data';

export default function Catalog() {
  const [active, setActive] = useState('Todos');

  const filtered =
    active === 'Todos' ? vehicles : vehicles.filter((v) => v.tags.includes(active));

  const fullStockText = 'Olá! Gostaria de ver todos os veículos disponíveis na XC Motors.';

  return (
    <section id="catalogo" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Nosso Estoque</span>
            <div className="h-px w-8 bg-[#f8c102]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] mb-4">Catálogo de Veículos</h2>
          <p className="text-[#fefefe]/50 text-lg max-w-xl mx-auto">
            Todos os nossos veículos são selecionados com rigor e estão prontos para sair na hora.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {catalogFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-[#f8c102] text-[#0c0c0c]'
                  : 'bg-white/5 text-[#fefefe]/60 hover:bg-white/10 hover:text-[#fefefe]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((v, i) => (
            <div
              key={`${v.name}-${i}`}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f8c102]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={v.image}
                  alt={v.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <button className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-[#f8c102] hover:text-[#0c0c0c]">
                  <ZoomIn className="lucide lucide-zoom-in" width={16} height={16} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#f8c102]/10 text-[#f8c102] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-[#fefefe] font-bold text-lg leading-tight mb-1">{v.name}</h3>
                <p className="text-[#fefefe]/50 text-sm mb-4">{v.description}</p>
                <a
                  href={interestLink(`${v.name} ${v.description}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#f8c102] text-[#0c0c0c] py-2.5 rounded-xl font-bold text-sm hover:bg-[#f8c102]/90 transition-colors"
                >
                  <MessageCircle className="lucide lucide-message-circle" width={16} height={16} />
                  Tenho Interesse
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={`http://wa.me/${WHATSAPP_PHONE}?text=${fullStockText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#f8c102] text-[#f8c102] px-8 py-3 rounded-full font-bold hover:bg-[#f8c102] hover:text-[#0c0c0c] transition-all duration-200"
          >
            <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
            Ver estoque completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, Play, Star } from 'lucide-react';

interface Testimonial {
  img: string;
  name: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200219-WA0060.mp4-capa.jpg',
    name: 'Cliente 1',
    result: 'Reduziu parcelas em 60%',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200219-WA0061.mp4-capa.jpg',
    name: 'Cliente 2',
    result: 'Quitou com 75% de desconto',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200219-WA0062.mp4-capa.jpg',
    name: 'Cliente 3',
    result: 'Evitou busca e apreensão',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200902-WA0021.mp4-capa.jpg',
    name: 'Cliente 4',
    result: 'Parcelas reduzidas pela metade',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200902-WA0022.mp4-capa.jpg',
    name: 'Cliente 5',
    result: 'Ficou livre dos juros abusivos',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/alianca-credito%2Fimagem-tumb%2FVID-20200902-WA0023.mp4-capa.jpg',
    name: 'Cliente 6',
    result: 'Quitou com 80% de desconto',
  },
];

const stats = [
  { value: '5.000+', label: 'Contratos Negociados' },
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: 'R$ 50M+', label: 'Em Juros Recuperados' },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#0B2447] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-semibold mb-4">
            <MessageSquare className="lucide lucide-message-square" width={14} height={14} />
            Clientes Reais, Resultados Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Quem Confiou na <span className="text-amber-400">Aliança</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Clique em qualquer depoimento para assistir ao vídeo de clientes que se livraram dos juros
            abusivos.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              className="group relative bg-[#0a1e3d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] text-left w-full cursor-pointer"
            >
              <div className="relative aspect-[9/16] sm:aspect-[3/4]">
                <img
                  src={t.img}
                  alt={`Depoimento ${t.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1030]/90 via-[#0a1030]/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/60 group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300">
                    <Play className="lucide lucide-play text-white ml-1" width={22} height={22} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-xs font-semibold backdrop-blur-sm">
                    Depoimento
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex gap-0.5 mb-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="lucide lucide-star text-amber-400 fill-amber-400"
                        width={11}
                        height={11}
                      />
                    ))}
                  </div>
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-amber-300 text-xs font-medium mt-0.5 leading-tight">{t.result}</p>
                </div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-amber-500/40 rounded-2xl transition-all duration-300"></div>
              </div>
              {/* keep idx referenced for stable keys */}
              <span className="hidden">{idx}</span>
            </button>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-10">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-2xl shadow-xl shadow-amber-500/30 transition-all hover:scale-105">
            Ver mais depoimentos (8 restantes)
          </button>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-400">{s.value}</p>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

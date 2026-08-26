import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adair Martini Ada',
    role: 'Local Guide · 273 avaliações',
    avatar: 'AM',
    rating: 5,
    text: 'Bom atendimento, fazem a tinta que você precisa. Atendimento personalizado. Entrega no local da obra e fazem amostras para garantir sua satisfação.',
    color: 'rgb(17,157,219)',
  },
  {
    name: 'Geovane Oliveira de Souza',
    role: 'Local Guide · 9 avaliações',
    avatar: 'GO',
    rating: 5,
    text: 'A Casa das Tintas é a loja de tintas mais completa de Sorriso, especializada em tintas imobiliárias e automotivas, como também toda linha de complementos para pintura e repintura residencial e automotiva.',
    color: 'rgb(108,189,81)',
  },
  {
    name: 'Wellinton Bass',
    role: 'Cliente verificado',
    avatar: 'WB',
    rating: 5,
    text: 'Atendimento muito bom! Tintas de ótimas qualidades. Recomendo para quem quer o melhor produto com o melhor atendimento da cidade.',
    color: 'rgb(235,49,60)',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(17,157,219,0.2)', color: 'rgb(111,196,233)' }}
          >
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            O que nossos{' '}
            <span style={{ color: 'rgb(17,157,219)' }}>clientes dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={20} fill={s <= 4 ? 'rgb(240,214,44)' : 'none'} color="rgb(240,214,44)" />
              ))}
            </div>
            <span className="text-white/60 text-sm">4.7 de 5 no Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote
                size={40}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: t.color }}
              />
              <div className="flex mb-4">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} fill={s <= t.rating ? 'rgb(240,214,44)' : 'none'} color="rgb(240,214,44)" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {[
            { label: 'Avaliação Média', value: '4.7/5', color: 'rgb(240,214,44)' },
            { label: 'Clientes Satisfeitos', value: '+500', color: 'rgb(108,189,81)' },
            { label: 'Anos no Mercado', value: '+10', color: 'rgb(17,157,219)' },
            { label: 'Unidades', value: '2', color: 'rgb(235,49,60)' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center px-8 py-5 rounded-2xl border border-white/10 bg-white/5 min-w-[120px]"
            >
              <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-white/50 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

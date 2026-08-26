import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ronan Pinturas e Texturas',
    role: 'Guia Local · 14 avaliações',
    rating: 5,
    text: 'Excelente empresa. Bom atendimento sem problemas. Assistência e prestatividade com os clientes. Eu recomendo.',
  },
  {
    name: 'Rodnei',
    role: 'Guia Local · 150 avaliações',
    rating: 5,
    text: 'Ótimo atendimento, serviço de ótima qualidade e sem preços abusivos. Recomendo.',
  },
  {
    name: 'Janaina Pimentel',
    role: '2 avaliações',
    rating: 5,
    text: 'Excelente atendimento humanizado e acolhedor.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="rgb(249,240,69)" className="text-[rgb(249,240,69)]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[rgb(247,246,249)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(29,29,29)] mb-4">
            O que Dizem Nossos Clientes
          </h2>
          <p className="text-[rgb(29,29,29)]/60 max-w-xl mx-auto text-base">
            A confiança de quem passou pelo momento mais difícil e encontrou em nós apoio e cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[rgb(29,29,29)]/5 flex flex-col gap-4"
            >
              <StarRating count={t.rating} />
              <p className="text-[rgb(29,29,29)]/70 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-[rgb(29,29,29)]/10">
                <p className="font-bold text-[rgb(29,29,29)] text-sm">{t.name}</p>
                <p className="text-[rgb(29,29,29)]/40 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-[rgb(29,29,29)]/5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="rgb(249,240,69)" className="text-[rgb(249,240,69)]" />
              ))}
            </div>
            <span className="text-[rgb(29,29,29)] font-bold text-sm">5.0</span>
            <span className="text-[rgb(29,29,29)]/50 text-sm">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Viajante a negócios',
    text: 'Fiquei hospedada por uma semana e fui surpreendida pela qualidade do atendimento. Quartos limpos, café da manhã delicioso e localização perfeita para minhas reuniões. Recomendo muito!',
    stars: 5,
    city: 'Rio de Janeiro, RJ',
  },
  {
    name: 'Roberto Almeida',
    role: 'Turista',
    text: 'Melhor custo-benefício que encontrei em São Paulo. O hotel é bem localizado, o staff é extremamente atencioso e o quarto estava impecável. Com certeza voltarei na próxima viagem.',
    stars: 5,
    city: 'Belo Horizonte, MG',
  },
  {
    name: 'Fernanda Souza',
    role: 'Viagem em família',
    text: 'Viajamos com duas crianças e o Hotel Ipanema nos surpreendeu. Toda a equipe foi super atenciosa com os pequenos. A garagem coberta foi um diferencial enorme. Obrigada por tornarem nossa viagem especial!',
    stars: 5,
    city: 'Curitiba, PR',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            O Que Nossos <span className="text-[#fff808]">Hóspedes</span> Dizem
          </h2>
          <p className="text-[#bdbec2] text-lg max-w-xl mx-auto">
            A opinião de quem viveu a experiência Ipanema fala por si só.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 relative hover:border-[#f68033]/40 transition-all duration-300 group"
            >
              <Quote className="text-[#f68033]/20 absolute top-5 right-5" size={40} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={16} className="text-[#fff808] fill-[#fff808]" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#f68033]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#f68033] font-black text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#bdbec2] text-xs">{t.role} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

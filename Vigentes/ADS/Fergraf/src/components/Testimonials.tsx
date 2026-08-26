import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Fredson Dos Santos da Cruz',
    role: 'Guia Local · 13 avaliações',
    rating: 5,
    text: 'Tudo de bom local bacana. Atendimento excelente e produto de qualidade. Recomendo muito!',
    avatar: 'F',
    color: 'rgb(0,180,215)',
  },
  {
    name: 'Thiago Moreira Carvalho',
    role: 'Guia Local · 14 avaliações · 69 fotos',
    rating: 5,
    text: 'Sao atenciosos e estao sempre prontos aguardando seu orcamento e servicos. Profissionalismo do inicio ao fim!',
    avatar: 'T',
    color: 'rgb(122,200,160)',
  },
  {
    name: 'Estael David de Menezes Neto',
    role: 'Guia Local · 97 avaliações · 17 fotos',
    rating: 5,
    text: 'Servico de Primeira! Fizeram meus cartoes de visita e o resultado foi sublime! Ja passei o contato ate para um parceiro hoje!',
    avatar: 'E',
    color: 'rgb(243,144,124)',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[rgb(0,180,215)]/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(53,80,155)]/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-[rgb(255,240,1)]/40 text-[rgb(53,80,155)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(53,80,155)] mb-4">
            O Que Nossos{' '}
            <span className="text-[rgb(0,180,215)]">Clientes Dizem</span>
          </h2>

          <div className="inline-flex items-center gap-3 bg-[rgb(53,80,155)] rounded-2xl px-6 py-3 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-[rgb(255,240,1)] fill-[rgb(255,240,1)]" />
              ))}
            </div>
            <span className="text-white font-black text-2xl">4.8</span>
            <span className="text-white/70 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-[rgb(252,254,255)] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group"
            >
              <div
                className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: review.color }}
              >
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={15} className="text-[rgb(255,200,0)] fill-[rgb(255,200,0)]" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{review.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: review.color }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-[rgb(53,80,155)] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: review.color }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Fergrafe+-+Gr%C3%A1fica+e+Editora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(53,80,155)] font-semibold hover:text-[rgb(0,180,215)] transition-colors text-sm"
          >
            <Star size={16} className="fill-[rgb(255,200,0)] text-[rgb(255,200,0)]" />
            Ver todas as avaliações no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

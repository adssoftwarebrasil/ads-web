import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Yasmim Dutra',
    reviews: 3,
    rating: 5,
    text: 'O atendimento da loja é excelente! A equipe é muito atenciosa, prestativa e extremamente competente no que faz. Resolveram meu problema de forma rápida e eficiente, sempre com muita educação e profissionalismo. Com certeza é um suporte técnico de confiança.',
    avatar: 'YD',
  },
  {
    name: 'Jailson Silva',
    reviews: 6,
    rating: 5,
    text: 'Muito boa, atendimento ótimo, pessoal competente e bem prestativo, preços bem acessíveis e rápidos na resolução dos problemas.',
    avatar: 'JS',
  },
  {
    name: 'Denys Consultor',
    reviews: 1,
    rating: 5,
    text: 'Ótimo atendimento, Trabalho rápido e bem feito. Indico demais! A NetCompany resolveu meu problema com agilidade e preço justo.',
    avatar: 'DC',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            O que dizem sobre nós
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Avaliações dos Clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={22}
                  className={s <= 4 ? 'text-[#F58842] fill-[#F58842]' : 'text-[#F58842] fill-[#F58842]/30'}
                />
              ))}
            </div>
            <span className="text-[#0D1B2A] font-bold text-xl">4.8</span>
            <span className="text-gray-400 text-sm">no Google Meu Negócio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              <Quote
                size={36}
                className="text-[#3069A3]/10 absolute top-5 right-5 group-hover:text-[#3069A3]/20 transition-colors"
              />
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#F58842] fill-[#F58842]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#3069A3] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#0D1B2A] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.reviews} avaliações no Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/NetCompany+Inform%C3%A1tica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#3069A3] hover:text-[#F58842] font-semibold text-sm transition-colors"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}

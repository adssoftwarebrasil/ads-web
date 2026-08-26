import { Star, Quote } from 'lucide-react';

const GOOGLE_URL = 'https://maps.google.com/maps?q=JOY+AUTO+CENTER+Ipor%C3%A1';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  reviews: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente atendimento! Fui muito bem recebido e o serviço ficou impecável. A equipe é atenciosa, profissional e entrega tudo no prazo combinado. Meu carro saiu da oficina em perfeitas condições, parecia novo! Recomendo de olhos fechados."',
    initial: 'R',
    name: 'Rômulo Assunção',
    reviews: '2 avaliações',
  },
  {
    text: '"Empresa super idônea. Atendimento rápido e atencioso. Profissionais altamente capacitados, equipamentos modernos e de alta precisão. Os serviços são de qualidade e bom preço. Estrutura muito aconchegante. Super recomendo."',
    initial: 'E',
    name: 'Eder de Melo',
    reviews: '2 avaliações',
  },
  {
    text: '"Eu só tenho a agradecer a toda a equipe pelo empenho, dedicação e atenção que vocês dão a todos pelo trabalho prestado. Serviço de primeira qualidade e atendimento diferenciado. Com certeza voltarei sempre!"',
    initial: 'C',
    name: 'Cassio Bruno',
    reviews: '1 avaliação',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(246,122,55)] text-xs font-bold uppercase tracking-widest mb-3">
            Quem nos escolheu
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[rgb(246,122,55)] fill-[rgb(246,122,55)]"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-black text-2xl leading-none">4.8</p>
              <p className="text-gray-400 text-xs mt-0.5">Avaliação no Google</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[rgb(246,122,55)]/40 hover:bg-white/8 transition-all duration-300"
            >
              <Quote
                size={28}
                fill="currentColor"
                className="text-[rgb(246,122,55)]/30 mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgb(246,122,55)] flex items-center justify-center text-white font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.reviews}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[rgb(246,122,55)] fill-[rgb(246,122,55)]"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-[rgb(246,122,55)]/0 group-hover:bg-[rgb(246,122,55)]/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[rgb(246,122,55)] text-sm font-medium transition-colors duration-200"
          >
            <Star size={14} className="text-[rgb(246,122,55)]" />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

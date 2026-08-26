import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Eu estava extremamente triste e desgostosa com meu carro que sempre tive tanto zelo, mas após um acidente ficou totalmente esbagaçado. Porém após ele passar pela mágica da oficina Nosso Carro, meu carro lindo voltou e mais brilhoso do que nunca. Atendimento excepcional, com funcionários altamente capacitados e educados. Obrigada equipe Nosso Carro por devolver meu sonho!"',
    initial: 'T',
    name: 'Thais Ferreira',
    time: '3 meses atrás',
  },
  {
    text: '"Meninas da recepção muito educadas, proativas, atendem perfeito. A Sandra tira todas as dúvidas de forma impecável. Serviço bem feito, prazo antes do previsto. Essa sim eu indico e agradeço à Tokio Marine seguradora por referenciar."',
    initial: 'J',
    name: 'Jorge Santos',
    time: '2 semanas atrás',
  },
  {
    text: '"O ambiente é bastante receptivo, o atendimento é simplesmente super carismático. Tem um profissional de apelido Rambo cuja simpatia e profissionalismo nos encantou — e o resultado foi mais que o esperado. Essa empresa precisa ser respeitada e divulgada. Estamos super felizes!"',
    initial: 'H',
    name: 'Hosa ADM',
    time: '2 semanas atrás',
  },
];

function Stars({ size }: { size: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className="lucide lucide-star text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#031B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#174C7E]/30 border border-[#6D94BE]/20 text-[#6D94BE] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Avaliações reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Stars size={20} />
            <span className="text-white font-black text-2xl">5.0</span>
            <span className="text-white/50 text-sm">no Google</span>
          </div>
          <p className="text-white/60 text-sm">
            Avaliação média baseada em centenas de clientes satisfeitos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-gradient-to-br from-[#04152D] to-[#031B3A] border border-white/5 rounded-2xl p-6 hover:border-[#174C7E]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#174C7E]/5"
            >
              <Quote size={28} className="lucide lucide-quote text-[#174C7E]/40 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-6">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#174C7E] to-[#6D94BE] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <div className="flex items-center gap-2">
                    <Stars size={14} />
                    <span className="text-white/40 text-xs">{t.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/search/Nosso+Carro+Centro+Automotivo+Aracaju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#174C7E]/40 text-[#6D94BE] hover:text-white hover:border-[#6D94BE]/60 rounded-xl font-medium text-sm transition-all duration-200"
          >
            Ver todas as avaliações no Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

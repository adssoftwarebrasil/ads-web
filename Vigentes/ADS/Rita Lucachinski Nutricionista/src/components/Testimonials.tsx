import { Quote, Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    text: '"A Dra. Rita mudou completamente minha relação com a comida. Perdi 15kg de forma saudável e hoje me sinto muito mais disposta e confiante. O acompanhamento dela é excepcional, sempre atenciosa e preocupada com meu bem-estar!"',
    initial: 'D',
    name: 'Dayane Themoteo',
    time: '5 meses atrás',
  },
  {
    text: '"Depois de anos lutando contra o efeito sanfona, finalmente encontrei um método que funciona! A Dra. Rita é incrível, super profissional e humana. Seu método personalizado fez toda a diferença na minha vida!"',
    initial: 'L',
    name: 'Lorenna Klivia',
    time: '1 ano atrás',
  },
  {
    text: '"Excelente profissional! A Dra. Rita não só me ajudou a emagrecer, mas também a entender meu corpo e minhas necessidades. O tratamento com fitoterapia foi um divisor de águas. Recomendo de olhos fechados!"',
    initial: 'N',
    name: 'Neide Nunes',
    time: '3 anos atrás',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(157,111,88)] font-normal tracking-wider text-sm uppercase mb-2 block">
            Depoimentos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            O Que Meus <span className="text-[rgb(157,111,88)] font-normal">Pacientes Dizem</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Histórias de quem transformou sua saúde e autoestima através da nutrição.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col h-full bg-[#1c1c1c] border border-gray-800 rounded-2xl p-8 shadow-sm hover:border-[rgb(157,111,88)]/50 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-700 group-hover:text-[rgb(157,111,88)]/20 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[rgb(157,111,88)] text-[rgb(157,111,88)]" />
                ))}
              </div>
              <div className="flex-grow mb-6">
                <p className="text-gray-300 font-light leading-relaxed italic text-lg">{t.text}</p>
              </div>
              <div className="w-full h-px bg-gray-800 mb-6"></div>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-[rgb(157,111,88)]/10 rounded-full flex items-center justify-center shrink-0 border border-[rgb(157,111,88)]/30">
                  <span className="text-[rgb(157,111,88)] font-bold text-xl font-serif">{t.initial}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-normal text-white">{t.name}</p>
                    <CheckCircle2 strokeWidth={3} className="w-4 h-4 text-green-500/80" />
                  </div>
                  <p className="text-sm text-gray-500 font-light">{t.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

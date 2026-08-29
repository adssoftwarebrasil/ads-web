import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Comprei as placas de energia solar diretamente com a empresa e tive uma ótima experiência. O atendimento foi rápido, transparente e todo o processo de compra foi simples e sem complicações. Recebi exatamente o que foi combinado, dentro do prazo. Recomendo pela confiança e qualidade no produto."',
    initials: 'DP',
    name: 'Davi Pereira',
    meta: '1 avaliação',
  },
  {
    text: '"Excelente atendimento e prestação de serviço! Desde o primeiro contato tudo muito bem explicado, Nelsivan sempre disponível para tirar dúvidas, passou segurança desde o início. O tempo de entrega do material e o cuidado na instalação, tudo foi muito bem feito. Só tenho o que agradecer. Nota 10. Super recomendo."',
    initials: 'HN',
    name: 'Hortência Nepomuceno',
    meta: 'Guia Local · 15 avaliações',
  },
  {
    text: '"Parabéns, que empresa de sucesso! Pessoas maravilhosas e grandes profissionais no setor fotovoltaico. Explicam tudo e especificam tudo direitinho para nós clientes. Parabéns mesmo!"',
    initials: 'GA',
    name: 'Gian Andrade',
    meta: '2 avaliações',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-yellow font-semibold text-sm tracking-widest uppercase mb-3">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Avaliações Reais</h2>
          <div className="flex items-center justify-center gap-3 text-white/70 text-base">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={20} height={20} className="text-brand-yellow fill-brand-yellow" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9</span>
            <span>no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-brand-blue-light rounded-2xl p-7 border border-white/10 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <Quote width={36} height={36} className="text-brand-yellow/20 absolute top-6 right-6" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={16} height={16} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-6 flex-1 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-blue font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

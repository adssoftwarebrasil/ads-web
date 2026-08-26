import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  meta: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Marcos Pedro',
    meta: 'Local Guide · 16 avaliações',
    text: '"Experiência incrível no Emília Hair e Care! Atendimento atencioso do começo ao fim, dá pra sentir o cuidado em cada detalhe. Saí de lá me sentindo renovado, com a autoestima lá em cima. A equipe é super profissional, ambiente agradável e organizado. Sem dúvidas, um lugar que recomendo de olhos fechados. Quem quer qualidade de verdade, encontra aqui!"',
  },
  {
    name: 'Casarão das Noivas Cuiabá',
    meta: '2 avaliações',
    text: '"O Salão Emília sempre recomendamos! Atendimento impecável, equipe talentosa e um cuidado incrível com cada cliente. As produções ficam sempre lindas e complementam perfeitamente nossos vestidos."',
  },
  {
    name: 'Mariana Fortes Lovett',
    meta: 'Local Guide · 33 avaliações',
    text: '"O melhor corte de cabelo da vida é com a Emília. Venho de Sampa só para cortar com ela, excelente profissional e detalhista como ela, não há."',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">Depoimentos</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone font-light mb-4">
            O Que Dizem <span className="italic text-gold">Nossas Clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="lucide lucide-star text-gold fill-gold" width={20} height={20} />
              ))}
            </div>
            <span className="font-serif text-3xl text-stone font-light">4.7</span>
            <span className="font-sans text-sm text-stone-light">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white border border-cream hover:border-gold/40 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              <div className="absolute -top-3 left-6">
                <div className="bg-gold rounded-full p-2 shadow-md">
                  <Quote className="lucide lucide-quote text-white" width={14} height={14} />
                </div>
              </div>
              <div className="mb-4 pt-2">
                <p className="font-sans text-sm font-semibold text-stone">{t.name}</p>
                <p className="font-sans text-xs text-stone-light">{t.meta}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="lucide lucide-star text-gold fill-gold" width={14} height={14} />
                ))}
              </div>
              <p className="font-sans text-stone-light text-sm leading-relaxed mt-3 italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Emilia+Hair+%26+Care"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-stone-light hover:text-gold transition-colors underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

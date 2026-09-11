import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'A Argelis reorganizou todo nosso financeiro. Reduzimos custos em 23% em apenas 6 meses! A equipe é extremamente profissional e os resultados foram além das expectativas.',
    initials: 'CM',
    name: 'Carlos M.',
    role: 'Diretor Financeiro',
    company: 'Indústria de Móveis',
  },
  {
    text: 'Profissionais extremamente qualificados. O acompanhamento estratégico transformou nossa tomada de decisão. Agora temos clareza dos números e segurança para investir.',
    initials: 'AS',
    name: 'Ana Paula S.',
    role: 'CEO',
    company: 'Rede de Varejo',
  },
  {
    text: 'Investimento que se paga. Os treinamentos capacitaram toda nossa equipe e melhoraram significativamente nossa gestão de estoques. Resultados práticos e imediatos.',
    initials: 'RF',
    name: 'Roberto F.',
    role: 'Gerente de Operações',
    company: 'Distribuidora',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={20} height={20} className="text-yellow-400 fill-current" />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <Quote width={40} height={40} className="text-[rgb(62,215,252)] mb-4" />
      <p className="text-gray-700 italic leading-relaxed mb-6">{t.text}</p>
      <Stars />
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] flex items-center justify-center">
          <span className="text-white font-bold text-lg">{t.initials}</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">{t.name}</div>
          <div className="text-sm text-gray-600">{t.role}</div>
          <div className="text-sm text-gray-500">{t.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram sua gestão com a Argelis
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
            {testimonials.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </div>
          <div className="lg:hidden">
            <Card t={testimonials[index]} />
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[rgb(64,102,215)] hover:scale-110 transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft width={24} height={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={
                    i === index
                      ? 'w-2 h-2 rounded-full transition-all duration-200 bg-[rgb(64,102,215)] w-8'
                      : 'w-2 h-2 rounded-full transition-all duration-200 bg-gray-300 hover:bg-gray-400'
                  }
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[rgb(64,102,215)] hover:scale-110 transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

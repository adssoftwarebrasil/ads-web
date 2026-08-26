import { Star, Quote, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';

interface Testimonial {
  initials: string;
  name: string;
  time: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'LG',
    name: 'Luciana Giaretta Senen',
    time: '5 meses atrás',
    text: 'O ambiente é acolhedor, as profissionais são atentas, pacientes e cuidadosas, sempre nos incentivam a fazer melhor, a superar os desafios e ajudam nas dificuldades. Super recomendo! Meus filhos fazem para melhorar algumas questões e eu fiz na gestação, o que foi excelente para manter a saúde e a forma. Lugar organizado, limpo e cativante.',
  },
  {
    initials: 'RS',
    name: 'Roberta Santarenha',
    time: '5 meses atrás',
    text: 'Clínica super organizada, com profissionais super atenciosas e competentes! O carinho que nos recebe, e a dedicação por nos deixar melhor a cada dia! O movimento cura, e a Clínica Saúde e Movimento é o melhor lugar!',
  },
  {
    initials: 'JC',
    name: 'Jose Carlos',
    time: '5 meses atrás',
    text: 'Tive um acidente e a minha recuperação devo a essa clínica Saúde e Movimento. Profissionais excelentes que me acompanharam em cada etapa, com dedicação e cuidado que fazem toda a diferença.',
  },
];

function Stars({ size }: { size: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star text-clinic-gold fill-clinic-gold"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-clinic-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-clinic-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-teal leading-tight">
            O que nossos pacientes
            <br />
            <span className="text-clinic-gold">dizem sobre nós</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Histórias reais de transformação e recuperação que nos motivam todos os dias.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mb-12">
          <Stars size={24} />
          <div>
            <span className="text-3xl font-extrabold text-clinic-teal">4.9</span>
            <span className="text-gray-500 ml-2 text-sm">avaliação média no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-clinic-teal/20 hover:-translate-y-1 transition-all duration-400 opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-clinic-teal flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-clinic-teal text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.time}</div>
                  </div>
                </div>
                <Quote
                  className="lucide lucide-quote text-clinic-gold/30 flex-shrink-0"
                  width={20}
                  height={20}
                />
              </div>
              <Stars size={16} />
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-clinic-teal hover:bg-clinic-teal/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
            Quero ter esses resultados também!
          </a>
          <a
            href="https://www.google.com/maps/search/Clinica+Saude+Movimento+Rondonopolis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-clinic-teal font-semibold text-sm border-b-2 border-clinic-gold hover:text-clinic-gold transition-colors"
          >
            Ver todas as avaliações no Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

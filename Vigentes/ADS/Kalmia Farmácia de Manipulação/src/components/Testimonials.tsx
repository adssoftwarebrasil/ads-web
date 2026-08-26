import { Star, Quote } from 'lucide-react';

interface Review {
  initial: string;
  avatarBg: string;
  name: string;
  meta: string;
  text: string;
}

const reviews: Review[] = [
  {
    initial: 'B',
    avatarBg: 'bg-primary',
    name: 'Beth Silva',
    meta: '3 avaliações · 2 meses atrás',
    text: '"Sempre conto com o profissionalismo dos funcionários da Kalmia e a excelência dos produtos manipulados. Muito bons serviços."',
  },
  {
    initial: 'R',
    avatarBg: 'bg-brand-green',
    name: 'Rita de Cassia Fernandes',
    meta: '1 avaliação · 3 meses atrás',
    text: '"Foi ótima. Fui muito bem atendida pela Alessandra. Muito delicada e simpática. Voltarei em breve."',
  },
  {
    initial: 'C',
    avatarBg: 'bg-primary-light',
    name: 'Cristiane Fernandes',
    meta: '9 avaliações · 5 meses atrás',
    text: '"Atendimento excelente!!! São muito acolhedores e atenciosos, adorei, não conhecia, vou comprar só nessa farmácia agora."',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Resultados que <span className="text-primary">falam por si</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="lucide lucide-star text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500 text-sm">avaliação média no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${r.avatarBg} flex items-center justify-center text-white font-bold text-base`}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.meta}</p>
                  </div>
                </div>
                <Quote size={18} className="lucide lucide-quote text-primary/20 flex-shrink-0 mt-1" />
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="lucide lucide-star text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center animate-on-scroll">
          <p className="text-gray-500 mb-6">Junte-se a centenas de clientes satisfeitos com o cuidado Kalmia</p>
          <a
            href="http://wa.me/5516991594153"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            Começar meu tratamento
          </a>
        </div>
      </div>
    </section>
  );
}

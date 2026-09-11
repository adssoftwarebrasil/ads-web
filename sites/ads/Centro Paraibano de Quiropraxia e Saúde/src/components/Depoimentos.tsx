import { Star, CheckCircle, Quote, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Testimonial {
  date: string;
  text: string;
  initials: string;
  name: string;
  cardClass: string;
  quoteSize: number;
  textClass: string;
}

const testimonials: Testimonial[] = [
  {
    date: '19/01/2026',
    text: '"Fui muito bem atendido e logo na primeira consulta já tive melhoras significativas."',
    initials: 'AS',
    name: 'André Scott',
    cardClass: 'p-12 md:col-span-2 lg:col-span-2 -rotate-2',
    quoteSize: 64,
    textClass:
      'text-navy/90 text-2xl md:text-3xl font-medium leading-tight italic mb-10 group-hover:text-navy transition-colors',
  },
  {
    date: '14/01/2026',
    text: '"Nossa experiência no Centro de Quiropraxia com o Dr Jonas tem sido incrível pois minha esposa esteve bastante debilitada e no segundo dia de terapia ela levantou da cama e caminhou sem nossa ajuda."',
    initials: 'JH',
    name: 'João Hingo Bezerra',
    cardClass: 'p-8 col-span-1 rotate-1',
    quoteSize: 48,
    textClass:
      'text-navy/90 text-lg leading-relaxed italic mb-10 group-hover:text-navy transition-colors',
  },
  {
    date: '12/01/2026',
    text: '"Fui na consulta sem expectativa pois estava com uma dor que ia do pé até as costas… Na segunda sessão eu já estava andando de sandália de salto… Sou muito grata!!!"',
    initials: 'QA',
    name: 'queila andrade',
    cardClass: 'p-8 col-span-1 rotate-3',
    quoteSize: 48,
    textClass:
      'text-navy/90 text-lg leading-relaxed italic mb-10 group-hover:text-navy transition-colors',
  },
  {
    date: '13/01/2026',
    text: '"Fiz tratamento com o método Busquet e Quiropraxia. Na primeira sessão foi a avaliação. As dores nas costas acabaram com 5 sessões."',
    initials: 'PG',
    name: 'Pollyana Guimarães',
    cardClass: 'p-6 col-span-1 -rotate-1',
    quoteSize: 32,
    textClass:
      'text-navy/90 text-base leading-relaxed italic mb-10 group-hover:text-navy transition-colors',
  },
  {
    date: '12/01/2026',
    text: '"Foi muito positivo, gostei muito. Cheguei muito travada e hoje terminei minhas sessões. Estou me sentindo outra pessoa."',
    initials: 'MS',
    name: 'Marleide Soares',
    cardClass: 'p-6 col-span-1 -rotate-2',
    quoteSize: 32,
    textClass:
      'text-navy/90 text-base leading-relaxed italic mb-10 group-hover:text-navy transition-colors',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 ">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={16}
          height={16}
          className="lucide lucide-star text-gold fill-gold"
        />
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-[#FAF9F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 items-center mb-24">
          <div className="md:col-span-2">
            <span className="inline-block text-cyan-brand text-sm font-semibold tracking-[0.2em] uppercase mb-4 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-100">
              Vozes de Quem Confia
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-navy leading-[1.05] tracking-tighter">
              A transformação real <br /> na vida de{' '}
              <span className="text-cyan-brand italic">nossos pacientes</span>
            </h2>
          </div>
          <div className="relative md:-mt-16 md:-mr-10 md:justify-self-end">
            <div className="absolute inset-0 bg-gold/10 rounded-[2rem] blur-2xl transform rotate-6"></div>
            <div className="relative bg-white p-6 rounded-[2rem] shadow-xl border border-gold/10 flex flex-col items-center text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg"
                alt="Google"
                className="w-20 mb-3"
              />
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <p className="text-navy font-black text-5xl leading-none mb-1">5.0</p>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={16}
                    height={16}
                    className="lucide lucide-star text-gold fill-gold"
                  />
                ))}
              </div>
              <div className="inline-flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle
                  width={14}
                  height={14}
                  fill="white"
                  className="lucide lucide-check-circle "
                />
                <span>Excelente</span>
              </div>
              <p className="text-gray-500 text-xs font-medium mt-3">+531 avaliações no Google Maps</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group relative bg-white rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50 flex flex-col justify-between ${t.cardClass} hover:rotate-0 hover:scale-[1.02]`}
            >
              <Quote
                width={t.quoteSize}
                height={t.quoteSize}
                className="lucide lucide-quote absolute top-8 right-8 text-cyan-brand opacity-10 group-hover:opacity-20 transition-opacity"
              />
              <div className="relative z-10 flex-grow">
                <div className="mb-5 flex items-center justify-between">
                  <StarRow />
                  <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                    {t.date}
                  </span>
                </div>
                <p className={t.textClass}>{t.text}</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center border-2 border-dashed border-cyan-brand/30 shrink-0">
                  <span className="text-navy text-sm font-black">{t.initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-navy font-extrabold text-sm tracking-tight">{t.name}</span>
                  <span className="text-cyan-brand text-xs font-bold">Paciente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 md:mt-32 relative text-center">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-brand/5 rounded-full blur-3xl"></div>
          <div className="inline-block bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 relative z-10">
            <h3 className="text-3xl font-black text-navy leading-tight mb-8 max-w-lg">
              Pronto para tratar a <br /> verdadeira{' '}
              <span className="text-cyan-brand">raiz da sua dor?</span>
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white font-black px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl shadow-navy/20 active:scale-95 text-lg"
            >
              Agendar minha avaliação agora
              <ArrowRight
                width={22}
                height={22}
                className="lucide lucide-arrow-right group-hover:translate-x-1.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

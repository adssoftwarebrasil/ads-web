import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
  avatarClass: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente profissional, super atencioso, prestativo, resolveu todos os meus problemas!! Super indico, é o melhor!"',
    name: 'Matheus Abreuu',
    initial: 'M',
    avatarClass: 'bg-blue-500',
  },
  {
    text: '"Excelente profissional, super indico. Atendimento diferenciado, me senti muito bem cuidada e esclarecida sobre tudo."',
    name: 'Rafaela Ferreira',
    initial: 'R',
    avatarClass: 'bg-rose-500',
  },
  {
    text: '"Excelente profissional, atencioso e procura sanar todas suas dúvidas. Recomendo! Me ajudou muito, explicou tudo com clareza."',
    name: 'Jheyzon Dias',
    initial: 'J',
    avatarClass: 'bg-teal-500',
  },
  {
    text: '"Fui muito bem atendida, o consultório é moderno e organizado. Dr. Sillas é extremamente competente e cuidadoso. Nota 10!"',
    name: 'Ana Carolina S.',
    initial: 'A',
    avatarClass: 'bg-amber-500',
  },
  {
    text: '"Precisei de cirurgia a laser e o resultado foi incrível. Recuperação rápida, sem dor excessiva. Profissional de altíssimo nível."',
    name: 'Roberto Mendes',
    initial: 'R',
    avatarClass: 'bg-green-600',
  },
  {
    text: '"Consultório bem localizado, equipe atenciosa e Dr. Sillas muito competente. Explicou todo o procedimento com clareza e cuidado."',
    name: 'Patrícia Lima',
    initial: 'P',
    avatarClass: 'bg-cyan-600',
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto opacity-40" fill="#EA4335">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#144170] leading-tight">
            O que dizem nossos
            <span className="text-[#009FC2]"> Pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex flex-col items-center bg-[#f5f8fc] rounded-2xl px-8 py-5 border border-[#009FC2]/15">
              <span className="text-5xl font-bold text-[#144170]">4.9</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    className="lucide lucide-star fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs mt-2">Avaliação Média no Google</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f5f8fc] rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote
                width={28}
                height={28}
                className="lucide lucide-quote text-[#009FC2]/20 absolute top-5 right-5"
              />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    className="lucide lucide-star fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${t.avatarClass}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-[#144170] font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">Paciente verificado</p>
                </div>
                <GoogleIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

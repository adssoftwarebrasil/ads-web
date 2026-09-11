import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Recomendo a Prestserv, empresa parceira e confiável para empresas que buscam gestão responsável de resíduos, com foco na qualidade, segurança e sustentabilidade."',
    initials: 'RR',
    avatarBg: 'bg-primary-500',
    name: 'Rosângela Ribeiro',
    role: 'Cliente verificada',
    delay: '0ms',
  },
  {
    text: '"Excelente atendimento. Sempre muito pontuais. Superaram nossas expectativas em cada etapa do processo."',
    initials: 'WJ',
    avatarBg: 'bg-eco-500',
    name: 'Wilson Junior',
    role: 'Cliente verificado',
    delay: '100ms',
  },
  {
    text: '"Conheci pessoalmente as instalações da empresa e sinceramente são muito boas. Consegui verificar que é uma empresa séria que trata os resíduos da forma correta dentro dos parâmetros da lei. Recomendo ela 100%."',
    initials: 'DF',
    avatarBg: 'bg-accent-500',
    name: 'Dario Ferrari',
    role: 'Guia local · 18 avaliações',
    delay: '200ms',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={16}
          height={16}
          className="lucide lucide-star text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-accent-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            O Que Nossos <span className="text-primary-500">Clientes Dizem</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A satisfação dos nossos parceiros é o maior indicador do nosso trabalho. Veja o que dizem quem já escolheu a
            Goias Eco Ambiental.
          </p>
          <div className="inline-flex items-center gap-3 mt-6 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <Stars />
                <span className="font-bold text-gray-900 text-sm">5.0</span>
              </div>
              <div className="text-xs text-gray-500">Avaliação no Google Maps</div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 card-hover flex flex-col gap-4 transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: t.delay }}
            >
              <Quote width={32} height={32} className="lucide lucide-quote text-gray-100 -mb-2" />
              <p className="text-gray-700 leading-relaxed text-sm flex-1">{t.text}</p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

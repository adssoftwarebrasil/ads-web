import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Drogaria Trevão',
    rating: 5,
    text: 'Levei toda a minha família para sermos atendidos pela Dra. Rafaella, o atendimento foi maravilhoso, excelente profissional, as crianças ficaram tranquilas, o consultório é lindo e muito limpo. Muito obrigada por tudo!',
    role: 'Paciente',
    initials: 'DT',
    color: 'bg-[#a4376e]',
  },
  {
    name: 'Ana Flávia',
    rating: 5,
    text: 'Como foi a primeira vez, me senti segura, entreguei um pedacinho de mim para umas mãos bem recomendadas. A doutora e a secretária super atenciosas, carinhosas e têm um cuidado super redobrado com nossas crianças!',
    role: 'Paciente',
    initials: 'AF',
    color: 'bg-[#098b90]',
  },
  {
    name: 'Jozilene Lima',
    rating: 5,
    text: 'Experiência maravilhosa! Doutora simpática e ótima profissional, atendimento maravilhoso também da Steffany. Ambiente muito agradável. Recomendo a todos que buscam qualidade e cuidado verdadeiro.',
    role: 'Paciente',
    initials: 'JL',
    color: 'bg-[#a4376e]',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#098b90] text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            O que nossos pacientes{' '}
            <span className="text-[#a4376e]">dizem</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais de mil sorrisos transformados. Confira as experiências reais de quem confiou na nossa clínica.
          </p>

          <div className="inline-flex items-center gap-3 mt-8 bg-white rounded-2xl px-6 py-3 shadow-md border border-gray-100">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-500 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#a4376e]/20 hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote
                size={32}
                className="text-[#a4376e]/10 group-hover:text-[#a4376e]/20 transition-colors absolute top-6 right-6"
                strokeWidth={1}
              />

              <StarRating count={t.rating} />

              <p className="text-gray-600 leading-relaxed mt-5 mb-8 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="http://wa.me/556592693908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#a4376e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e2d5e] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Quero Ser o Próximo Sorriso Transformado
          </a>
        </div>
      </div>
    </section>
  );
}

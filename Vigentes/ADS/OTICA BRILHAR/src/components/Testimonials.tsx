import { StarIcon, GoogleIcon } from './Icons';

type Testimonial = { initials: string; name: string; meta: string; text: string };

const testimonials: Testimonial[] = [
  {
    initials: 'TM',
    name: 'Tatiani Mantovani',
    meta: '3 avaliações · 1 foto',
    text: '"Atendimento humanizado, diferenciado, qualidade nas armações e confiança nas lentes. Minha filha adolescente usa óculos, já fez cirurgia nos olhos então prezo buscar o melhor pra ela."',
  },
  {
    initials: 'MC',
    name: 'Mariana Constantino',
    meta: '1 avaliação',
    text: '"Ótimo atendimento, indico muito! Uma experiência incrível de ponta a ponta. Equipe atenciosa e produtos de qualidade."',
  },
  {
    initials: 'MB',
    name: 'Marciel Brito',
    meta: '4 avaliações',
    text: '"Ótimo atendimento, qualidade, preço justo e facilidade de pagamento. Super recomendo para toda a família!"',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            O que nossos clientes <span className="text-[rgb(13,111,69)]">dizem sobre nós</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900 text-lg">5.0</span>
            <span className="text-gray-500 text-sm">Avaliação média no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[rgb(13,111,69)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.meta}</div>
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 text-[#4285F4] flex-shrink-0" />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Confira mais avaliações no Google</p>
          <a
            href="http://wa.me/556684469577?text=Olá!%20Quero%20agendar%20uma%20consulta%20na%20Ótica%20Brilhar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(13,111,69)] hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 text-sm"
          >
            Seja nosso próximo cliente satisfeito
          </a>
        </div>
      </div>
    </section>
  );
}

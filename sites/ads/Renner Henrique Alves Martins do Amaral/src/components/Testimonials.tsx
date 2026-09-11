import { useEffect, useRef } from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Marielle Gil',
    avatar: 'MG',
    rating: 5,
    date: 'Paciente pelo SUS',
    text: 'Dr. Renner Amaral, excelente pediatra, super indico! Excelente atendimento, tem uma atenção com as crianças e um carinho que não cabe no peito. Quando nenhum outro pediatra descobriu que meu filho estava com bronquiolite, levei no Renner e ele super me ajudou. Meu filho tinha apenas 5 meses de vida e se estabilizou com menos de 3 dias com as medicações que ele passou. Sou muito grata a ele.',
    highlight: 'Descobriu bronquiolite que outros médicos não viram',
  },
  {
    name: 'Victor Henrique Ferreira Santos',
    avatar: 'VH',
    rating: 5,
    date: 'Responsável de paciente',
    text: 'Levei meu afilhado para uma consulta pediátrica com o Dr. Renner e fiquei extremamente satisfeito com o atendimento. Ele foi atencioso, cuidadoso e explicou tudo de forma clara e tranquila, o que nos deixou muito seguros. O consultório tem uma ótima estrutura e a consulta foi realizada com bastante paciência e dedicação. O Dr. Renner demonstrou muito conhecimento e carinho no cuidado com a criança. Sem dúvida, um profissional excelente, recomendo de olhos fechados.',
    highlight: 'Explicou tudo com clareza e nos deixou muito seguros',
  },
  {
    name: 'Isabella Pineli',
    avatar: 'IP',
    rating: 5,
    date: 'Mãe de paciente',
    text: 'Dr. Renner é um excelente médico! É paciente e cuidadoso com meu filho, sempre muito atencioso nas consultas. Meu filho adora os dias de consulta com ele. Super recomendo!',
    highlight: 'Meu filho adora os dias de consulta com ele',
  },
];

function ReviewCard({ review, index }: { review: (typeof REVIEWS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 150);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="section-observe card-hover bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4C6CA3 0%, #3a5485 100%)' }}
        >
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm truncate">{review.name}</p>
          <p className="text-xs text-gray-400 mb-1">{review.date}</p>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <Quote size={20} className="text-brand-blue/20 flex-shrink-0" />
      </div>

      <div className="mb-4 p-3 bg-brand-blue-pale rounded-xl">
        <p className="text-brand-blue text-xs font-semibold italic">"{review.highlight}"</p>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-5">{review.text}</p>

      <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-100">
        <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none">
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          <path fill="#FBBC05" d="M10.53 28.59c-.5-1.45-.79-2.99-.79-4.59s.29-3.14.79-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.55 10.78l7.98-6.19z" />
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.55 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        </svg>
        <span className="text-xs text-gray-400">Avaliação no Google</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #FFFCE4 0%, #f0f4fb 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-observe text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue-pale text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            <MessageCircle size={13} />
            Depoimentos
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            O que as famílias dizem
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            A confiança das famílias é o maior reconhecimento do nosso trabalho.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-extrabold text-gray-900">5,0</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-brand-blue">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">de recomendação</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            <div className="text-center hidden sm:block">
              <p className="text-2xl font-extrabold text-brand-blue">Google</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Avaliações</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/553799766089"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agende a consulta do seu filho
          </a>
        </div>
      </div>
    </section>
  );
}

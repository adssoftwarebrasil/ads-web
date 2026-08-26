import { Quote, Star } from 'lucide-react';

interface Review {
  text: string;
  initial: string;
  avatarGrad: string;
  quoteColor: string;
  name: string;
  meta: string;
  delay: number;
}

const reviews: Review[] = [
  {
    text: '"Muito bom, os produtos também têm qualidade e o atendimento é ótimo. O mais legal é que não depende de colaboradores para você conseguir lavar!"',
    initial: 'D',
    avatarGrad: 'linear-gradient(135deg, rgb(38, 182, 230), rgba(38, 182, 230, 0.7))',
    quoteColor: 'rgb(38, 182, 230)',
    name: 'Daniel Freire',
    meta: '2 avaliações',
    delay: 0,
  },
  {
    text: '"Experiência muito agradável! Sr. Paulo tem um atendimento diferenciado e muito prestativo. Agora com serviço de comodidade em deixar as roupas para ele lavar e depois o cliente buscar! Muito legal e com um acréscimo super barato. Super recomendo! Está de parabéns!"',
    initial: 'H',
    avatarGrad: 'linear-gradient(135deg, rgb(190, 83, 160), rgba(38, 182, 230, 0.7))',
    quoteColor: 'rgb(190, 83, 160)',
    name: 'Hélio Almeida',
    meta: 'Local Guide · 56 avaliações',
    delay: 120,
  },
  {
    text: '"Amei! Máquinas ótimas, produtos de qualidade e as roupas super cheirosas!"',
    initial: 'L',
    avatarGrad: 'linear-gradient(135deg, rgb(84, 46, 145), rgba(38, 182, 230, 0.7))',
    quoteColor: 'rgb(84, 46, 145)',
    name: 'Luciana Domingues',
    meta: '1 avaliação',
    delay: 240,
  },
];

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
    </svg>
  );
}

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 section-fade">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(38, 182, 230, 0.1)', color: 'rgb(38, 182, 230)' }}
          >
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Avaliação{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgb(84, 46, 145), rgb(190, 83, 160)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              5.0 no Google
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Nossos clientes falam por nós. Confira o que dizem sobre a
            experiência na Lavup Araraquara.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-black text-gray-900">5.0</span>
            <span className="text-gray-400 text-sm">nota máxima</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="section-fade" style={{ transitionDelay: `${r.delay}ms` }}>
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div
                  className="absolute top-4 right-5"
                  style={{ color: r.quoteColor, opacity: 0.08 }}
                >
                  <Quote size={48} />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                  {r.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: r.avatarGrad }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.meta}</p>
                  </div>
                  <div className="ml-auto">
                    <GoogleIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center section-fade">
          <p className="text-gray-500 text-sm mb-4">
            Veja todas as avaliações no Google Maps
          </p>
          <a
            href="https://www.google.com/maps/place/Lavup+Araraquara+Lavanderia+de+Autoatendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'rgb(118, 203, 199)', color: 'rgb(38, 182, 230)' }}
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

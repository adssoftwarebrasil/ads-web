import { Star, ExternalLink, Quote } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: 'Rosane Vieira Inda',
      photo: 'https://lh3.googleusercontent.com/a/ACg8ocK_CLhYozwrpP-wISeAeBFLHZUKna6Eh23IRHDk61--GtUPDQ=s64-c-rp-mo-br100',
      stats: '6 críticas · 1 foto',
      text: 'Foi ótimo, muito atenciosos, esclarecendo bem tudo q foi questionado.',
      link: 'https://share.google/Xe7N4WKcWfDRZaD3n',
      time: 'há 9 meses'
    },
    {
      name: 'Oliveira',
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjUFU8XQICiD4IyY0e5JtHunY-p0v2fPzAtEtNgtyYJJvhtkUNI=s64-c-rp-mo-br100',
      stats: '2 críticas',
      text: 'Bom ambiente, para adquirir os produtos. Requinte e muita qualidade. Realizam sonhos.',
      link: 'https://share.google/cgHvW1xnlxfN9g3Cd',
      time: 'há 2 anos'
    },
    {
      name: 'Wagner Cabral',
      photo: 'https://lh3.googleusercontent.com/a-/ALV-UjVo1Il_Z4ppG_CylAN9IoQTd5D4-LSbVr3j2KlG5lm4aIINr6qPOg=s64-c-rp-mo-ba5-br100',
      stats: 'Guia local · 513 críticas · 637 fotos',
      text: 'Excelente qualidade e excelentes preços. Atendimento por profissionais',
      link: 'https://share.google/vLMG6g0LeCcOql9gQ',
      time: 'há 4 meses'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold tracking-wide uppercase">
              Avaliações Google
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Avaliação <span className="text-primary">5 Estrelas</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>

          <p className="text-lg text-secondary">
            Baseado em avaliações reais de nossos clientes no Google
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">{review.stats}</p>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{review.time}</p>
                </div>
              </div>

              <div className="relative flex-1 mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6 min-h-[100px]">
                  {review.text}
                </p>
              </div>

              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold text-sm transition-colors duration-300 mt-auto"
              >
                Ver avaliação completa
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl border border-primary/20">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Faça Parte dos Nossos Clientes Satisfeitos
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Junte-se a centenas de clientes que transformaram suas noites de sono com nossos produtos premium
          </p>
          <a
            href="https://www.google.com/maps/place/LIH+HOPP+COLCH%C3%95ES+LTDA/@-16.7116429,-49.2628378,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver Todas as Avaliações
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

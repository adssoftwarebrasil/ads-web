import { Quote } from 'lucide-react';
import { GoogleStar } from './Icons';

const reviews = [
  {
    text: 'O atendimento é maravilhoso. São super atenciosos e prestativos. Oferecem vários modelos de armações e lentes o que possibilita adequar a necessidade do cliente ao seu poder aquisitivo. O pós-venda é outro diferencial! Sempre que precisei de ajuste ou reparos fui muito bem atendida. Merecem toda confiança!',
    initials: 'VM',
    name: 'Virgínia Maria Borges Mendes Souza',
    meta: 'Local Guide · 26 avaliações · 3 meses atrás',
  },
  {
    text: 'Melhor ótica da região! Eles possuem várias opções de armações para todos os gostos e orçamentos. O que mais cativa é o carinho no atendimento e a agilidade na entrega. Do momento da compra até o pós venda, a atenção que dão ao cliente é impecável! Recomendo demais!',
    initials: 'MR',
    name: 'Marina Ramos',
    meta: '3 avaliações · um mês atrás',
  },
  {
    text: 'Fui a essa ótica a partir dos comentários positivos deixados aqui e não me decepcionei! O atendimento da Dalila foi impecável — gentil e focado no que eu informei que procurava. Mostrou todas as opções de modelo e preço, sem forçar a compra. Acho que "respeitoso" define bem. Recomendo!',
    initials: 'CB',
    name: 'Cassia Brandao',
    meta: 'Local Guide · 42 avaliações · 2 meses atrás',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <GoogleStar key={i} className="w-4 h-4 fill-current" style={{ color: 'rgb(80, 4, 4)' }} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 lg:py-32" style={{ backgroundColor: 'rgb(53, 59, 59)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: 'rgba(223, 209, 162, 0.15)', color: 'rgb(223, 209, 162)' }}
          >
            Avaliações Google
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'rgb(240, 238, 239)' }}
          >
            O que nossos clientes <span style={{ color: 'rgb(223, 209, 162)' }}>dizem sobre nós</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-5xl font-bold" style={{ color: 'rgb(223, 209, 162)' }}>
              5.0
            </span>
            <div>
              <Stars />
              <p className="text-sm mt-1" style={{ color: 'rgb(196, 194, 195)' }}>
                Média no Google
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="section-reveal relative p-7 rounded-2xl flex flex-col"
              style={{
                backgroundColor: 'rgba(240, 238, 239, 0.05)',
                border: '1px solid rgba(223, 209, 162, 0.15)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <Quote
                width={28}
                height={28}
                className="lucide lucide-quote mb-4 opacity-30"
                strokeWidth={2}
                style={{ color: 'rgb(223, 209, 162)' }}
              />
              <p
                className="text-sm leading-relaxed mb-6 flex-grow"
                style={{ color: 'rgb(196, 194, 195)', lineHeight: 1.75 }}
              >
                {review.text}
              </p>
              <div
                className="flex items-center gap-4 pt-4"
                style={{ borderTop: '1px solid rgba(223, 209, 162, 0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-semibold text-sm truncate"
                    style={{ color: 'rgb(240, 238, 239)' }}
                  >
                    {review.name}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'rgb(99, 99, 97)' }}>
                    {review.meta}
                  </p>
                </div>
                <div className="ml-auto shrink-0">
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

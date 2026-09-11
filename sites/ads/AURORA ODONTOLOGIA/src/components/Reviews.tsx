import useInView from '../hooks/useInView';

const PERFIL_GOOGLE = 'https://share.google/hAbC17VhgZLR1Sl5g';

type Avaliacao = {
  nome: string;
  nota: number;
  texto: string;
};

// Avaliacoes reais do perfil do Google da clinica. NAO inventar depoimento:
// so entra aqui o que estiver publicado no perfil. O texto e copiado como a
// pessoa escreveu, inclusive emojis e erros de digitacao.
const AVALIACOES: Avaliacao[] = [
  {
    nome: 'Jordana Yasmin V. Soares',
    nota: 5,
    texto:
      'Coloquei as minhas lentes a 8 meses, vim por indicação e após isso nunca mais tive medo de sorrir, me sinto segura para qualquer ocasião e sem falar como o tratamento de outras pessoas comigo mudou. Um sorriso bonito abre portas, indico de olhos fechados! Te entregam muito mais que naturalidade, te entregam poder, confiança e um belo sorriso.',
  },
  {
    nome: 'Aline Sousa',
    nota: 5,
    texto:
      'Fiz minhas lentes na Aurora fui muito bem atendida dês do primeiro momento, tudo muito bem explicado trabalho de muita qualidade estou super satisfeita e amei meu resultado 😍👏🏻👏🏻',
  },
  {
    nome: 'Raphaella Adriane',
    nota: 5,
    texto:
      'Amei o atendimento deis do WhatsApp até a avaliação com a dra Julha , fui muito bem atendida 🥰 hoje vim pra minha gengivoplastia e daqui 15 dias volto pra por as minhas lentes 🥰😍',
  },
];

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="review-card__stars" aria-label={`${nota} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <path
            d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.22 5.06 16.8l.94-5.5-4-3.9 5.53-.8z"
            fill={i <= nota ? '#f5b400' : '#dfe6ef'}
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [ref, inView] = useInView<HTMLElement>(0.05);

  if (AVALIACOES.length === 0) return null;

  return (
    <section id="avaliacoes" className="section reviews" ref={ref}>
      <div className="section__inner">
        <div className={`section__header${inView ? ' animate-in' : ''}`}>
          <span className="badge badge--blue">Avaliações no Google</span>
          <h2>O que dizem nossos pacientes</h2>
          <p>Depoimentos de quem já cuidou do sorriso com a gente</p>
        </div>

        <div className="reviews__grid">
          {AVALIACOES.map((item, i) => (
            <article
              key={item.nome}
              className={`review-card${inView ? ' animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Estrelas nota={item.nota} />
              <p className="review-card__text">{item.texto}</p>
              <div className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                  {item.nome.trim().charAt(0)}
                </span>
                <div>
                  <strong>{item.nome}</strong>
                  <span className="review-card__source">Avaliação no Google</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`section__cta${inView ? ' animate-in' : ''}`}
          style={{ animationDelay: '0.5s' }}
        >
          <a href={PERFIL_GOOGLE} target="_blank" rel="noreferrer" className="btn-ghost btn-ghost--dark btn-lg">
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

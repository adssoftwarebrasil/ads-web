import { IconArrow } from './icons';

type Props = { onSimulate: () => void };

const situacoes = [
  'Busca e apreensão',
  'Parcelas em atraso',
  'Revisão de contrato',
  'Renegociação',
  'Quitação antecipada',
  'Taxas abusivas',
];

export default function Hero({ onSimulate }: Props) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob" />
        <div className="hero-blob2" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#00C4B4">
              <circle cx="6" cy="6" r="6" />
            </svg>
            Análise Extrajudicial
          </div>
          <h1 className="hero-title">
            Evite a <span>busca e apreensão</span> do seu carro
          </h1>
          <p className="hero-desc">
            Milhares de pessoas perdem seus veículos todos os dias devido atraso no pagamento das parcelas do
            financiamento. Saiba como realizar um acordo com abatimento da dívida.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={onSimulate}>
              Fazer Simulação Grátis <IconArrow />
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">12k+</div>
              <div className="stat-label">Contratos revisados</div>
            </div>
            <div className="stat">
              <div className="stat-num">94%</div>
              <div className="stat-label">Taxa de sucesso</div>
            </div>
            <div className="stat">
              <div className="stat-num">R$850</div>
              <div className="stat-label">Redução média/mês</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-title">Situações que atendemos</div>
            <div className="hero-tags">
              {situacoes.map((s) => (
                <div className="hero-tag" key={s}>
                  <div className="hero-tag-dot" /> {s}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card2">
            <div>
              <div className="hero-card2-text">Redução média nas parcelas</div>
              <div style={{ fontSize: 12, color: 'rgba(7,26,58,.6)', marginTop: 2 }}>Após análise extrajudicial</div>
            </div>
            <div className="hero-card2-num">–35%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

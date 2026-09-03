type Props = { onSimulate: () => void };

export default function CtaBanner({ onSimulate }: Props) {
  return (
    <div className="cta-banner">
      <div className="cta-inner">
        <div className="cta-text">
          <h2>
            Veículo quitado e <em>sem dor de cabeça</em>.
          </h2>
          <p>A amiga pode te ajudar!</p>
        </div>
        <button className="cta-btn" onClick={onSimulate}>
          Fazer Simulação Grátis →
        </button>
      </div>
    </div>
  );
}

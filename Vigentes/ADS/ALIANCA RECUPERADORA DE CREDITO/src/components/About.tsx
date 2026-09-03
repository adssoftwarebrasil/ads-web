import { IconArrow } from './icons';

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-img-wrap">
          <img src="/about-woman.avif" alt="Mulher dirigindo seu carro com tranquilidade" className="about-img" />
        </div>
        <div className="about-content">
          <div className="section-label">Sobre a Amiga</div>
          <h2 className="about-title">
            Trabalhamos para você conseguir <span>ficar com seu veículo</span>
          </h2>
          <p className="about-desc">
            A função principal da <strong style={{ color: '#fff' }}>Análise Extrajudicial</strong> é readequar ou até
            mesmo invalidar cláusulas ilegais existentes no contrato de financiamento, onde taxas abusivas são cobradas
            do consumidor.
          </p>
          <p className="about-desc">
            Depois dessa análise, caso existam taxas excessivas ou ilegais, <strong style={{ color: '#fff' }}>a Amiga</strong>{' '}
            buscará a <strong style={{ color: '#fff' }}>quitação do financiamento</strong>.{' '}
            <strong style={{ color: '#fff' }}>
              Vale ressaltar que a Amiga atua somente no âmbito nacional, tendo como base a legislação brasileira.
            </strong>
          </p>
          <button
            className="about-cta"
            onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fazer Simulação <IconArrow />
          </button>
        </div>
      </div>
    </section>
  );
}

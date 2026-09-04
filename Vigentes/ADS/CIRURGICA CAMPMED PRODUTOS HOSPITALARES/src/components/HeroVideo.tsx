import { useEffect, useRef } from 'react';
import { contato, selosDeConfianca, whats } from '../data/site';
import { Award, Headset, Layers, Phone, ShieldCheck, WhatsApp } from './icons';

const selosIcones = [Award, ShieldCheck, Headset, Layers];

/**
 * Mede a sobra do palco e escreve `--frame-w`: o quadro fica com a maior
 * medida 16:9 que cabe na altura E na largura disponíveis. Sem isso, ou o
 * vídeo passa da dobra em telas largas, ou fica cortado nas estreitas.
 */
function useLarguraDoQuadro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const palco = ref.current;
    if (!palco) return;

    const ajustar = () => {
      const estilo = getComputedStyle(palco);
      const largura =
        palco.clientWidth -
        parseFloat(estilo.paddingLeft) -
        parseFloat(estilo.paddingRight);
      let altura =
        palco.clientHeight -
        parseFloat(estilo.paddingTop) -
        parseFloat(estilo.paddingBottom);

      // No celular o recado divide o palco com o vídeo; desconte o que ele ocupa.
      const recado = palco.querySelector<HTMLElement>('.hero-lead');
      if (recado && recado.offsetParent !== null) {
        altura -= recado.offsetHeight + (parseFloat(estilo.rowGap) || 0);
      }

      const quadro = Math.max(0, Math.min(largura, (altura * 16) / 9));
      palco.style.setProperty('--frame-w', `${quadro}px`);
    };

    ajustar();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', ajustar);
      return () => window.removeEventListener('resize', ajustar);
    }

    const ro = new ResizeObserver(ajustar);
    ro.observe(palco);
    return () => ro.disconnect();
  }, []);

  return ref;
}

/**
 * Primeira dobra: o vídeo institucional é a apresentação da empresa.
 * O quadro nunca corta o vídeo — ele carrega logo e legendas embutidos —
 * e o fundo desfocado preenche a sobra da tela.
 */
export default function HeroVideo() {
  const palcoRef = useLarguraDoQuadro();

  return (
    <section className="hero" aria-label="Apresentação da CAMPMED">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-stage" ref={palcoRef}>
        {/* Só no celular: a sobra vertical ao lado do vídeo 16:9 vira recado. */}
        <div className="hero-lead">
          <span className="eyebrow">Cambuí, Campinas · desde 2008</span>
          <p>
            Produtos hospitalares com <b>atendimento especializado</b>
          </p>
        </div>

        <div className="hero-frame">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-campmed-poster.jpg"
            aria-label="Vídeo institucional da Cirúrgica CAMPMED, produtos hospitalares em Campinas"
          >
            <source src="/media/hero-campmed.webm" type="video/webm" />
            <source src="/media/hero-campmed.mp4" type="video/mp4" />
          </video>

          <span className="corner tl" aria-hidden="true" />
          <span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" />
          <span className="corner br" aria-hidden="true" />

          <span className="hero-tag">
            <span className="dot" aria-hidden="true" />
            Cirúrgica CAMPMED · Cambuí, Campinas
          </span>
        </div>
      </div>

      <div className="hero-actions">
        <p className="hint">
          Não sabe qual produto é o indicado? Nossa equipe orienta antes da compra.
        </p>
        <a
          className="btn btn--wa"
          href={whats(
            'Olá! Vim pelo site da CAMPMED e preciso de orientação para escolher um produto.',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={18} />
          Falar com Especialista
        </a>
        <a className="btn btn--ghost-light" href={contato.telefoneFixoLink}>
          <Phone size={17} />
          {contato.telefoneFixo}
        </a>
      </div>

      <div className="trustbar">
        <div className="shell">
          <ul className="trustbar-grid">
            {selosDeConfianca.map((selo, i) => {
              const Ico = selosIcones[i] ?? ShieldCheck;
              return (
                <li className="trust-item" key={selo.valor}>
                  <Ico size={19} />
                  <span className="trust-text">
                    <b>{selo.valor}</b>
                    <small>{selo.rotulo}</small>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

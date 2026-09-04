import { contato, whats } from '../data/site';
import { MapPin, Phone, WhatsApp } from './icons';
import Reveal from './Reveal';

type Props = {
  titulo?: string;
  texto?: string;
  mensagem?: string;
};

/**
 * Faixa de conversão. Aparece na home e no fim de cada categoria, sempre
 * puxando para a conversa com um especialista — que é como a CAMPMED vende.
 */
export default function SpecialistBand({
  titulo = 'Precisa de orientação para escolher?',
  texto = 'Cadeiras de rodas, camas, órteses e equipamentos exigem indicação correta. Converse com nossa equipe técnica antes de comprar — sem compromisso.',
  mensagem = 'Olá! Vim pelo site da CAMPMED e gostaria de orientação de um especialista.',
}: Props) {
  return (
    <section className="cta-band">
      <div className="shell">
        <Reveal>
          <span className="eyebrow" style={{ color: 'rgba(224,236,250,.85)' }}>
            Atendimento consultivo
          </span>
          <h2>{titulo}</h2>
          <p>{texto}</p>
          <p style={{ marginTop: '0.9rem', fontSize: '0.88rem', opacity: 0.85 }}>
            <MapPin size={15} style={{ verticalAlign: -3, marginRight: 6 }} />
            {contato.endereco} · {contato.horarioResumo}
          </p>
        </Reveal>

        <Reveal className="cta-band-actions">
          <a
            className="btn btn--wa"
            href={whats(mensagem)}
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
        </Reveal>
      </div>
    </section>
  );
}

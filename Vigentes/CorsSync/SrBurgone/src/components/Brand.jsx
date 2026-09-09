import { clientImages } from '../data/clientImages';

export default function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? ' brand--footer' : ''}`}
      href="#inicio"
      aria-label="Sr Burgone — início"
    >
      <img
        className="brand__logo"
        src={clientImages.logo.src}
        alt={clientImages.logo.alt}
        width="640"
        height="640"
      />
      <span className="brand__type">
        <span>SR. BURGONE</span>
        <small>HAMBÚRGUER DE RESPEITO</small>
      </span>
    </a>
  );
}

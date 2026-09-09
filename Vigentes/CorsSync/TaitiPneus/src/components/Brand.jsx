export default function Brand({ inverse = false }) {
  return (
    <a className={`brand${inverse ? ' brand--inverse' : ''}`} href="#inicio" aria-label="Taiti Pneus — início">
      <span className="brand-name">Taiti<span>Pneus</span><i aria-hidden="true" /></span>
      <span className="brand-caption">AUTO CENTER</span>
    </a>
  );
}

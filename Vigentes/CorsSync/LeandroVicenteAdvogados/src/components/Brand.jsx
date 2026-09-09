import brandMark from '../assets/brand-mark.png'

export default function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Leandro Vicente - início">
      <span className="brand__mark" aria-hidden="true">
        <img src={brandMark} alt="" />
      </span>
      <span className="brand__words">
        <strong>Leandro Vicente</strong>
        <small>Advocacia e Consultoria Jurídica</small>
      </span>
    </a>
  )
}

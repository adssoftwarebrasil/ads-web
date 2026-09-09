import logo from '../assets/logo.jpeg'

export function Brand({ inverted = false }) {
  return (
    <a className={`brand${inverted ? ' brand--inverted' : ''}`} href="#inicio" aria-label="Telas e Arames Confiança - início">
      <span className="brand__mark" aria-hidden="true">
        <img src={logo} alt="" />
      </span>
      <span className="brand__name">
        <strong>Telas</strong>
        <span>Confiança</span>
      </span>
    </a>
  )
}


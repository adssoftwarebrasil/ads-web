import logoDuarte from '../assets/logo-duarte-colchoes.png'

export default function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#inicio" aria-label="Duarte Colchões — início">
      <span className="brand__logo-frame" aria-hidden="true">
        <img src={logoDuarte} alt="" />
      </span>
    </a>
  )
}

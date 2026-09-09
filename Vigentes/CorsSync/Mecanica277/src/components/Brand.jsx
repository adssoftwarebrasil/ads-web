import logo from '../assets/logo-mecanica277.png'

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="Mecânica 277 — início">
      <img src={logo} alt="Mecânica 277" />
    </a>
  )
}

export default Brand

import logo from '../assets/brand/logo-domingao-farma.png'

export function Brand({ compact = false }) {
  return (
    <a className={'brand' + (compact ? ' brand--compact' : '')} href="#inicio" aria-label="Domingão Farma — início">
      <img src={logo} alt="Domingão Farma" />
    </a>
  )
}

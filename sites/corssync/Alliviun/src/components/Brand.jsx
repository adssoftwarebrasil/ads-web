import logo from '../assets/logo-alliviun-cropped.png'

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? 'brand--footer' : ''}`} href="#inicio" aria-label="Alliviun Massoterapia — início">
      <img src={logo} alt="Alliviun Massoterapia" />
    </a>
  )
}

export default Brand


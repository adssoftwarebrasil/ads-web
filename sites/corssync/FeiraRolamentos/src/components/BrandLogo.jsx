import logo from '../assets/logo-feira.jpg'

export default function BrandLogo({ className = '' }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logo}
      alt="Feira Rolamentos"
      width="6060"
      height="2061"
    />
  )
}


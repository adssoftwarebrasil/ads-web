function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Goiatuba Hotel — início">
      <span className="brand__name">Goiatuba</span>
      <span className="brand__rule" aria-hidden="true" />
      <span className="brand__type">Hotel</span>
    </a>
  )
}

export default Logo

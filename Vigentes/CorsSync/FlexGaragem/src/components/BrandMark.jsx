function BrandMark({ compact = false, official = false }) {
  if (official) {
    return (
      <a className="brand-mark brand-mark--official" href="#inicio" aria-label="Flex Garagem — início">
        <span className="brand-mark__logo-frame">
          <img src="/flex-garagem-logo.png" alt="Flex Garagem — Estética Automotiva" />
        </span>
      </a>
    )
  }

  return (
    <a className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} href="#inicio" aria-label="Flex Garagem — início">
      <span className="brand-mark__flex">FLEX</span>
      <span className="brand-mark__garage">GARAGEM</span>
    </a>
  )
}

export default BrandMark

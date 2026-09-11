import { useId } from 'react'
import brandLogo from '../assets/logo-white.png'

function Brand({ light = false, compact = false }) {
  const filterId = useId()

  return (
    <span className={'brand' + (light ? ' brand--light' : '') + (compact ? ' brand--compact' : '')}>
      {/* The viewBox removes only empty margins; luminance makes the source's black background transparent. */}
      <svg className="brand__logo" viewBox="0 380 1280 480" role="img" aria-label="Óptica Renascer" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.2126 0.7152 0.0722 0 0" />
          </filter>
        </defs>
        <image href={brandLogo} width="1280" height="1280" filter={`url(#${filterId})`} />
      </svg>
    </span>
  )
}

export default Brand

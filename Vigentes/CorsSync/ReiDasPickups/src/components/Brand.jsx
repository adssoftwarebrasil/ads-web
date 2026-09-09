import { Crown } from 'lucide-react'

function Brand({ compact = false }) {
  return (
    <span className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="Rei das Pickups Auto Center">
      <span className="brand__crown" aria-hidden="true">
        <Crown strokeWidth={2.2} />
      </span>
      <span className="brand__text">
        <strong>Rei das <em>Pickups</em></strong>
        <small>Auto Center</small>
      </span>
    </span>
  )
}

export default Brand

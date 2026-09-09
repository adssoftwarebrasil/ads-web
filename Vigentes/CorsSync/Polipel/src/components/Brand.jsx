export function Brand({ inverse = false }) {
  return (
    <span className={`brand ${inverse ? 'brand--inverse' : ''}`}>
      <svg
        className="brand__mark"
        viewBox="0 0 64 56"
        role="img"
        aria-label="Símbolo Polipel"
      >
        <path className="brand__shape" d="M5 39 27 4l6 24 24 8L5 39Z" />
        <path className="brand__fold" d="m27 4 6 24-16 10L27 4Z" />
        <path className="brand__accent" d="m33 28 24 8-14 14-10-22Z" />
      </svg>
      <span className="brand__name">Polipel</span>
    </span>
  )
}


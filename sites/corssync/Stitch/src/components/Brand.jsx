function Brand({ inverse = false, compact = false }) {
  return (
    <a
      className={`brand ${inverse ? "brand--inverse" : ""} ${
        compact ? "brand--compact" : ""
      }`}
      href="#inicio"
      aria-label="Kadima Soluções em Informática — voltar ao início"
    >
      <span className="brand__mark" aria-hidden="true">
        K
      </span>
      <span className="brand__text">
        <strong>Kadima</strong>
        {!compact && <small>Soluções em Informática</small>}
      </span>
    </a>
  );
}

export default Brand;


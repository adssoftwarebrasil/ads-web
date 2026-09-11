import logo from "../assets/tj-mix-logo.jpeg";

function Brand({ compact = false }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand__mark" aria-hidden="true">
        <img src={logo} alt="" />
      </span>
      <span className="brand__copy">
        <strong>TJ MIX</strong>
        {!compact && <small>Materiais para construção</small>}
      </span>
    </span>
  );
}

export default Brand;

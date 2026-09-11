import logo from "../assets/logo-reboucas.jpg";

function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#inicio" aria-label="Rebouças Embalagens — início">
      <img src={logo} alt="" width="56" height="56" />
      <span>
        <strong>Rebouças</strong>
        <small>Embalagens</small>
      </span>
    </a>
  );
}

export default Logo;

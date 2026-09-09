import logo from "../assets/premium-logo.webp";

export default function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="Premium Energia Solar — início"
    >
      <span className="brand-crop">
        <img
          src={logo}
          alt="Premium Energia Solar — Usina Fotovoltaica e Eletroposto"
          width="2214"
          height="2214"
        />
      </span>
    </a>
  );
}

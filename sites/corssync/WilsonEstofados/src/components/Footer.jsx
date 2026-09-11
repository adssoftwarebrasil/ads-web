import logo from "../assets/images/logo-wilson.webp";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a href="#inicio" aria-label="Wilson Estofados — voltar ao início">
          <img
            src={logo}
            width="100"
            height="100"
            alt="Wilson Estofados"
            loading="lazy"
          />
        </a>
        <p>
          Transformar, renovar, <em>acolher.</em>
          <span>Fabricação sob medida e reforma de estofados.</span>
        </p>
        <a className="back-top" href="#inicio">
          Voltar ao topo <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Wilson Estofados. Todos os direitos
          reservados.
        </span>
        <span>Feito para os seus momentos.</span>
      </div>
    </footer>
  );
}

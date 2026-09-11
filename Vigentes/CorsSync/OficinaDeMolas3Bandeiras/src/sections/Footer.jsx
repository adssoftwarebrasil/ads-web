import logo from '../assets/images/logo-3-bandeiras.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="Posto de Molas 3 Bandeiras" />
        </a>
        <p>Peças, manutenção e reparos para veículos médios e pesados.</p>
        <div className="footer-meta">
          <span>Nova Olímpia · Mato Grosso</span>
          <span>© {new Date().getFullYear()} Posto de Molas 3 Bandeiras</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

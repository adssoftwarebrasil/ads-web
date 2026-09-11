import logo from '../assets/gra-logo.jpg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="GRA Distribuidora de Peças" />
        </a>
        <p>Peças • Mecânica • Guincho 24 horas</p>
        <p>© {new Date().getFullYear()} GRA Distribuidora de Peças.</p>
      </div>
    </footer>
  )
}

export default Footer
